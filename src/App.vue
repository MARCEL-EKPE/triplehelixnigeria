<template>
  <div>
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Nav, Footer },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Noto Sans", sans-serif;
  font-weight: 300;
  background-image: url("./assets/tha-bg1.webp");
  background-repeat: no-repeat;
  background-size: contain;
}

#app {
  font-family: "Noto Sans", sans-serif;
}
p {
  font-weight: 600;
  line-height: 1.7rem;
}
</style>
