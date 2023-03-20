<template>
  <div class="nav" ref="nav">
    <div class="logo">
      <img
        src="../assets/logo.webp"
        alt=""
        @click="homeView"
        class="THA__logo"
      />
    </div>
    <div class="nav_search_div position-relative">
      <div class="input-group w-50 p-3 position-absolute top-0 end-0">
        <input
          type="search"
          class="form-control border border-success"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border border-success" id="search-addon">
          <i class="bi bi-search"></i>
        </span>
      </div>

      <ul class="nav__links">
        <router-link to="/about-us" class="link">About</router-link>
        <router-link to="/actors" class="link">T-H-N Actors</router-link>
        <router-link to="/patent-publication" class="link"
          >Patents/Publications</router-link
        >
        <router-link to="/events" class="link">Events</router-link>
        <router-link to="/contact-us" class="link contact"
          >Contact Us</router-link
        >
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { ref, onMounted } from "vue";

function homeView() {
  router.push("/");
}
</script>

<style scoped>
.nav {
  display: flex;
  position: relative;
  align-content: center;
  padding: 0.5rem;
  height: 9rem;
  width: 98.6%;
  margin: auto;
}
.logo {
  flex-basis: 30%;
}
.nav_search_div {
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.nav__links {
  display: flex;
  justify-content: space-around;
  align-content: center;
  list-style-type: none;
  position: absolute;
  top: 5rem;
  right: 0.5rem;
  width: 70%;
}
.link {
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.link:hover {
  font-size: 1.025rem;
}

.logo h3 {
  font-weight: 900;
}
.THA__logo {
  width: 150px;
  margin-left: 25px;
  background-color: #fff;
}
.input-group-text,
i {
  cursor: pointer;
}

.contact {
  background-image: linear-gradient(230deg, #cbb260, #788d63);
  border-radius: 10px;
  padding: 3px;
}
</style>
