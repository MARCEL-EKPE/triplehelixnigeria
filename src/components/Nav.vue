<template>
  <div>
    <div class="backdrop">
      <Sidebar v-if="bool" @click="closeSidebar" />
    </div>

    <div class="nav" ref="nav" id="nav">
      <div class="div_logo">
        <img
          src="../assets/tha-logo.webp"
          alt=""
          @click="homeView"
          class="tha_logo"
        />
      </div>
      <div class="nav_div position-relative">
        <ul class="nav__links" ref="navLinks">
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
      <div class="menu" ref="menu" @click="showMenu">
        <i
          @click="addHidden"
          class="bi bi-list"
          style="font-size: 1.8rem; color: #fff"
          ref="open"
        ></i>
        <i
          @click="removeHidden"
          class="bi bi-x none"
          style="font-size: 2rem; color: #fff"
          ref="close"
        ></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { ref, onMounted } from "vue";
import Sidebar from "./Sidebar.vue";

function homeView() {
  router.push("/");
}
const bool = ref(false);
const menu = ref(null);
const open = ref(null);
const close = ref(null);
const navLinks = ref(null);

// open menu hamburger menu bar
function showMenu() {
  if (bool.value == false) {
    bool.value = true;
  } else {
    bool.value = false;
  }
  open.value.classList.toggle("none");
  close.value.classList.toggle("none");
}
function closeSidebar() {
  bool.value = false;
  open.value.classList.remove("none");
  close.value.classList.add("none");
  removeHidden();
}
function addHidden() {
  document.body.style.overflow = "hidden";
}
function removeHidden() {
  document.body.style.overflow = "";
}

onMounted(() => {
  const links = navLinks.value.childNodes;
  links.forEach((link) => {
    link.onmouseover = function () {
      this.classList.add("borderline");
    };
    link.onmouseleave = function () {
      this.classList.remove("borderline");
    };
  });
});
// [...navLinks.value.children];
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
  cursor: pointer;
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

.menu {
  height: 30px;
  width: 40px;
  display: none;
  text-align: center;
}

.none {
  display: none;
}
.borderline {
  border-bottom: 1.5px solid #99d639;
  transition: 5ms ease-out;
  padding: 0.7px;
}
@media screen and (max-width: 1100px) {
  .div_logo {
    flex-basis: 40%;
  }
  .nav_div {
    flex-basis: 60%;
  }
}
@media screen and (max-width: 800px) {
  .div_logo {
    flex-basis: 30%;
  }
  .nav_div {
    flex-basis: 70%;
  }
}
@media screen and (max-width: 720px) {
  .nav_div {
    display: none;
  }
  .menu {
    display: block;
    margin-top: 0.4rem;
    z-index: 99;
  }
  .div_logo {
    flex-basis: 50%;
    padding-left: 0rem;
  }
  .tha_logo {
    height: 80px;
    width: 90px;
  }
}
/* @media screen and (max-width: 650px) {
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
} */
</style>
