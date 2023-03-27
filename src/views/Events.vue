<template>
  <div>
    <Nav />
    <div class="section__1">
      <h1 class="display-3 fw-bold text-success text-center">
        Latest and upcoming events
      </h1>
      <div class="events">
        <img src="../assets/events-bg.webp" alt="" />
        <div class="alert-msg">
          <h2>There are no events listed yet, please check back soon</h2>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
</script>

<style scoped>
.section__1 {
  height: 40rem;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.events {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.events img {
  width: 30rem;
  height: 30rem;
}
.alert-msg {
  background-color: #cf4646;
  color: #fff;
  font-weight: bold;
  margin: 20px;
  padding: 20px;
}
</style>
