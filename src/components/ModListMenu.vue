<template>
  <div class="level">
    <div class="level-left has-text-weight-medium">
      <div class="level-item">Filters</div>
      <div class="level-item">
        <b-field class="level-item">
          <b-input
            type="search"
            icon="search"
          >
          </b-input>
        </b-field>
      </div>
      <div class="level-item">
        <DropdownCheckboxes v-bind="gameversion"></DropdownCheckboxes>
      </div>
      <div class="level-item">
        <DropdownCheckboxes v-bind="approval"></DropdownCheckboxes>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item has-text-weight-medium">Sorting by</div>
      <div class="level-item">
        <b-select :value="sortOptions[0].value">
          <option
            v-for="o in sortOptions"
            :value="o.value"
            :key="o.value"
          >
            {{ o.display }}
          </option>
        </b-select>
      </div>
      <div class="level-item">
        <b-switch v-model="ascending">
          {{ ascending ? 'Ascending' : 'Descending' }}
        </b-switch>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import DropdownCheckboxes from '@/components/DropdownCheckboxes.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: { DropdownCheckboxes }
  })
  export default class ModListMenu extends Vue {
    public gameversion: object = {
      display: 'Game version',
      checkboxes: [
        { display: '1.1.0', value: '1.1.0' },
        { display: '1.0.0', value: '1.0.0' },
        { display: '0.13.2', value: '0.13.2' }
      ],
      defaults: ['Approved']
    }

    public approval: object = {
      display: 'Approval',
      checkboxes: [
        { display: 'Approved', value: 'Approved' },
        { display: 'Declined', value: 'Declined' },
        { display: 'Pending', value: 'Pending' },
        { display: 'Inactive', value: 'Inactive' }
      ],
      defaults: ['Approved']
    }

    public sortOptions: object[] = [
      { display: 'Name', value: 'name' },
      { display: 'Upload date', value: 'uploaded' },
      { display: 'Author', value: 'author' },
      { display: 'Game version', value: 'gameversion' },
      { display: 'Tags', value: 'tags' }
    ]

    public ascending: boolean = true
  }
</script>
