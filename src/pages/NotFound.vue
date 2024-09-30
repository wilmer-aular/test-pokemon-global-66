<script setup lang="ts">
import { useRouter } from 'vue-router';
import BackHome from '../components/views/BackHome.vue';

const router = useRouter();

const goBackHome = () => {
  router.push('/');
};

</script>

<template>
 <div class="content-error h-screen">
  <div class="flex flex-col justify-center items-center w-3/4 lg:w-2/4">
    <BackHome :goBackHome="goBackHome"/>
  </div>
 </div>
 
</template>

<style scoped>
.title-h1 {
  font-size: 26px;
  font-weight: 700;
}
.subtitle-p{
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
}
</style>
