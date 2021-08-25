<template>
  <div id="profile">
    <div class="container">
      <div class="card">
        <div class="card-header">
          <p class="card-header-title">Gestion de mon compte</p>
        </div>
        <div class="card-content">
          <button class="button is-danger" v-on:click="handleDeleteAccount">
            Supprimer mon compte
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "profile",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      loading: false,
      message: "",
    };
  },
  created() {
    this.$store.dispatch("user/getUser");
  },
  computed: {},
  methods: {
    handleDeleteAccount() {
      this.$store.dispatch("user/deleteUser").then(() => {
        this.$store.dispatch("auth/logout");
        this.$router.push("/logout");
      });
    },
  },
};
</script>