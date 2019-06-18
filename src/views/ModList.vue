<template>
  <div id="mods">
    <b-tabs
      v-model="activeTab"
      class="main"
      expanded
      destroy-on-hide
    >
      <b-tab-item label="PC">
        PC mods
      </b-tab-item>
      <b-tab-item label="Quest">
        Quest mods
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class ModList extends Vue {
  public activeTab: number = 0
}
</script>

<style>
  .main {
    padding: 1.5rem;
  }
</style>
