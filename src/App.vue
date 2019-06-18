<template>
  <div id="app">
    <nav
      class="navbar is-dark"
      role="navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          is="router-link"
          to="/"
        >
          <img src="https://raw.githubusercontent.com/beat-saber-modding-group/BeatMods-Website/master/src/client/app/layouts/default/logo--mobile.png">
          <span>BeatMods</span>
        </a>

        <a
          role="button"
          class="navbar-burger burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <b-button
              type="is-light"
              icon-pack="fab"
              icon-left="github"
              outlined
            >
              Log in
            </b-button>
          </div>
        </div>
      </div>
    </nav>
    <div class="columns">
      <div class="column is-one-fifth has-background-light">
        <div class="menu">
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
                to="/settings/accounts"
                active-class="is-active"
                exact
              >
                Accounts
              </router-link>
            </li>
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
        </div>
      </div>
      <div class="column">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
  .columns {
    height: calc(100vh - 2.5rem);
  }

  .menu {
    padding: 0.75em;
  }
</style>
