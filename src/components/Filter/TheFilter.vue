<template>
  <h2>The Filter</h2>
  <form @submit.prevent="setData">
    <div>
      <label for="type">Type</label>
      <select name="type" id="type" v-model="selectedMovieType">
        <option
          v-for="option in allTypes"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div>
      <label for="year">Year</label>
      <select name="year" id="year" v-model="selectedYear">
        <option
          v-for="option in allYears"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div><button class="b-btn">Ok</button></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      allYears: [1999, 2020, 2021, 1988, 1952],
      allTypes: ["movie", "tv"],
      selectedYear: this.$store.getters.getFilterParams.year,
      selectedMovieType: this.$store.getters.getFilterParams.movieType,
    };
  },
  computed: {},
  methods: {
    setData() {
      this.$store.dispatch("setData", {
        year: this.selectedYear,
        type: this.selectedMovieType,
      });
    },
  },
};
</script>