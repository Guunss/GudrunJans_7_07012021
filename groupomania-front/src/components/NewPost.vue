<template>
  <div id="new-post">
    <div class="container">
      <div class="columns is-centered">
        <div class="column">
          <div class="content">
            <h1>Ajout d'un post</h1>
          </div>
          <form class="box" @submit.prevent="handlePublish">
            <div class="field">
              <label for="" class="label">Titre</label>
              <div class="control">
                <input
                  type="text"
                  placeholder="Je choisis un super titre"
                  class="input"
                  required
                  v-model="input.titre"
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
                      J'ajoute une image super intéressante
                    </span>
                  </span>
                </label>
              </div>
              <figure class="image">
                <img v-if="url" :src="url" />
              </figure>
            </div>
            <div class="field">
              <button class="button is-success" :disabled="loading">
                Publier
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
  name: "newPost",
  data() {
    return {
      input: {
        titre: "",
        image: null,
      },
      loading: false,
      message: "",
      url: null,
    };
  },
  methods: {
    handlePublish() {
      this.loading = true;
      if (this.input.titre && this.input.image) {
        this.$store.dispatch("post/createPost", this.input).then(
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
    fileSelected(evt) {
      const file = evt.target.files[0];
      this.input.image = file;
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>