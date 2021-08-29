<template>
  <div class="credits">
    <div v-if="credits.crew" class="mb-4">
      <h2>Crew</h2>
      <ul class="credits-list">
        <li v-for="crew in credits.crew" :key="crew.id">{{ crew.name }}</li>
      </ul>
    </div>
    <div v-if="credits.cast" class="mb-4">
      <h2>Cast</h2>
      <ul class="credits-list">
        <li v-for="cast in credits.cast" :key="cast.id">{{ cast.name }}</li>
      </ul>
    </div>
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
.credits {
  &-list {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline;

      &::before {
        content: ", ";
      }
      &:first-child::before {
        display: none;
      }
    }
  }
}
</style>