<template>
  <div v-if="images.length" class="mb-4">
    <h2>Images</h2>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="image in images" :key="image.file_path">
        <a
          :href="
            imagesConfig.base_url + imagesConfig.full_size + image.file_path
          "
        >
          <img
            :src="
              imagesConfig.base_url + imagesConfig.poster_size + image.file_path
            "
            :alt="`${alt}-${image.file_path}`"
          />
        </a>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        wrapAround: true,
      },
      breakpoints: {
        700: {
          itemsToShow: 3.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  props: ["movieId", "alt"],
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
.carousel {
  margin-left: -0.5rem;
  margin-right: -0.5em;
  img {
    max-width: 100%;
  }

  &__slide {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>