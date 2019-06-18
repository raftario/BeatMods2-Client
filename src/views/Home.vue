<template>
  <div id="home">
    <HomeInfo></HomeInfo>
  </div>
</template>

<script lang="ts">
  import HomeInfo from '@/components/HomeInfo.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      HomeInfo
    }
  })
  export default class Home extends Vue {}
</script>
