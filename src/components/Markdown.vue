<template>
  <div class="markdown" v-html="htmlContents"></div>
</template>

<script lang="ts">
import { sanitize } from 'dompurify'
import marked from 'marked'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Markdown extends Vue {
  @Prop({
    required: true
  })
  public contents: string

  @Prop()
  public baseUrl: string

  get htmlContents (): string {
    return marked(this.contents, {
      baseUrl: this.baseUrl,
      sanitize: true,
      sanitizer: sanitize
    })
  }
}
</script>
