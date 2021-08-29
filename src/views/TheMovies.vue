<template>
  <the-filter></the-filter>
  <movies-list></movies-list>
</template>

<script>
import MoviesList from "@/components/Movies/MoviesList";
import TheFilter from "@/components/Filter/TheFilter";
export default {
  components: {
    MoviesList,
    TheFilter,
  },
};
</script>