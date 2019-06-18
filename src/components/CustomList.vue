<template>
  <ul v-if="listType === 'unordered'" class="custom-ul">
    <li v-for="e in contents" v-html="e"></li>
  </ul>
  <ol v-else class="custom-ol">
    <li v-for="e in contents" v-html="e"></li>
  </ol>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CustomList extends Vue {
  @Prop({
    required: true
  })
  public contents: string[]

  @Prop({
    default: 'unordered',
    validator (value: string): boolean {
      return ['unordered', 'ordered'].indexOf(value) !== -1
    }
  })
  public listType: string
}
</script>
