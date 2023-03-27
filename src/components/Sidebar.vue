<template>
  <div>
    <!-- <div class="overlay" @click="removeOverlay" ref="overlay"></div> -->
    <aside>
      <ul class="nav__links">
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/about-us" class="link">About</router-link>
        <router-link to="/actors" class="link">T-H-N Actors</router-link>
        <router-link to="/patent-publication" class="link"
          >Patents/Publications</router-link
        >
        <router-link to="/events" class="link">Events</router-link>
        <router-link to="/contact-us" class="link">Contact us</router-link>
        <!-- <i class="bi bi-search"></i> -->
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const overlay = ref("overlay");

function removeOverlay() {
  console.log(overlay.value);
}
</script>

<style scoped>
/* .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  backdrop-filter: blur(3px);
  z-index: 0;
} */
aside {
  color: #fff;
  background-color: #0b0b27;
  padding: 1rem;
  min-width: 300px;
  overflow: hidden;
  min-height: 100vh;
  transition: 0.4s ease-out;
  position: fixed;
  z-index: 99;
}
.nav__links {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.link {
  text-decoration: none;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
}
</style>
