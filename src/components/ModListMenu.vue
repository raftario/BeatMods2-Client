<template>
  <div class="level">
    <div class="level-left has-text-weight-medium">
      <div class="level-item">
        <DropdownCheckboxes v-bind="gameversion"></DropdownCheckboxes>
      </div>
      <div class="level-item">
        <DropdownCheckboxes v-bind="approval"></DropdownCheckboxes>
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
    public gameversion: object = {
      display: 'Game version',
      checkboxes: [
        { display: '1.1.0', value: '1.1.0' },
        { display: '1.0.0', value: '1.0.0' },
        { display: '0.13.2', value: '0.13.2' }
      ],
      defaults: ['1.1.0']
    }

    public approval: object = {
      display: 'Status',
      checkboxes: [
        { display: 'Approved', value: 'approved' },
        { display: 'Declined', value: 'declined' },
        { display: 'Pending', value: 'pending' },
        { display: 'Inactive', value: 'inactive' }
      ],
      defaults: ['approved']
    }
  }
</script>