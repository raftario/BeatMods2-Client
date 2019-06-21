<template>
  <div id="mods">
    <b-tabs
      v-model="activeTab"
      class="main"
      expanded
      destroy-on-hide
    >
      <ModListMenu v-model="filters"></ModListMenu>
      <transition
        name="fade"
        mode="out-in"
      >
        <b-tab-item label="PC">
          <ModTable
            :data="pcModsData"
            :filters="filters"
            :loading="pcLoading"
          ></ModTable>
        </b-tab-item>
      </transition>
      <transition
        name="fade"
        mode="out-in"
      >
        <b-tab-item label="Quest">
          <ModTable
            :data="questModsData"
            :filters="filters"
          ></ModTable>
        </b-tab-item>
      </transition>
    </b-tabs>
  </div>
</template>

<script lang="ts">
  import ModListMenu from '@/components/ModListMenu.vue'
  import ModTable from '@/components/ModTable.vue'
  import { Approval, IModListMenuFilters, IModSimple } from '@/types'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: { ModTable, ModListMenu }
  })
  export default class ModList extends Vue {
    public activeTab: number = 0
    public pcLoading: boolean = false

    public pcModsData: IModSimple[] = require('../assets/dump.json')
    public questModsData: IModSimple[] = [
      {
        name: 'Patcher',
        version: '0.1.0',
        author: 'emulamer',
        gameVersion: '1.1.0',
        upload: '2019-06-14',
        approval: Approval.Approved,
        tags: [
          'Core',
          'Mods'
        ]
      }
    ]

    public filters: IModListMenuFilters = {
      approval: [Approval.Approved],
      gameVersion: ['1.1.0'],
      tags: ['Core'],
      search: ''
    }
  }
</script>

<style>
  .main {
    padding: 1.5rem;
  }
</style>
