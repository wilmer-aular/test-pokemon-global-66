<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import ButtonRound from '../../commons/buttons/ButtonRound.vue';
import { TypeColor } from '../../../interfaces'

const router = useRouter();
const route = useRoute();

const goList = (uri: string) => {
  router.push(`/${uri}`);
};

const currentPath = computed(() => route.path);
</script>

<template>
    <div class="card">
        <div class="button-container">
            <ButtonRound 
              :buttonColor="currentPath === '/all' ? TypeColor.danger : TypeColor.secundary"
              buttonIcon="mdi-format-list-bulleted" 
              buttonText="All"
              :action="() => goList('all')"
              class="button-width"
            />
            <ButtonRound 
              :buttonColor="currentPath === '/favorites' ? TypeColor.danger : TypeColor.secundary" 
              buttonIcon="mdi-star" 
              buttonText="Favorites"
              :action="() => goList('favorites')"
              class="button-width"
            />
        </div>
    </div>
</template>

<style scoped>
.card {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white; 
    padding: 10px; 
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); 
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.button-container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 10px; 
}
.button-width {
    width: 150px; 
}
</style>
