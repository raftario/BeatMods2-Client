<template>
  <div id="app">
    <nav
      class="navbar is-dark"
      role="navigation"
    >
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          to="/"
        >
          <img
            src="./assets/logo-compact.svg"
            alt="logo"
            class="logo"
          >
          BeatMods
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div
        class="navbar-menu"
        @click.self.stop="menuOpen = true"
      >
        <div class="navbar-end">
          <div class="navbar-item">
            <b-button
              type="is-light"
              icon-pack="fab"
              icon-left="github"
              outlined
            >
              Login
            </b-button>
          </div>
        </div>
      </div>
    </nav>
    <div class="columns is-gapless is-desktop">
      <b-collapse
        class="column is-one-fifth-desktop has-background-light"
        :open="menuOpen"
      >
        <nav class="menu">
          <p class="menu-label">
            Browse
          </p>
          <ul class="menu-list">
            <li>
              <router-link
                to="/"
                active-class="is-active"
                exact
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/mods"
                active-class="is-active"
              >
                Mods
              </router-link>
            </li>
            <li>
              <router-link
                to="/users"
                active-class="is-active"
              >
                Users
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                active-class="is-active"
              >
                About
              </router-link>
            </li>
          </ul>

          <p class="menu-label">
            Account
          </p>
          <ul class="menu-list">
            <li>
              <router-link
                to="/upload"
                active-class="is-active"
                exact
              >
                Upload
              </router-link>
            </li>
            <li>
              <router-link
                to="/user"
                active-class="is-active"
                exact
              >
                Profile
              </router-link>
            </li>
            <li>
              <router-link
                to="/user/settings"
                active-class="is-active"
                exact
              >
                Settings
              </router-link>
            </li>
          </ul>

          <p class="menu-label">
            Admin
          </p>
          <ul class="menu-list">
            <li>
              <router-link
                to="/settings"
                active-class="is-active"
                exact
              >
                Settings
              </router-link>
            </li>
          </ul>

          <b-button
            type="is-dark"
            class="is-hidden-desktop login-mobile is-fullwidth"
            icon-pack="fab"
            icon-left="github"
            outlined
          >
            Login
          </b-button>
        </nav>
      </b-collapse>
      <div class="column">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        menuOpen: true
      }
    }
  }
</script>

<style scoped>
  .columns {
    height: calc(100vh - 3.25rem);
  }

  .column {
    overflow-y: auto;
  }

  .menu {
    padding: 0.75em;
  }

  .login-mobile {
    margin-top: 1.75em;
  }

  .logo {
    margin-right: 0.5em;
    height: 1.75rem;
  }
</style>
