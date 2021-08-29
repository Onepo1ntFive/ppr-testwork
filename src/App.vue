<template>
  <the-header></the-header>
  <the-content></the-content>
  <the-footer></the-footer>
</template>

<script>
import TheContent from '@/components/Layout/TheContent'
import TheHeader from '@/components/Layout/TheHeader'
import TheFooter from '@/components/Layout/TheFooter'
export default {
  components: {
    TheHeader,
    TheContent,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  color: #000;

  h1,
  h2 {
    font-weight: 300;
  }
}
</style>
