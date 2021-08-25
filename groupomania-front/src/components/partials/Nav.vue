<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="@/assets/icon-left-font-rogner.png"
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
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Accueil </a>

        <a class="navbar-item" href="/new-post"> Ajouter un post </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/profile">
              <strong>Mon compte</strong>
            </a>
            <a class="button is-danger" href="/logout"> Se déconnecter </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
