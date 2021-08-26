<template>
  <div id="login">
    <div id="background"></div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="content">
            <h1>Connexion</h1>
          </div>
          <form class="box" @submit.prevent="handleLogin">
            <div class="field">
              <p>
                Pas de compte ? Créer votre compte
                <router-link to="/signup">ici</router-link>
              </p>
            </div>

            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. bobsmith@gmail.com"
                  class="input"
                  required
                  v-model="input.email"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  class="input"
                  required
                  v-model="input.password"
                />
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <button class="button is-success" :disabled="loading">
                Se connecter
              </button>
            </div>
            <div class="field">
              <div v-if="message" class="notification is-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "login",
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
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    handleLogin() {
      this.loading = true;
      if (this.input.email && this.input.password) {
        this.$store.dispatch("auth/login", this.input).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.message && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
    },
  },
};
</script>

<style lang="scss">
#login {
  #background {
    position: fixed;
    width: 100%;
    height: 100%;
    position: top left;
    background-image: url("~@/assets/icon.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
}
</style>