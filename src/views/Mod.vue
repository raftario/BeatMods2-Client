<template>
  <div class="mod">
    <section class="section">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <h1>
              <span class="title is-1">
                {{ $route.params.modName }}
              </span> <span class="subtitle is-3">
                {{ $route.params.modVersion }}
              </span>
            </h1>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <b-button
              type="is-primary"
              size="is-large"
              outlined
            >
              Download
            </b-button>
          </div>
        </div>
      </div>
      <hr>
      <div class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Author</p>
            <router-link
              class="title-nocolor"
              :to="'/user/' + mod.author"
            >
              {{ mod.author }}
            </router-link>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Game version</p>
            <p class="title">
              {{ mod.gameVersion }}
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Upload date</p>
            <p class="title">
              {{ new Date(mod.upload).toLocaleDateString() }}
            </p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Status</p>
            <b-tag
              type="is-success"
              size="is-medium"
              v-if="mod.approval === 'approved'"
            >
              Approved
            </b-tag>
            <b-tag
              type="is-danger"
              size="is-medium"
              v-else-if="mod.approval === 'declined'"
            >
              Declined
            </b-tag>
            <b-tag
              type="is-warning"
              size="is-medium"
              v-else-if="mod.approval === 'pending'"
            >
              Pending
            </b-tag>
            <b-tag
              size="is-medium"
              v-else-if="mod.approval === 'inactive'"
            >
              Inactive
            </b-tag>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Tags</p>
            <b-taglist>
              <b-tag
                size="is-medium"
                v-for="t in mod.tags"
                :key="t"
              >
                {{ t }}
              </b-tag>
            </b-taglist>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <Markdown :contents="mod.description"></Markdown>
    </section>
  </div>
</template>

<script lang="ts">
  import Markdown from '@/components/Markdown.vue'
  import { Approval, IMod } from '@/types'
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: { Markdown }
  })
  export default class Mod extends Vue {
    public mod: IMod = {
      approval: Approval.Approved,
      author: '',
      description: '',
      gameVersion: '',
      name: '',
      tags: [],
      upload: '',
      version: ''
    }

    private mounted (): void {
      this.mod = require('../assets/dump.json').filter((m: IMod) =>
        this.$route.params.modName === m.name && this.$route.params.modVersion === m.version
      )[0]

      this.mod.description = '# Markdown description goes here\n' +
        '\n' +
        'You can include any GitHub flavored markdown.\n' +
        '\n' +
        '_Italic_, **bold** or ~~strikethrough~~ text.\n' +
        '\n' +
        '* Unordered\n' +
        '* lists\n' +
        '\n' +
        '1. or\n' +
        '2. ordered\n' +
        '3. ones.\n' +
        '\n' +
        '---\n' +
        '\n' +
        'Separators too.\n' +
        '\n' +
        '[Links, obviously.](https://www.google.com/)\n' +
        '\n' +
        '### All header sizes are available.\n' +
        '\n' +
        '`Code snippets`\n' +
        '```\n' +
        'and blocks\n' +
        'are availbale too.\n' +
        '```\n' +
        '\n' +
        'You | can | even\n' +
        '--- | --- | ----\n' +
        'use | markdown | tables\n' +
        'they | work | too.\n' +
        '\n' +
        // tslint:disable-next-line:max-line-length
        '![minecraft](http://minecraftvillageseeds.com/wiki/images/thumb/e/e0/Holy_Minecraft_1.5.2_village_seed_with_pigs.jpg/720px-Holy_Minecraft_1.5.2_village_seed_with_pigs.jpg)\n' +
        'Don\'t forget to add Minecraft images.'
    }
  }
</script>

<style scoped>
  .title-nocolor {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
  }
</style>
