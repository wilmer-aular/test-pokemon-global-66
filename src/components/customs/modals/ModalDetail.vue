<script setup lang="ts">
import BtnFavorite from "../buttons/BtnFavorite.vue";
import Loading from '../../commons/loading/Loading.vue';
import ButtonRound from '../../commons/buttons/ButtonRound.vue'
import backgroundModal from '../../../assets/backgroudModal.png';
import LabelModal from '../../commons/labels/LabelModal.vue';
import {capitalizeFirstLetter} from '../../../util';
import { TypeColor } from '../../../interfaces';

const props = defineProps<{ 
  data: any, 
  action: Function,
  favorite: boolean,
  close: Function,
  loading: boolean,
  isActive: boolean
}>();

const sharePokemon = async () => {
  try {
      const dataString = Object.entries(props.data)
                      .map(([key, value]) => `${key}: '${value}'`)
                      .join(', ');

      await navigator.clipboard.writeText(dataString);
      alert(`Text copied: "${dataString}"`);
  } catch (err) {
    console.error(err);
    alert('Could not copy text');
  }
}

</script>

<template>
    <v-dialog @close="close" :model-value="isActive" max-width="600px">
      <Loading v-if="loading"/>
      <v-card v-else>
        <v-card-title
          :style="{
              backgroundImage: 'url(' + backgroundModal + ')',
              backgroundSize: 'cover'
            }"
          >
          <div class=" flex justify-end mt-2">
                <v-btn  
                  style="
                    background-color: white;
                    width: 30px;
                    height: 30px;
                  "
                  icon="mdi-close"
                  variant="text"
                  @click="close"
                ></v-btn>
          </div>
        <div class="flex flex-col justify-center items-center">
          <img width="180" :src="data?.url" class="logo" :alt="data?.name" />
        </div>
        </v-card-title >
        <v-card-text class="px-10">
          <LabelModal field="Name" :value="capitalizeFirstLetter(data?.name)" />
          <LabelModal field="Weight" :value="data?.weight" />
          <LabelModal field="Height" :value="data?.height" />
          <LabelModal field="Types" :value="capitalizeFirstLetter(data?.types)" />
        </v-card-text>
        <v-card-actions style="justify-content: space-between; display: block;">
          <div class="justify-between flex items-center px-5">
            <ButtonRound 
              :buttonColor="TypeColor.danger" 
              buttonIcon="" 
              buttonText="Share to may friends"
              :action="sharePokemon"
            />  
            <BtnFavorite 
              :name="data.name" 
              :isFavorite="favorite" 
              :action="action"
            />
          </div>
         
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style scoped>
</style>
