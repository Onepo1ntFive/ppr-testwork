<template>
  <div v-if="images.length">
    <h2>Images</h2>
    <ul>
      <li v-for="(image, index) in images" :key="index + image.file_path">
        <a :href="imagesConfig.base_url + imagesConfig.full_size + image.file_path">
          <img
            :src="
              imagesConfig.base_url + imagesConfig.poster_size + image.file_path
            "
            alt=""
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["movieId"],
  computed: {
    images() {
      return this.$store.getters.getImages;
    },
    imagesConfig() {
      return this.$store.getters.getImagesConf;
    },
  },
  mounted() {
    this.$store.dispatch("getImages", { movieId: this.movieId });
    this.$store.dispatch("getImagesConf");
  },
};
</script>

<style lang="scss" scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;

    li {
      width: 100px;

      img {
        max-width: 100%;
      }
    }
  }
</style>