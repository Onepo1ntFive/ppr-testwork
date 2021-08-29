<template>
  <h1>{{ details.title }}</h1>
  <p><router-link :to="moviesListLink">Back to list</router-link></p>
  <div class="row details">
    <div class="col-md-4 mb-4 details-poster">
      <img
        v-if="details.poster_path !== null"
        :src="
          imagesConfig.base_url + imagesConfig.poster_size + details.poster_path
        "
        :alt="details.title"
      />
    </div>
    <div class="col-md-8">
      <div v-if="details.overview">
        <h2>Overview</h2>
        <p>{{ details.overview }}</p>
      </div>
      <detail-credits :movieId="movieId"></detail-credits>
      <detail-images :movieId="movieId"></detail-images>
    </div>
  </div>
  <p><router-link :to="moviesListLink">Back to list</router-link></p>
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
    moviesListLink() {
      return {
        name: "movies",
      };
    },
  },
  mounted() {
    this.$store.dispatch("getDetails", { movieId: this.movieId });
    this.$store.dispatch("getImagesConf");
  },
};
</script>

<style lang="scss" scoped>
.details {
  &-poster {
    img {
      width: 100%;
    }
  }
}
</style>