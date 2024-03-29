<template>
  <b-table
    :data="filteredData"
    :loading="isLoading"
    :row-class="() => 'pointer'"
    :paginated="true"
    :per-page="50"
    @click="handleClick"
    default-sort="upload"
    default-sort-direction="desc"
    hoverable
    mobile-cards
  >
    <template slot-scope="props">
      <b-table-column
        field="name"
        label="Name"
        sortable
      >
        <span class="has-text-primary has-text-weight-medium">{{ props.row.name }}</span> {{ props.row.version }}
      </b-table-column>
      <b-table-column
        field="author"
        label="Author"
        sortable
      >
        {{ props.row.author }}
      </b-table-column>
      <b-table-column
        field="gameVersion"
        label="Game version"
        sortable
      >
        {{ props.row.gameVersion }}
      </b-table-column>
      <b-table-column
        field="upload"
        label="Upload date"
        sortable
      >
        {{ new Date(props.row.upload).toLocaleDateString() }}
      </b-table-column>
      <b-table-column
        field="approval"
        label="Status"
        sortable
      >
        <b-tag
          type="is-success"
          v-if="props.row.approval === 'approved'"
        >
          Approved
        </b-tag>
        <b-tag
          type="is-danger"
          v-else-if="props.row.approval === 'declined'"
        >
          Declined
        </b-tag>
        <b-tag
          type="is-warning"
          v-else-if="props.row.approval === 'pending'"
        >
          Pending
        </b-tag>
        <b-tag v-else-if="props.row.approval === 'inactive'">
          Inactive
        </b-tag>
      </b-table-column>
      <b-table-column
        field="tags"
        label="Tags"
      >
        <b-taglist>
          <b-tag
            v-for="t in props.row.tags"
            :key="t"
          >
            {{ t }}
          </b-tag>
        </b-taglist>
      </b-table-column>
    </template>
    <template slot="empty">
      <section class="section">
        <p class="has-text-grey has-text-centered">No mods found matching the provided filters.</p>
      </section>
    </template>
  </b-table>
</template>

<script lang="ts">
  import { IModListMenuFilters, IModSimple } from '@/types'
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({})
  export default class ModTable extends Vue {
    @Prop({
      required: true
    })
    public data: IModSimple[]

    @Prop({
      default: false
    })
    public isLoading: boolean

    @Prop({
      required: true
    }) public filters: IModListMenuFilters

    get filteredData (): object[] {
      return this.data
        .filter(m => {
          return this.filters.approval.some(f => m.approval === f)
            && this.filters.gameVersion.some(gv => m.gameVersion === gv)
            && this.filters.tags.some(t => m.tags.some(mt => t === mt))
        })
        .filter(m => {
          try {
            const regex: RegExp = new RegExp(this.filters.search, 'i')
            return regex.test(m.name)
          } catch {
            return m.name.toLowerCase().includes(this.filters.search.toLowerCase())
          }
        })
    }

    public handleClick (row: IModSimple): void {
      this.$router.push({ name: 'mod', params: { modName: row.name, modVersion: row.version } })
    }
  }
</script>

<style lang="scss" scoped>
  tr:hover {
    span.has-text-primary {
      font-weight: bold !important;
    }
  }
</style>
