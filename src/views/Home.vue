<template>
  <div id="home">
    <HomeInfo></HomeInfo>
    <section class="section">
      <h2 class="title is-2">News</h2>
      <hr>
      <Markdown :contents="'_**News**_ **go** _here_'"></Markdown>
    </section>
  </div>
</template>

<script lang="ts">
  import HomeInfo from '@/components/HomeInfo.vue'
  import Markdown from '@/components/Markdown.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Markdown,
      HomeInfo
    }
  })
  export default class Home extends Vue {}
</script>
