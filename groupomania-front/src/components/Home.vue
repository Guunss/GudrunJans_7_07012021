<template>
  <div class="home">
    <div class="container">
      <div id="posts">
        <post-summary
          :post="post"
          v-for="post in this.$store.state.post.posts"
          :key="post.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PostSummary from "./partials/PostSummary.vue";
export default {
  name: "home",
  components: {
    PostSummary,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("post/getAllPosts");
  },
  computed: {
    getLine(index) {
      return this.$store.state.post.posts.slice(index, index + 3);
    },
  },
};
</script>
