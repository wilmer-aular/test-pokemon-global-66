<script setup lang="ts">
import { useRouter } from 'vue-router';
import ButtonRound from '../components/commons/buttons/ButtonRound.vue';
import { TypeColor } from '../interfaces';

const router = useRouter();

const goPokemons = () => {
  router.push('/all');
};

</script>

<template>
 <div class="content-error h-screen">
  <div class="flex flex-col justify-center items-center w-3/4 lg:w-2/4">
      <div >
        <img width="325" height="288" src="../assets/pikachu.png" alt="pokemon" />
      </div>
      <div class="text-center">
        <h1 class="py-5 title-h1">Welcome to Pokédex</h1>
        <p class="subtitle-p">The digital encyclopedia created by Professor Oak is an invaluable tool to Thainers in the Pokémon world</p>
      </div>
      <div class="mt-5">
        <ButtonRound 
            :buttonColor="TypeColor.danger" 
            buttonIcon="" 
            buttonText="Get started"
            :action="goPokemons"
          />  
      </div>
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
