<script setup lang="ts">
import { useStore } from 'vuex';
import { colors } from '../../../util/defaultData';

const props = defineProps<{ isFavorite: boolean, name: string, action: Function  }>()
const store = useStore();

const changeStatus = () => {
   
    if(props.isFavorite){
        store.dispatch('removeFromFavorites', props.name);
    } else {
        store.dispatch('addToFavorites', {name: props.name, url: null});
    }
    props.action()
};

</script>

<template>
    <v-icon
        @click.stop="changeStatus" 
        class="favorite-btn" 
        :color="isFavorite ? colors.warning.main : colors.secundary.main"
    >
      mdi-star
    </v-icon>
</template>

<style scoped>
.favorite-btn {
    border-radius: 50%;
    background-color: #F5F5F5;
    width: 44px;
    height: 44px;
}
</style>