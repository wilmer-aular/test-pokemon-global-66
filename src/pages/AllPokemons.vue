<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, onMounted, computed, watch } from 'vue';
import apiConnector from "../services/api.service";
import { IPagination } from "../interfaces";
import Pokemon from "../components/views/Pokemon.vue";
import BtnsChangeList from '../components/customs/buttons/BtnsChangeList.vue';
import BackHome from '../components/views/BackHome.vue';
import { filterList, getPagination, includeFavorites } from '../util';
import {  defaultData } from '../util/defaultData';
import Loading from '../components/commons/loading/Loading.vue';
import BtnsPagination from '../components/customs/buttons/BtnsPagination.vue';

const store = useStore();
const favorites = computed(() => store.getters.getFavorites);

defineProps<{ }>()

const data = ref<IPagination>(defaultData)
const offset = ref<number>(0);
const loading = ref<boolean>(false);
const keyboardSearch =  ref<string>("");

const pagination = async (offset: number) => {
  try {
    loading.value = true;
    const response: IPagination = await apiConnector.pagination(offset, 100);
    response.results= includeFavorites(response.results, favorites.value);
    console.log(response.results.map(i => {
      i.isFavorite = false;
      return i 
    }))
    data.value = response;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const paginationSerch = async (searching: string, offset: number) => {
  try {
      loading.value = true;
      const response: IPagination = await apiConnector.pagination(0, 1400);
      const results = filterList(response.results, searching);
      const resulMapped = includeFavorites(results, favorites.value);
      data.value = getPagination(resulMapped, offset);
      loading.value = false;

  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

watch(keyboardSearch, (searching: string) => {
  if (searching?.length >= 3) {
      offset.value = 0
      paginationSerch(searching, 0)
  } else if (searching?.length === 0) {
      pagination(offset.value);
  }
});

watch(offset, () => {
  if(keyboardSearch.value.length >= 3) {
    paginationSerch(keyboardSearch.value, offset.value)
  } else {
    pagination(offset.value)
  }
});

const goBackHome = () => {
  keyboardSearch.value = ""
  pagination(offset.value);
}

onMounted(() => {
  pagination(offset.value);
});
</script>

<template>
 <div class="h-screen items-center flex flex-col b-color">
    <div class="w-3/4 lg:w-2/4 my-5">
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <v-icon>mdi-magnify</v-icon>
        </span>
        <input 
          class="rounded-sm py-2 pl-10 pr-4 w-full bg-whiteSmoke" 
          v-model="keyboardSearch" 
          placeholder="Search"
        />
      </div>
    </div>
    <div class="heigth-page" v-if="loading">
        <Loading/>
    </div>
    <div v-else-if="data.results.length" class="w-3/4 lg:w-2/4 heigth-page" >
        <Pokemon
          v-for="pokemon in data.results"
          :key="pokemon.name"
          :name="pokemon.name"
          :isFavorite="pokemon.isFavorite"
        />
    </div>
    <BackHome v-else :goBackHome="goBackHome"/>

    <div v-if="data.results.length" class="pagin">
       <BtnsPagination 
          :next="()=> offset += 20"
          :previous="()=> offset -= 20"
          :disablePrevious="loading || !data.previous" 
          :disableNext="loading || !data.next"
          :textBase="`${offset}-${offset + 20} from ${data.count}`"
        />
    </div>
    <div v-else class="w-10"></div>

    <BtnsChangeList v-if="data.results.length"/>
  </div>
</template>

<style scoped></style>