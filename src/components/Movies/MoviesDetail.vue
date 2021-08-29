<template>
  <h1>{{ details.title }}</h1>
  <img
    v-if="details.poster_path !== null"
    :src="
      imagesConfig.base_url + imagesConfig.poster_size + details.poster_path
    "
    :alt="details.title"
    style="width: 100px"
  />
  <div v-if="details.overview">
    <h2>Overview</h2>
    <p>{{ details.overview }}</p>
  </div>
  <detail-credits :movieId="movieId"></detail-credits>
  <detail-images :movieId="movieId"></detail-images>
</template>

<script>
import DetailCredits from "./MoviesCredits.vue";
import DetailImages from "./MoviesImages.vue";
export default {
  components: {
    DetailCredits,
    DetailImages,
  },
  props: ["movieId"],
  computed: {
    details() {
      return this.$store.getters.getDetails;
    },
    imagesConfig() {
      return this.$store.getters.getImagesConf;
    },
  },
  mounted() {
    this.$store.dispatch("getDetails", { movieId: this.movieId });
    this.$store.dispatch("getImagesConf");
  },
};
</script>