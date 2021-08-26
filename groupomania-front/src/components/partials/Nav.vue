<template>
<div id="nav">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="@/assets/icon-left-font-monochrome-black-rogne.png"
          width="128"
          height="128"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        v-on:click="showNav = !showNav"
        v-bind:class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      v-bind:class="{ 'is-active': showNav }"
    >
      <div class="navbar-start" v-if="this.$store.state.auth.status.loggedIn">
        <a class="navbar-item" href="/"> Accueil </a>
        <a class="navbar-item" href="/new-post"> Ajouter un post </a>
      </div>

      <div class="navbar-end" v-if="this.$store.state.auth.status.loggedIn">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/profile">
              <strong>Mon compte</strong>
            </a>
            <a class="button is-danger" href="/logout"> Se déconnecter </a>
          </div>
        </div>
      </div>      
      <div class="navbar-end" v-if="!this.$store.state.auth.status.loggedIn">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-info" href="/signup">
              <strong>Créer mon compte</strong>
            </a>
            <a class="button is-success" href="/login"> Se connecter </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
</template>


<script>
export default {
  name: "Nav",
  data() {
    return {
      showNav: false,
    };
  },
};
</script>


<style lang="scss">
#nav {
  margin-bottom: 25px;
  .navbar{
    background-color: #FFD7D7;
  }
}
</style>