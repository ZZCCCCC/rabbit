<script setup>
import { onMounted } from "vue";
import LayoutNav from "@/views/Layout/components/LayoutNav.vue";
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutFooter from "@/views/Layout/components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";

import { useCategoryStore } from "/src/stores/category.js";
const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategoryList();
});
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 破坏动态路由的复用 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>
<style></style>