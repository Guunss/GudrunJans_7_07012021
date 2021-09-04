<template>
  <div id="signup">
    <div id="background"></div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="content">
            <h1>Nouvel utilisateur</h1>
          </div>
          <form class="box" @submit.prevent="handleSignup">
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
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Pseudo</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  placeholder="e.g. bobsmith"
                  class="input"
                  required
                  v-model="input.pseudo"
                />
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
              </div>
            </div>
            <div class="field">
              <div class="file">
                <label class="file-label">
                  <input
                    class="file-input"
                    type="file"
                    @change="fileSelected"
                    accept="image/jpeg"
                  />
                  <span class="file-cta">
                    <span class="file-label">
                      Choisis ta photo de profile
                    </span>
                  </span>
                </label>
              </div>
              <figure class="image is-128x128">
                <img v-if="url" :src="url" />
              </figure>
            </div>
            <div class="field">
              <button class="button is-success">Créer mon compte</button>
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
  name: "signup",
  data() {
    return {
      input: {
        email: "",
        password: "",
        pseudo: "",
        image: null,
      },
      loading: false,
      message: "",
      url: null,
    };
  },
  methods: {
    handleSignup() {
      this.loading = true;
      if (this.input.email && this.input.password) {
        this.$store.dispatch("auth/register", this.input).then(
          () => {
            this.$router.push("/login");
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
    fileSelected(evt) {
      const file = evt.target.files[0];
      this.input.image = file;
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style lang="scss">
#signup {
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