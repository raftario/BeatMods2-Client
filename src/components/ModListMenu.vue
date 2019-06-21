<template>
  <div class="level">
    <div class="level-left has-text-weight-medium">
      <div class="level-item">
        <DropdownCheckboxes
          :label="approval.label"
          :checkboxes="approval.checkboxes"
          v-model="approval.values"
          @change="emitFilters()"
        ></DropdownCheckboxes>
      </div>
      <div class="level-item">
        <DropdownCheckboxes
          :label="gameVersion.label"
          :checkboxes="gameVersion.checkboxes"
          v-model="gameVersion.values"
          @change="emitFilters()"
        ></DropdownCheckboxes>
      </div>
      <div class="level-item">
        <DropdownCheckboxes
          :label="tags.label"
          :checkboxes="tags.checkboxes"
          v-model="tags.values"
          @change="emitFilters()"
        ></DropdownCheckboxes>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <b-field class="level-item">
          <b-input
            type="search"
            icon="search"
            placeholder="Search"
            v-model="search"
            @input="emitFilters()"
          >
          </b-input>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DropdownCheckboxes from '@/components/DropdownCheckboxes.vue'
import { Approval, IDropdownCheckboxes, IModListMenuFilters } from '@/types'
import { Component, Model, Vue } from 'vue-property-decorator'

@Component({
  components: { DropdownCheckboxes }
})
export default class ModListMenu extends Vue {
  @Model('change', { type: Object }) public defaults: IModListMenuFilters

  public approval: IDropdownCheckboxes<Approval> = {
    label: 'Status',
    checkboxes: [
      { label: 'Approved', value: Approval.Approved },
      { label: 'Declined', value: Approval.Declined },
      { label: 'Pending', value: Approval.Pending },
      { label: 'Inactive', value: Approval.Inactive }
    ],
    values: this.defaults.approval
  }

  public gameVersion: IDropdownCheckboxes<string> = {
    label: 'Game version',
    checkboxes: [
      { label: '1.1.0', value: '1.1.0' },
      { label: '1.0.0', value: '1.0.0' },
      { label: '0.13.2', value: '0.13.2' }
    ],
    values: this.defaults.gameVersion
  }

  public tags: IDropdownCheckboxes<string> = {
    label: 'Tags',
    checkboxes: [
      { label: 'Core', value: 'Core' },
      { label: 'Utils', value: 'Utils' }
    ],
    values: this.defaults.tags
  }

  public search: string = this.defaults.search

  get filters (): IModListMenuFilters {
    return {
      approval: this.approval.values,
      gameVersion: this.gameVersion.values,
      tags: this.tags.values,
      search: this.search
    }
  }

  public emitFilters (): void {
    this.$emit('change', this.filters)
  }
}
</script>
