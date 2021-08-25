<template>
  <div class="new-post">
    <router-link :to="{ name: 'post', params: { id: post.id } }">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder image"
              v-if="!post.imageUrl"
            />
            <img
              :src="post.imageUrl"
              alt="Placeholder image"
              v-if="post.imageUrl"
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
                  v-if="!post.photoProfile"
                />
                <img
                  :src="post.photoProfile"
                  alt="Placeholder image"
                  v-if="post.photoProfile"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ post.titre }}</p>
              <p class="subtitle is-6">{{ post.pseudo }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostSummary",
  props: ["post"],
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
