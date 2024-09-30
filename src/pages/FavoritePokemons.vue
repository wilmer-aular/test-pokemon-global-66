<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
import { IPagination} from '../interfaces'
import { ref, onMounted } from 'vue'
import Pokemon from "../components/views/Pokemon.vue";
import BtnsChangeList from '../components/customs/buttons/BtnsChangeList.vue';
import BackHome from '../components/views/BackHome.vue';
import { filterList, getPagination } from '../util';
import {  defaultData } from '../util/defaultData';
import Loading from '../components/commons/loading/Loading.vue';
import { useRouter } from 'vue-router';
import BtnsPagination from '../components/customs/buttons/BtnsPagination.vue';

const router = useRouter();

const data = ref<IPagination>(defaultData);
const loading = ref<boolean>(false);
const keyboardSearch =  ref<string>("");
const offset = ref<number>(0);

const store = useStore();
const favorites = computed(() => store.getters.getFavorites);

const pagination = async (offset: number) => {

    loading.value = true;
    data.value = getPagination(favorites.value, offset)
    loading.value = false;
};

const paginationSerch = async (searching: string, offset: number) => {
    loading.value = true;    
    const restults = filterList(favorites.value, searching);
    data.value = getPagination(restults, offset)
    loading.value = false;
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
  if(favorites.value.length){
      keyboardSearch.value = ""
    pagination(offset.value);
    return;
  }
  router.push('/all');
}

watch(favorites, () => pagination(offset.value));
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
      <div v-if="loading">
        <Loading/>
      </div>
      <div v-else-if="data.results.length" class="w-3/4 lg:w-2/4 mb-2 b-color">
          <Pokemon
            v-for="pokemon in data.results"
            :key="pokemon.name"
            :name="pokemon.name"
            :isFavorite="true"
          />
      </div>
      <BackHome v-else :goBackHome="goBackHome"/>
      <div v-if="data.results.length && (data.next || data.previous)" class="pagin">
        <BtnsPagination 
          :next="()=> offset += 20"
          :previous="()=> offset -= 20"
          :disablePrevious="loading || !data.previous" 
          :disableNext="loading || !data.next"
           :textBase="`${offset}-${offset + 20} from ${data.count}`"
        />
      </div>
      <BtnsChangeList v-if="data.results.length"/>

  </div>


</template>
