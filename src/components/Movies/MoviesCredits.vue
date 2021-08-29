<template>
  <div class="mb-4">
    <h2>Crew</h2>
    <span v-for="crew in credits.crew" :key="crew.id">{{ crew.name }}</span>
  </div>
  <div class="mb-4">
    <h2>Cast</h2>
    <span v-for="cast in credits.cast" :key="cast.id">{{ cast.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["movieId"],
  computed: {
    credits() {
      return this.$store.getters.getCredits;
    },
  },
  mounted() {
    this.$store.dispatch("getCredits", { movieId: this.movieId });
  },
};
</script>

<style lang="scss" scoped>
</style>