<template>
  <h2>Movies List</h2>
  <ul>
    <movies-item
      v-for="movie in movies"
      :key="movie.id"
      :id="movie.id"
      :title="computedTitle(movie)"
      :release_date="computedDate(movie)"
    >
    </movies-item>
  </ul>
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
      return (data) => (data.first_air_date ? data.first_air_date : data.release_date);
    },
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>