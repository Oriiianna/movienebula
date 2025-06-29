<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppNavbar />
    <div class="flex-fill main-content">
      <router-view />
    </div>
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

html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  flex: 1 1 auto;
  overflow-y: auto;
  background-color: #0c0c0c;
}

</style>
