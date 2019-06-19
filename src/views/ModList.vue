<template>
  <div id="mods">
    <b-tabs
      v-model="activeTab"
      class="main"
      expanded
      destroy-on-hide
    >
      <ModListMenu></ModListMenu>
      <transition
        name="fade"
        mode="out-in"
      >
        <b-tab-item label="PC">
          <ModTable :data="pcModsData"></ModTable>
        </b-tab-item>
      </transition>
      <transition
        name="fade"
        mode="out-in"
      >
        <b-tab-item label="Quest">
          <ModTable :data="questModsData"></ModTable>
        </b-tab-item>
      </transition>
    </b-tabs>
  </div>
</template>

<script lang="ts">
  import ModListMenu from '@/components/ModListMenu.vue'
  import ModTable from '@/components/ModTable.vue'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: { ModTable, ModListMenu }
  })
  export default class ModList extends Vue {
    public activeTab: number = 0
    public pcModsData: object[] = [
      {
        name: 'BSIPA',
        version: '1.2.3',
        author: 'DaNike',
        gameVersion: '1.1.0',
        upload: '2019-06-19',
        status: 'approved'
      },
      {
        name: 'SongCore',
        version: '3.2.1',
        author: 'Kyle',
        gameVersion: '1.1.0',
        upload: '2019-06-12',
        status: 'pending'
      }
    ]
    public questModsData: object[] = [
      {
        name: 'Patcher',
        version: '0.1.0',
        author: 'emulamer',
        gameVersion: '1.1.0',
        upload: '2019-06-14',
        status: 'approved'
      }
    ]
  }
</script>

<style>
  .main {
    padding: 1.5rem;
  }
</style>
