<script setup>
import HomeHot from "./components/Homehot.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
</script>
<template>
  <div class="container">
    <home-banner />
    <home-category />
  </div>
  <home-new />
  <home-hot />
  <home-product />
</template>
<style>
</style>