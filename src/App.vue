<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppNavbar />
    <router-view class="flex-grow-1" />
    <AppFooter />
  </div>
</template>


<script>
import AppNavbar from "./components/Navbar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNavbar,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
