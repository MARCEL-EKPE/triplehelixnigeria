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
        <h4 class="fw-bold text-center text-success">our sponsors</h4>
        <div class="img_sponsors">
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

const photos = ["web1.webp", "web2.webp", "web3.webp"];
</script>

<style scoped>
.slider {
  height: 35rem;
  width: 100%;
}
.swiper {
  padding: 3.125rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../assets/web10.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
.swiper-slide img {
  padding: 2rem;
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
  flex-basis: 50%;
  padding-left: 3rem;
}

.wwa_text {
  flex-basis: 50%;
  padding-right: 3rem;
}
.tha_nigeria {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4rem 6rem 0 6rem;
}
.tha_nigeria_text {
  flex-basis: 50%;
  padding-left: 3rem;
}
.tha_nigeria_img {
  flex-basis: 50%;
  padding-left: 5rem;
}

.tha_nigeria_aims {
  height: 40rem;
  width: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  margin: 4rem;
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
/* @media screen and (max-width: 1175px) {
  .welcome__tha {
    display: flex;
    justify-content: center;
  }
  .msg {
    margin-left: 1rem;
    flex-basis: 40%;
  }
  .msg-img-div {
    margin-left: 2rem;
  }
}

@media screen and (max-width: 1100px) {
  .slider {
    height: 25rem;
    width: 100%;
  }
  .welcome__tha {
    height: 22rem;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
  }
  .welcome__img1,
  .welcome__img2 {
    display: none;
  }

  .home__content {
    height: 73rem;
    padding: 1rem;
  }
  .who_we_are {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }

  .who_we_are .right {
    flex-basis: 100%;
  }
  .who_we_are .right img {
    width: 100%;
  }
  .img__sponsors {
    height: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .img__sponsors img {
    width: 4rem;
    height: 4rem;
  }
  .img__sponsors .ccl-logo {
    width: 7rem;
    height: 1.5rem;
  }
}
@media screen and (max-width: 650px) {
  .silder {
    height: 22rem;
    width: 100%;
  }
  .home__content {
    height: 80rem;
  }
  .who_we_are {
    margin: 0;
  }
  .img__sponsors {
    margin: 0;
    height: 8rem;
  }
}

@media screen and (max-width: 480px) {
  .silder {
    height: 11rem;
    width: 100%;
  }
  .home__content {
    height: 105rem;
  }
} */
/* <button
class="btn"
href="#section3"
v-smooth-scroll="{ duration: 100 }"
>
&DownArrow; Learn more
</button> */
</style>
