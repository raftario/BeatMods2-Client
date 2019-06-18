<template>
  <section class="section">
    <h1 class="title is-1">Welcome to BeatMods</h1>
    <h3 class="subtitle is-3">A Beat Saber mod repository maintained by the Beat Saber Modding Group</h3>

    <hr>

    <p>
      Need help installing mods?
      Check out the <a href="https://bsmg.wiki/beginners-guide">beginner's guide</a>.<br>
      You can also <a href="https://discord.gg/beatsabermods">join the official Discord</a>.
    </p>
    <span>Mod installers are available:</span>
    <CustomList :contents="installerLinks"></CustomList>
  </section>
</template>

<script lang="ts">
import CustomList from '@/components/CustomList.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { CustomList }
})
export default class HomeInfo extends Vue {
  public installerLinks: string[] = [
    '<a href="https://github.com/Assistant/ModAssistant/releases/latest">ModAssistant</a>',
    '<a href="https://github.com/beat-saber-modding-group/BeatSaberModInstaller/releases/latest">Beat Saber Mod Installer</a>',
    '<a href="https://bsaber.com/beatdrop/">BeatDrop</a>'
  ]
}
</script>

<style scoped>
  p {
    margin-bottom: 0.75em;
  }
</style>
