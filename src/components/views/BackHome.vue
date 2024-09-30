<script setup lang="ts">
import ButtonRound from '../commons/buttons/ButtonRound.vue';
import { TypeColor } from '../../interfaces';

    defineProps<{ goBackHome: Function}>()
</script>
<template>
  <div class="content-error">
    <h1 class="title-h1">Uh-oh!</h1>
    <p class="subtitle-p">You look lost on your journey!</p>
    <div class="mt-5">
      <ButtonRound 
            :buttonColor="TypeColor.danger"
            buttonIcon="" 
            buttonText="Go back home"
            :action="goBackHome"
          />  

  </div>
  </div>
</template>

<style scoped>
.title-h1 {
  font-size: 36px;
  font-weight: 700;
}
.subtitle-p{
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
}
</style>
