<template>
  <div id="post">
    <div class="container">
      <div class="card" v-if="this.$store.state.post.post">
        <div class="card-image">
          <figure class="image">
            <img
              :src="this.$store.state.post.post.imageUrl"
              alt="Placeholder image"
              v-if="this.$store.state.post.post.imageUrl"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt="Placeholder image"
                  v-if="!this.$store.state.post.post.photoProfile"
                />
                <img
                  :src="this.$store.state.post.post.photoProfile"
                  alt="Placeholder image"
                  v-if="this.$store.state.post.post.photoProfile"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ this.$store.state.post.post.titre }}</p>
              <p class="subtitle is-6">
                {{ this.$store.state.post.post.pseudo }}
              </p>
            </div>
          </div>
          <div class="comments">
            <div
              class="box"
              v-for="comment in this.$store.state.post.post.comments"
              :key="comment.id"
            >
              <strong>{{ comment.pseudo }}</strong> &nbsp;:&nbsp;
              {{ comment.comment }}
              <div class="is-pulled-right">
                <button
                  class="button is-danger"
                  v-if="this.$store.state.auth.status.moderator"
                  v-on:click="handleDeleteComment(comment.id)"
                >
                  Supprimer
                </button>
              </div>
            </div>
            <form class="box" @submit.prevent="handleAjouter">
              <div class="field">
                <label for="" class="label">Commentaire : </label>
                <div class="control">
                  <textarea
                    type="text"
                    placeholder="Mon commentaire sympa"
                    class="textarea"
                    required
                    v-model="input.commentaire"
                  />
                </div>
              </div>
              <div class="field">
                <button class="button is-success">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "post",
  data() {
    return {
      input: {
        commentaire: "",
        postId: "",
      },
    };
  },
  created() {
    this.input.postId = this.$route.params.id;
    this.$store.dispatch("post/getPost", this.input.postId);
  },
  methods: {
    handleAjouter() {
      this.$store.dispatch("comment/createComment", this.input);
      this.input.commentaire = "";
      setTimeout(
        () => this.$store.dispatch("post/getPost", this.input.postId),
        2000
      );
    },
    handleDeleteComment(id) {
      this.$store.dispatch("comment/deleteComment", id);
      setTimeout(
        () => this.$store.dispatch("post/getPost", this.input.postId),
        2000
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.image img {
  max-height: 400px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.card {
  margin-bottom: 15px;
}
</style>