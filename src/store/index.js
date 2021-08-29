import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    year: new Date().getFullYear(),
    movieType: "movie",
    apiKey: "e6f3e9cbbe87f79abd025c26d81894c7",
    language: "en-US",
    movies: [],
    details: [],
    credits: [],
    images: [],
    config: {},
    allYears: [],
  },
  mutations: {
    setData(state, payload) {
      state.year = payload.year;
      state.movieType = payload.type;
    }
  },
  actions: {
    getMovies(context) {
      axios
        .get(`/discover/${context.state.movieType}?api_key=${context.state.apiKey}&sort_by=popularity.asc&year=${context.state.year}&first_air_date_year=${context.state.year}`)
        .then((response) => {
          context.state.movies = response.data.results.slice(0, 10);
        });
    },
    getDetails(context, payload) {
      axios
        .get(`/${context.state.movieType}/${payload.movieId}?api_key=${context.state.apiKey}`)
        .then((response) => {
          context.state.details = response.data;
        });
    },
    getCredits(context, payload) {
      axios
        .get(`/${context.state.movieType}/${payload.movieId}}/credits?api_key=${context.state.apiKey}`)
        .then((response) => {
          context.state.credits = response.data;
        });
    },
    getImages(context, payload) {
      axios
        .get(`/${context.state.movieType}/${payload.movieId}/images?api_key=${context.state.apiKey}`)
        .then((response) => {
          context.state.images = response.data.backdrops;
        });
    },
    getImagesConf(context) {
      axios
        .get(`/configuration?api_key=${context.state.apiKey}`)
        .then((response) => {
          context.state.config.base_url = response.data.images.base_url;
          context.state.config.poster_size = response.data.images.poster_sizes[3];
        });
    },
    setData(context, payload) {
      context.commit('setData', payload)
      context.dispatch('getMovies');
    },
    getAllYears(context) {
      const yearMin = 1900;
      const yearMax = new Date().getFullYear();

      for (let index = yearMax; index >= yearMin; index--) {
        context.state.allYears.push(index);
      }
    }
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
    getCredits(state) {
      return state.credits;
    },
    getImages(state) {
      return state.images;
    },
    getDetails(state) {
      return state.details;
    },
    getImagesConf(state) {
      return state.config;
    },
    getFilterParams(state) {
      return { year: state.year, movieType: state.movieType }
    },
    getAllYears(state) {
      return state.allYears;
    },
  }
})
