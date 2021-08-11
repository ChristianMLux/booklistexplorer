<template>
  <nav>
    <ul class="main-navigation" id="links">
      <NavElement
        v-for="(route, index) in routes"
        :key="index"
        v-bind="route"
        :to="route.routeTarget"
      >
        {{ route.routeName }}
      </NavElement>
    </ul>
  </nav>
</template>

<script>
import NavElement from "./NavElement/NavElement.vue";
import ROUTES from "./Routes";
export default {
  name: "MainNav",
  components: {
    NavElement,
  },
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.routes = [...ROUTES];
  },
};
</script>
<style scoped>
nav {
  margin: 0 auto;
  background-color: #35495e;
  display: flex;
  flex-flow: row;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
  list-style: none;
}
ul > li {
  margin: 0;
  padding: 0.4rem;
  background-color: #42b883;
}
</style>
