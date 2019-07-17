<template>
  <div class="main-blog">
    <h2 class="text-center">Elhefni News App</h2>
    <div class="blog">
      <NewsPost
        v-for="post in posts"
        :title="post.title"
        :imgUrl="post.urlToImage"
        :desc="post.description"
        :date="post.publishedAt"
      />
    </div>
  </div>
</template>

<script>
import NewsPost from "@/components/NewsPost.vue";
import "axios";
import Axios from "axios";
export default {
  name: "blog",
  data() {
    return {
      posts: ""
    };
  },
  mounted() {
    Axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=8eb8426b50b5475c852407091c81eb68"
    ).then(Response => {
      this.posts = Response.data.articles;
    });
  },
  components: {
    NewsPost
  }
};
</script>
