<template>
  <div class="level">
    <div class="level-left has-text-weight-medium">
      <div class="level-item">
        <DropdownCheckboxes v-bind="approval"></DropdownCheckboxes>
      </div>
      <div class="level-item">
        <DropdownCheckboxes v-bind="gameVersion"></DropdownCheckboxes>
      </div>
      <div class="level-item">
        <DropdownCheckboxes v-bind="tags"></DropdownCheckboxes>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <b-field class="level-item">
          <b-input
            type="search"
            icon="search"
            placeholder="Search"
          >
          </b-input>
        </b-field>
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
    public approval: object = {
      label: 'Status',
      checkboxes: [
        { label: 'Approved', value: 'approved' },
        { label: 'Declined', value: 'declined' },
        { label: 'Pending', value: 'pending' },
        { label: 'Inactive', value: 'inactive' }
      ],
      defaults: ['approved']
    }

    public gameVersion: object = {
      label: 'Game version',
      checkboxes: [
        { label: '1.1.0', value: '1.1.0' },
        { label: '1.0.0', value: '1.0.0' },
        { label: '0.13.2', value: '0.13.2' }
      ],
      defaults: ['1.1.0']
    }

    public tags: object = {
      label: 'Tags',
      checkboxes: [
        { label: 'Core', value: 'Core' },
        { label: 'Utils', value: 'Utils' }
      ],
      defaults: ['Core', 'Utils']
    }
  }
</script>
