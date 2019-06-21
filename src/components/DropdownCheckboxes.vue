<template>
  <b-dropdown>
    <a
      slot="trigger"
      role="button"
    >
      <span>{{label}}</span>
      <b-icon icon="caret-down"></b-icon>
    </a>

    <b-dropdown-item custom>
      <div
        class="field"
        v-for="c in checkboxes"
        :key="c.value"
      >
        <b-checkbox
          v-model="values"
          :native-value="c.value"
          @input="$emit('change', values)"
        >
          {{ c.label }}
        </b-checkbox>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
  import { IDropdownCheckbox } from '@/types'
  import { Component, Model, Prop, Vue } from 'vue-property-decorator'

  @Component({})
  export default class DropdownCheckboxes extends Vue {
    @Prop({
      required: true
    })
    public label: string

    @Prop({
      required: true
    })
    public checkboxes: Array<IDropdownCheckbox<any>>

    @Model('change', { type: Array }) public defaults: any[]

    public values: any[] = this.defaults
  }
</script>

<style scoped>

</style>
