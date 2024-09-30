<script setup lang="ts">
import { ref, onMounted } from 'vue';
import apiConnector from "../../services/api.service";
import { IPokemon, IType } from "../../interfaces";
import BtnFavorite from "../customs/buttons/BtnFavorite.vue";
import ModalDetail from '../customs/modals/ModalDetail.vue';
import {capitalizeFirstLetter} from '../../util';

const props = defineProps<{ name: string, isFavorite: boolean }>();

const data = ref<any>(null);
const loading = ref<boolean>(false);
const isActive = ref<boolean>(false);
const favorite = ref<boolean>(false);

const close = () => isActive.value = false;

const getPokemon = async (name: string) => {
  try {
    isActive.value = true;
    loading.value = true;
    const response: IPokemon = await apiConnector.getOne(name);
  
    const sprites = response.sprites;
    data.value = {
      name: response.name,
      height: response.height,
      weight: response.weight,
      url: sprites?.frontDefault ? sprites.frontDefault : sprites?.frontShiny,
      types: response.types.map((value: IType) => value.type.name).join(', ')
    };

  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
const changeStatus = () => {
  favorite.value = !favorite.value
};

onMounted(() => {
    favorite.value = props.isFavorite;
});
</script>

<template>
   <v-card 
    @click="getPokemon(props.name)" 
    class="w-full mb-2 flex shadow-nones cursor-pointer " 
    style="background-color: white; box-shadow: none;"
   >
    <div class="justify-between flex items-center p-2 px-4">
      <span class="font-bold" >
      {{ capitalizeFirstLetter(props.name) }}
      </span>
      <BtnFavorite
        :name="props.name"
        :isFavorite="favorite"
        :action="changeStatus"
      />
    </div>
   </v-card>

  <div v-if="data">
    <ModalDetail 
      :close="close"
      :data="data" 
      :favorite="favorite" 
      :action="changeStatus"
      :isActive="isActive"
      :loading="loading"
    />
  </div>
</template>

<style scoped>
</style>
