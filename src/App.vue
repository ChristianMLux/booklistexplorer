<template>
  <MainNav />
  <router-view />
</template>

<script>
import MainNav from "@/components/MainNav/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 auto;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0.5rem;

  &.router-link-exact-active {
    background-color: #2c3e50;
    color: snow;
  }
}
</style>
