<template>
  <h2>Filter</h2>
  <form @submit.prevent="setData" class="form-group row align-items-end">
    <div class="col-6 col-md-5">
      <label for="type">Type</label>
      <select
        name="type"
        id="type"
        class="form-control"
        v-model="selectedMovieType"
      >
        <option v-for="option in allTypes" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="col-6 col-md-5">
      <label for="year">Year</label>
      <select name="year" id="year" class="form-control" v-model="selectedYear">
        <option v-for="option in allYears" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="col-12 col-md-2 pt-4">
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      allTypes: ["movie", "tv"],
      selectedYear: this.$store.getters.getFilterParams.year,
      selectedMovieType: this.$store.getters.getFilterParams.movieType,
    };
  },
  computed: {
    allYears() {
       return this.$store.getters.getAllYears;
    },
  },
  methods: {
    setData() {
      this.$store.dispatch("setData", {
        year: this.selectedYear,
        type: this.selectedMovieType,
      });
    },
  },
  mounted() {
    this.$store.dispatch("getAllYears");
    console.log(this.allYears)
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
}
</style>