<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from "vue";
const boo = ref(false);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Noto Sans", sans-serif;
  font-weight: 300;
}

#app {
  font-family: "Noto Sans", sans-serif;
}
p {
  font-weight: 600;
  line-height: 1.7rem;
}
</style>
