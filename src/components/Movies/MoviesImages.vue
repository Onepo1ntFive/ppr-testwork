<template>
  <div v-if="images.length" class="mb-4">
    <h2>Images</h2>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="image in images" :key="image.file_path">
        <button
          @click="
            showModal(
              imagesConfig.base_url + imagesConfig.full_size + image.file_path
            )
          "
        >
          <img
            :src="
              imagesConfig.base_url + imagesConfig.poster_size + image.file_path
            "
            :alt="`${alt}-${image.file_path}`"
          />
        </button>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>

  <the-modal
    @close-modal="closeModal"
    :imagePath="imagePath"
    v-if="modalCanShow"
  ></the-modal>
</template>

<script>
import TheModal from "@/components/Layout/TheModal";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    TheModal,
  },
  data() {
    return {
      modalCanShow: false,
      imagePath: "",
      // carousel settings
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
  methods: {
    showModal(path) {
      this.modalCanShow = true;
      this.imagePath = path;
    },
    closeModal() {
      this.modalCanShow = false;
      this.imagePath = '';
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
  
  &__slide {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    img {
      max-width: 100%;
    }
    button {
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
    }
  }
}
</style>