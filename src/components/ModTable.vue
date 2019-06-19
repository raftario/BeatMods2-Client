<template>
  <b-table
    :data="data"
    :loading="isLoading"
    :row-class="() => 'pointer'"
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
        {{ props.row.name + ' ' + props.row.version }}
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
        <span
          class="tag is-success"
          v-if="props.row.status === 'approved'"
        >
          Approved
        </span>
        <span
          class="tag is-danger"
          v-else-if="props.row.status === 'declined'"
        >
          Declined
        </span>
        <span
          class="tag is-warning"
          v-else-if="props.row.status === 'pending'"
        >
          Pending
        </span>
        <span
          class="tag is-light"
          v-else-if="props.row.status === 'inactive'"
        >
          Inactive
        </span>
      </b-table-column>
      <b-table-column
        field="tags"
        label="Tags"
      >
        <span
          class="tag is-light"
          v-for="t in props.row.tags"
          :key="t"
        >
          {{ t }}
        </span>
      </b-table-column>
    </template>
  </b-table>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({})
  export default class ModTable extends Vue {
    @Prop({
      required: true
    })
    public data: object[]

    @Prop({
      default: false
    })
    public isLoading: boolean
  }
</script>
