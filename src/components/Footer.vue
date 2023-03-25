<template>
  <div class="footer">
    <section class="footer__section">
      <div class="container_content">
        <button
          class="contact-btn"
          @click="goTo"
          href="#nav"
          v-smooth-scroll="{ duration: 100 }"
        >
          Contact us
        </button>
        <div class="address icon">
          <i class="bi bi-house-door-fill me-2" style="font-size: 1.25rem"></i>
          <span>
            Plot 76A Fiddil Avenue, off Ordinance Road, Trans Amadi Industrial
            Layout, Port Harcourt, Nigeria.
          </span>
        </div>
        <div class="phone icon">
          <i class="bi bi-phone-fill" style="font-size: 1.25rem"></i>
          <span> +234(0)8111113988, +234(0)8111113974</span>
        </div>

        <div class="email icon">
          <i
            class="bi bi-globe-asia-australia me-2"
            style="font-size: 1.25rem"
          ></i>
          <span>www.triplehelixnigeria.com</span>
        </div>
      </div>
      <div class="null-div"></div>
      <img src="../assets/footerImg.webp" alt="" class="footer-slide" />
    </section>
  </div>
</template>

<script setup>
import router from "../router";
import { ref } from "vue";

function goTo() {
  router.push("/contact-us");
}
</script>

<style scoped>
.footer {
  height: 100%;
  width: 100%;
  margin: 4rem 0 1rem 0;
}

.footer__section {
  height: 22rem;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.container_content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #0b0b27;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  flex-basis: 55%;
  color: #fff;
  padding: 0 6rem 0 2rem;
}
.contact-btn {
  height: 2.5rem;
  width: 8rem;
  background-color: #d1bc00fc;
  border-radius: 0.6rem;
  font-weight: bold;
}
.icon {
  padding: 1rem;
}
.null-div {
  height: 100%;
  width: 100%;
  background-color: #b3e342;
  flex-basis: 40%;
}
.footer-slide {
  height: 200px;
  width: 300px;
  position: absolute;
  top: 70px;
  right: 300px;
}
@media screen and (max-width: 1212px) {
  .footer-slide {
    top: 70px;
    right: 180px;
  }
}
@media screen and (max-width: 930px) {
  .footer__section {
    width: 100%;
  }
  .container_content {
    padding: 0.5rem;
    flex-basis: 100%;
  }
  .footer-slide {
    display: none;
  }
  .null-div {
    display: none;
  }
  .footer {
    margin: 4rem 0 0 0;
  }
}
</style>
