<template>
  <li>
    <p>
      <router-link :to="movieDetailLink">
        {{ title }}
      </router-link>
    </p>
    <p>
      {{ id }}
      ({{ formatedDate }})
    </p>
  </li>
</template>

<script>
export default {
  props: ["id", "title", "release_date"],
  computed: {
    formatedDate() {
      const newDate = new Date(this.release_date);
      const dd = String(newDate.getDate()).padStart(2, "0");
      const mm = String(newDate.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = newDate.getFullYear();
      return `${dd}.${mm}.${yyyy}`;
    },
    movieDetailLink() {
      return {
        name: "movie",
        params: { movieId: this.id },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;

  p {
    padding: 0;
    margin: 0;
  }
}
</style>