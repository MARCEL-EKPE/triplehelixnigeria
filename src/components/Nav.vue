<template>
  <div class="nav" ref="nav">
    <div class="logo">
      <img
        src="../assets/logo.webp"
        alt=""
        @click="homeView"
        class="tha_logo"
      />
    </div>
    <div class="nav_search_div position-relative" ref="nav">
      <div class="input-group p-3 position-absolute top-0 end-0">
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
  position: relative;
  align-content: center;
  justify-content: space-around;
  padding: 0.5rem;
  height: 9rem;
  width: 100%;
  margin: auto;
}
.logo {
  flex-basis: 30%;
}
.logo h3 {
  font-weight: 900;
}
.tha_logo {
  width: 150px;
  margin-left: 10px;
  background-color: #fff;
}
.nav_search_div {
  flex-basis: 60%;
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
  top: 5.8rem;
  right: 0;
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

.input-group-text:hover {
  background-color: #788249;
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
.input-group {
  width: 21rem;
  margin-left: 2rem;
}
.form-control {
  height: 2.8rem;
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
.diplay-none {
  background-color: #000000;
}
.display-block {
  display: block;
}
@media screen and (max-width: 1100px) {
  .nav {
    height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav_search_div {
    display: none;
  }
  .logo {
    flex-basis: 75%;
  }
  .tha_logo {
    height: 5rem;
    width: 7rem;
  }
  .bars {
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
  }
}

@media screen and (max-width: 650px) {
  .nav {
    height: 6rem;
  }
  .logo {
    flex-basis: 78%;
  }
  .tha_logo {
    height: 4.5rem;
    width: 5rem;
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
