<template>
  <div class="col-6 col-lg-4 col-xl-3 mb-4">
    <div class="card">
      <div class="card-poster">
        <router-link :to="movieDetailLink">
          <img
            v-if="poster_path !== null"
            :src="
              imagesConfig.base_url + imagesConfig.poster_size + poster_path
            "
            :alt="title"
            class="card-img-top"
          />
        </router-link>
      </div>
      <div class="card-body">
        <router-link class="mb-2" :to="movieDetailLink">{{
          title
        }}</router-link>
        <small class="text-muted mb-1">{{ formatedDate }}</small>
        <p v-if="overview" class="card-text">
          {{ overview }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "release_date", "overview", "poster_path"],
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
    imagesConfig() {
      return this.$store.getters.getImagesConf;
    },
  },
  mounted() {
    this.$store.dispatch("getImagesConf");
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;

  &-body {
    a {
      display: inline-block;
    }
    small {
      display: block;
    }
  }

  &-poster {
    background: #ccc;
    width: 100%;
    padding-bottom: 150%;
    position: relative;

    a {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: 767px) {
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 1.25rem;
      width: 100%;
      height: 2rem;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      pointer-events: none;
    }

    &-text {
      max-height: 10rem;
      overflow: hidden;
    }
  }
}
</style>