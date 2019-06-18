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
      .replace(/<(h([1-5]).*?)>/g, '<$1 class="title is-$2">')
      .replace(/<table(.*?)>/g, '<table$1 class="table is-striped">')
      .replace(/<([uo])l(.*?)>/g, '<$1l$2 class="custom-$1l">')
  }
}
</script>
