<template>
  <b-dropdown>
    <a
      slot="trigger"
      role="button"
    >
      <span>{{display}}</span>
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
        >
          {{ c.display }}
        </b-checkbox>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({})
  export default class DropdownCheckboxes extends Vue {
    @Prop({
      required: true
    })
    public display: string

    @Prop({
      required: true
    })
    public checkboxes: object[]

    @Prop({
      default: []
    })
    public defaults: any[]

    public values: any[] = this.defaults
  }
</script>

<style scoped>

</style>
