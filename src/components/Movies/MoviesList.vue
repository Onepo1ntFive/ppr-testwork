<template>
  <h2>List</h2>
  <div class="row">
    <movies-item
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title="computedTitle(movie)"
      :release_date="computedDate(movie)"
      :poster_path="movie.poster_path"
      :overview="movie.overview"
    >
    </movies-item>
  </div>
</template>

<script>
import MoviesItem from "./MoviesItem.vue";
export default {
  components: {
    MoviesItem,
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
    computedTitle() {
      return (data) => (data.name ? data.name : data.title);
    },
    computedDate() {
      return (data) =>
        data.first_air_date ? data.first_air_date : data.release_date;
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
};
</script>