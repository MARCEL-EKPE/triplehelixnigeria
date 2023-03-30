<template>
  <div>
    <aside>
      <ul class="nav__links">
        <div class="icon_link">
          <i
            class="bi bi-house-door-fill"
            style="font-size: 1.5rem; padding-left: 10px; color: #fff"
          ></i>
          <router-link to="/" class="link">Home</router-link>
        </div>
        <div class="icon_link">
          <i
            class="bi bi-question-circle-fill"
            style="font-size: 1.5rem; padding-left: 10px; color: #fff"
          ></i>
          <router-link to="/about-us" class="link">About</router-link>
        </div>
        <div class="icon_link">
          <i
            class="bi bi-people-fill"
            style="font-size: 1.5rem; padding-left: 10px; color: #fff"
          ></i>
          <router-link to="/actors" class="link">T-H-N Actors</router-link>
        </div>
        <div class="icon_link">
          <i
            class="bi bi-journal"
            style="font-size: 1.5rem; padding-left: 10px; color: #fff"
          ></i>
          <router-link to="/patent-publication" class="link"
            >Patents/Publications</router-link
          >
        </div>
        <div class="icon_link">
          <i
            class="bi bi-calendar-date-fill"
            style="font-size: 1.5rem; padding-left: 10px; color: #fff"
          ></i>
          <router-link to="/events" class="link">Events</router-link>
        </div>
        <div class="icon_link">
          <i
            class="bi bi-inboxes-fill"
            style="font-size: 1.5rem; padding-left: 10px; color: #fff"
          ></i>
          <router-link to="/contact-us" class="link">Contact us</router-link>
        </div>
        <!-- <i class="bi bi-search"></i> -->
      </ul>
    </aside>
    <div class="overlay"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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
  transition: 2s ease-out;
  position: fixed;
  z-index: 99;
}
.nav__links {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  height: 70vh;
}
.icon_link {
  height: 45px;
  width: 100%;
  padding: 5px;
  text-align: start;
  border-radius: 20px;
  position: relative;
}
.link {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 0 0px 32px;
  position: absolute;
  top: 12px;
}
.icon_link:hover {
  background-color: rgb(40, 45, 65);
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  backdrop-filter: blur(1px);
  z-index: 5;
}
</style>
