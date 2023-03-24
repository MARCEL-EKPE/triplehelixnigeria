<template>
  <div class="nav" ref="nav">
    <div class="div_logo">
      <img
        src="../assets/tha-logo.webp"
        alt=""
        @click="homeView"
        class="tha_logo"
      />
    </div>
    <div class="nav_div position-relative">
      <ul class="nav__links">
        <router-link to="/about-us" class="link">About</router-link>
        <router-link to="/actors" class="link">T-H-N Actors</router-link>
        <router-link to="/patent-publication" class="link"
          >Patents/Publications</router-link
        >
        <router-link to="/events" class="link">Events</router-link>
        <router-link to="/contact-us" class="link">Contact Us</router-link>
        <i class="bi bi-search"></i>
      </ul>
    </div>
    <div class="bars" ref="bars" @click="clickHandler">
      <div class="one"></div>
      <div class="two display-none" ref="two"></div>
      <div class="three"></div>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { ref, onMounted } from "vue";

function homeView() {
  router.push("/");
}

const nav = ref(null);
const bars = ref(null);
const two = ref(null);

function clickHandler() {
  two.value.classList.add("display-none");
  console.log("clicked");
}
</script>

<style scoped>
.nav {
  display: flex;
  align-content: center;
  justify-content: space-around;
  position: relative;
  height: 7.5rem;
  width: 100%;
  background-color: #0b0b27;
}
.div_logo {
  flex-basis: 50%;
  padding-left: 4rem;
}
.tha_logo {
  height: 100px;
  width: 120px;
}
.nav_div {
  flex-basis: 50%;
  position: relative;
}
.nav__links {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
  list-style-type: none;
  position: absolute;
  top: 3.125rem;
  right: 1rem;
}
.link {
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}
.nav__links .bi {
  font-size: 1.25rem;
  color: #fff;
}
.link,
.bi:hover {
  cursor: pointer;
}

.bars {
  height: 30px;
  width: 40px;
  display: none;
}
.one,
.two,
.three {
  height: 5px;
  width: 40px;
  background-color: #fff;
  margin: 8px;
}
/* navigation on small screen */
@media screen and (max-width: 1300px) {
  .div_logo {
    flex-basis: 30%;
  }
  .nav_div {
    flex-basis: 70%;
  }
}
@media screen and (max-width: 700px) {
  /* .bars {
    display: block;
    flex-basis: 25%;
    margin-bottom: 1rem;
  }
  .one,
  .two,
  .three {
    width: 35px;
    height: 3px;
    margin: 5px;
  } */
}

@media screen and (max-width: 650px) {
  .nav {
    height: 6rem;
  }
  .logo {
    flex-basis: 78%;
  }
  .tha_logo {
  }
  .bars {
    display: block;
    flex-basis: 22%;
    margin-bottom: 0rem;
    cursor: pointer;
  }
  .one,
  .two,
  .three {
    width: 35px;
    height: 3px;
    margin: 8px;
  }
}
</style>
