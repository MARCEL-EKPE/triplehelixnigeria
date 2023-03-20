<template>
  <div>
    <div class="slider">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :pagination="{ clickable: true, dynamicBullets: true }"
        :modules="[Navigation, Pagination, Autoplay]"
        navigation
        :autoplay="{
          delay: 3000,
          pauseOnMouseEnter: true,
        }"
      >
        <SwiperSlide v-for="photo in photos" :key="photo">
          <img :src="`src/assets/${photo}`" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <!-- my content -->
    <div class="welcome__tha">
      <div class="message">
        <!-- <h3 class="fst-italic fw-bold">welcome</h3> -->
        <p class="tiplehelix">
          <span class="red">TRIPLEHELIX ASSOCIATION</span>
          <span class="green">NIGERIA CHAPTER</span>
        </p>
        <P class="text"
          >Leveraging <span class="tha_model">Triple Helix Model</span> to
          Accelerate the Commercialisation of Research & Innovation in
          Nigeria</P
        >
        <button
          class="btn"
          href="#section3"
          v-smooth-scroll="{ duration: 100 }"
        >
          &DownArrow; Learn more
        </button>
      </div>

      <div class="welcome-img-div">
        <img
          src="../assets/abt3.webp"
          alt=""
          class="welcome__img1"
          ref="img1"
        />
        <img
          src="../assets/abt4.webp"
          alt=""
          class="welcome__img2"
          ref="img2"
        />
      </div>
    </div>

    <section class="home__content" id="section3">
      <div class="who_we_are">
        <div class="left">
          <h4 class="fw-bold text-success display-6">who we are</h4>
          <p>
            The Triple Helix Association (THA) is a global non-profit
            association that aims to harness the power of research and
            innovation for economic competitiveness and development via a
            systemic alignment of goals and resources among academia, industry,
            and government. This initiative engenders research for development,
            births innovations, and produces researchers with relevant skillsets
            to solve contemporary industry problems, thereby allowing
            organisations in Nigeria to improve their earnings and attract
            global visibility.
          </p>
        </div>
        <div class="right">
          <img src="../assets/w-w-a..webp" alt="" />
        </div>
      </div>
      <div class="tha_nigeria mt-3">
        <h4 class="fw-bold text-center text-success display-6">
          Triple Helix Association - Nigeria
        </h4>
        <p>
          The Triple Helix Association - Nigeria (THN) chapter is a registered
          member of the global triple helix association. The Nigerian chapter
          was inaugurated December 01, 2022, as part of efforts to
          operationalise the triple helix model to grow in-country excellence,
          innovation, and entrepreneurial solutions to industry pain points
          through the collaborative approach of the government, academia, and
          industry. Triple Helix Association – Nigerian chapter aims to achieve:
          1. Develop critical industry expertise to drive in-country innovation
          and fast-track national economic diversification. 2. Identify
          strategic projects in critical sectors of national importance,
          mobilise relevant resources from the academia, industry, and
          government to execute them to global standards.
        </p>
      </div>

      <div class="our__sponsors mt-3">
        <h4 class="fw-bold text-center text-success display-6">our sponsors</h4>
        <div class="img__sponsors">
          <img src="../assets/nuc.webp" alt="" />
          <img src="../assets/ccl-logo.webp" alt="" class="ccl-logo" />
          <img src="../assets/ncdmb.webp" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const photos = ["Slide1.webp", "Slide2.webp", "Slide3.webp"];

const img1 = ref("");
const img2 = ref("");
onMounted(function () {
  setInterval(() => {
    img1.value.classList.add("move_y");
    img2.value.classList.add("move_x");
    console.log("moving + dir");
  }, 1000);
  setInterval(() => {
    img1.value.classList.remove("move_y");
    img2.value.classList.remove("move_x");
    console.log("moving - dir");
  }, 3000);
});
</script>

<style scoped>
.slider {
  height: 35rem;
  width: 100%;
}

.swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-slide img {
  height: 100%;
  width: 100%;
}
/* home-content */
.welcome__tha {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 28rem;
  background: url("../assets/wave.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.message {
  flex-basis: 38%;
}
.tha_model {
  flex-basis: 62%;
}

.welcome__img1 {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  position: absolute;
  top: 2rem;
  right: 18rem;
}
.welcome__img2 {
  width: 350px;
  height: 250px;
  border-radius: 20px;
  position: absolute;
  top: 10rem;
  right: 5rem;
}

.tiplehelix {
  font-weight: 900;
  color: #fff;
}
.red,
.green {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  height: 20px;
  width: 100%;
  padding: 8px;
}
.red {
  background-color: #dc2626;
}
.green {
  background-color: #16a34a;
}
.text {
  font-size: 25px;
  line-height: 2rem;
}
.tha_model {
  font-size: 25px;
  font-weight: 900;
  line-height: 20px;
}
.btn {
  background-color: none;
  font-weight: bold;
  color: #fff;
  background-image: linear-gradient(230deg, #cbb260, #788d63);
}

/* who we are */
.home__content {
  height: 52rem;
  width: 100%;
  padding: 5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.who_we_are {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  flex-basis: 70%;
}
.right {
  flex-basis: 30%;
}
.right img {
  height: 250px;
  width: 300px;
}
.tha_nigeria {
  background: url("../assets/flag.webp");
  background-repeat: no-repeat;
  background-size: contain;
}
.img__sponsors {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.our__sponsors img {
  width: 150px;
  height: 150px;
}
.our__sponsors .ccl-logo {
  width: 300px;
  height: 50px;
}
/* binding classes */

.move_y {
  transform: translate(0px, 20px);
  transition: 3s;
}
.move_x {
  transform: translate(20px, 0px);
  transition: 3s;
}

.moveOppy {
  transform: translate(0px, -20px);
  transition: 3s;
}

.moveOppx {
  transform: translate(-20px, 0px);
  transition: 3s;
}
</style>