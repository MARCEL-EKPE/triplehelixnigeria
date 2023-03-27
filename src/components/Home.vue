<template>
  <div class="home">
    <Nav />
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
          <img :src="`/${photo}`" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <section class="home__content">
      <div class="who_we_are">
        <div class="wwa_img">
          <img src="../assets/web4.webp" alt="" class="home_img" />
        </div>
        <div class="wwa_text">
          <h4 class="fw-bold text-success">who we are</h4>
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
      </div>
      <div class="tha_nigeria">
        <div class="tha_nigeria_text">
          <h4 class="fw-bold text-success">
            Triple Helix Association - Nigeria
          </h4>
          <p>
            The Triple Helix Association - Nigeria (THN) chapter is a registered
            member of the global triple helix association. The Nigerian chapter
            was inaugurated December 01, 2022, as part of efforts to
            operationalise the triple helix model to grow in-country excellence,
            innovation, and entrepreneurial solutions to industry pain points
            through the collaborative approach of the government, academia, and
            industry. Triple Helix Association – Nigerian chapter aims to
            achieve: 1. Develop critical industry expertise to drive in-country
            innovation and fast-track national economic diversification. 2.
            Identify strategic projects in critical sectors of national
            importance, mobilise relevant resources from the academia, industry,
            and government to execute them to global standards.
          </p>
        </div>
        <div class="tha_nigeria_img">
          <img src="../assets/web5.webp" alt="" class="home_img" />
        </div>
      </div>

      <div class="tha_nigeria_aims">
        <h4 class="fw-bold text-success header-text">
          Triple Helix Association – Nigerian chapter aims to achieve:
        </h4>
        <div class="img_text_div">
          <div class="img_text1">
            <img src="../assets/web6.webp" alt="" class="hero" />
            <div class="info">
              <p>
                Develop critical industry expertise to drive in-country
                innovation and fasttrack national economic diversification.
              </p>
            </div>
          </div>
          <div class="img_text2">
            <img src="../assets/web7.webp" alt="" class="hero" />
            <div class="info">
              <p>
                Identify strategic projects in critical sectors of national
                importance, mobilise relevant resources from the academia,
                industry, and government to execute them to global standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="our_sponsors">
        <h4 class="fw-bold text-center text-success">Our sponsors</h4>
        <div class="img_sponsors">
          <img src="../assets/nuc.webp" alt="" />
          <img src="../assets/ccl-logo.webp" alt="" class="ccl-logo" />
          <img src="../assets/ncdmb.webp" alt="" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper";
import { ref, onMounted } from "vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const photos = ["web1.webp", "web2.webp", "web3.webp"];
</script>

<style scoped>
.home {
  padding: 0;
  margin: 0;
}
.slider {
  height: 35rem;
  width: 100%;
}
.swiper {
  padding: 3rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../assets/web10.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-slide img {
  height: 100%;
  width: 100%;
}

.home__content {
  margin-top: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home_img {
  height: 320px;
  width: 320px;
}
.who_we_are {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 6rem 0 6rem;
}
.wwa_img {
  padding-left: 3rem;
}

.wwa_text {
  padding: 0 4rem 0 5rem;
}
.tha_nigeria {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 6rem 0 6rem;
}
.tha_nigeria_text {
  padding: 0 5rem 0 2rem;
}
.tha_nigeria_img {
  padding-right: 5rem;
}

.tha_nigeria_aims {
  height: 40rem;
  width: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  margin: 4rem 4rem;
  padding: 3rem;
}
.img_text_div {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero {
  height: 300px;
  width: 400px;
}
.img_text1 {
  height: 432px;
  width: 400px;
  margin: 3rem;
  box-shadow: -3px 5px 5px grey;
}
.img_text2 {
  height: 432px;
  width: 400px;
  margin: 3rem;
  box-shadow: -3px 5px 5px grey;
}
.info {
  background-color: #fff;
  height: 130px;
  width: 400px;
  padding: 1rem;
}
.our_sponsors {
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img_sponsors {
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.img_sponsors img {
  height: 150px;
  width: 150px;
}
.img_sponsors .ccl-logo {
  height: 50px;
  width: 200px;
}
h4 {
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
@media screen and (max-width: 1145px) {
  .who_we_are {
    padding: 4rem 1rem 0 1rem;
  }
  .wwa_img {
    padding-left: 2rem;
  }

  .wwa_text {
    padding: 0 2rem 0 3rem;
  }
  .tha_nigeria {
    padding: 4rem 1rem 0 1rem;
  }
  .tha_nigeria_text {
    padding: 0 2rem 0 2rem;
  }
  .tha_nigeria_img {
    padding-right: 2rem;
  }
  .tha_nigeria_aims {
    height: 100%;
    width: 100%;
    margin: 4rem 0rem;
  }
}

@media screen and (max-width: 1000px) {
  .slider {
    height: 30rem;
    width: 100%;
  }
  .swiper {
    padding: 2rem;
  }

  .hero {
    height: 200px;
    width: 300px;
  }
  .img_text1 {
    height: 358px;
    width: 300px;
    margin: 3rem;
    box-shadow: -3px 5px 5px grey;
  }
  .img_text2 {
    height: 358px;
    width: 300px;
    margin: 3rem;
    box-shadow: -3px 5px 5px grey;
  }
  .info {
    background-color: #fff;
    height: 157px;
    width: 300px;
    padding: 1rem;
  }
}
@media screen and (max-width: 875px) {
  .slider {
    height: 25rem;
    width: 100%;
  }
  .who_we_are {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 3rem 0 3rem;
  }
  .tha_nigeria {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 3rem 0 3rem;
  }
}
@media screen and (max-width: 730px) {
  .img_text_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img_text1,
  .img_text2 {
    margin: 0.5rem;
  }
  .img_sponsors img {
    height: 100px;
    width: 100px;
  }
  .img_sponsors .ccl-logo {
    height: 35px;
    width: 100px;
  }
}
@media screen and (max-width: 730px) {
  .img_sponsors img {
    height: 75px;
    width: 90px;
  }
  .img_sponsors .ccl-logo {
    height: 35px;
    width: 90px;
  }
}
@media screen and (max-width: 450px) {
  .home_img {
    height: 250px;
    width: 250px;
  }
  .who_we_are {
    padding: 4rem 1rem 0 1rem;
  }
  .wwa_img {
    padding-left: 1rem;
  }

  .wwa_text {
    padding: 0 1rem 0 1rem;
  }
  .tha_nigeria {
    padding: 4rem 1rem 0 1rem;
  }
  .tha_nigeria_text {
    padding: 0 1rem 0 1rem;
  }
  .tha_nigeria_img {
    padding-right: 0rem;
  }

  .slider {
    height: 20rem;
    width: 100%;
  }
}
/* <button
class="btn"
href="#section3"
v-smooth-scroll="{ duration: 100 }"
>
&DownArrow; Learn more
</button> */
</style>
