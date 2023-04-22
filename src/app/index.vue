<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <!--<Preloader />-->
   <MainLayout>
      <router-view />
   </MainLayout>
</template>

<script setup>
//import { computed } from "vue";
import { RouterView } from 'vue-router'
import MainLayout from '@/layout/MainLayout.vue';
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>