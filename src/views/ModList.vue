<template>
  <div id="mods">
    <b-tabs
      v-model="activeTab"
      class="main"
      expanded
      destroy-on-hide
    >
      <b-tab-item label="PC">
        <ModListMenu></ModListMenu>
      </b-tab-item>
      <b-tab-item label="Quest">
        <ModListMenu></ModListMenu>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import ModListMenu from '@/components/ModListMenu.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { ModListMenu }
})
export default class ModList extends Vue {
  public activeTab: number = 0
}
</script>

<style>
  .main {
    padding: 1.5rem;
  }
</style>
