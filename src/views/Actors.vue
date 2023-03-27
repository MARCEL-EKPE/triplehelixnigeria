<template>
  <div>
    <Nav />
    <div class="section__1">
      <h1 class="display-6 fw-bold text-success text-center">
        TRIPLEHELIX Assocition Nigeria Actors
      </h1>
      <div class="tha_actors">
        <h4 class="text-center fw-bold">
          There are no THA Actors listed for now, please check back soon
        </h4>
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
  height: 35rem;
  width: 100%;
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tha_actors {
  padding: 10px;
  margin-top: 2rem;
  height: 7rem;
  width: 30rem;
  background-color: #cf4646;
  color: #fff;
}
</style>
