<template>
  <ul v-if="listType === 'unordered'">
    <li v-for="e in contents" v-html="e"></li>
  </ul>
  <ol v-else>
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

<style scoped>
  ul, ol {
    list-style: disc outside;
    margin-left: 1.5em;
  }
</style>
