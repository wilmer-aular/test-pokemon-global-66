<script setup lang="ts">
import { colors } from '../../../util/defaultData';
import { TypeColor } from '../../../interfaces';
import { ref } from 'vue';

const props = defineProps<{
  action: Function;
  buttonColor: TypeColor;
  buttonIcon: string;
  buttonText: string;
}>();
const isHovered = ref(false);
const color = colors[props.buttonColor];

</script>

<template>
  <v-btn
    @click="props.action"
    class="rounded-btn custom-btn"
    @mouseover="isHovered = true" 
    @mouseleave="isHovered = false"
    :style="{ backgroundColor: isHovered ? color?.like : color?.main }"
  >
    <v-icon v-if="props.buttonIcon" left>{{ props.buttonIcon }}</v-icon>
    {{ props.buttonText }}
  </v-btn>
</template>

<style scoped>
.custom-btn {
    transition: background-color 0.3s ease;
}

.rounded-btn {
    font-weight: 700;
    border: none;
    border-radius: 60px;
    color: #FFFFFF;
    margin-left: 5px;
    padding: 11px 20px;
    box-shadow: none;
    text-transform: none;
}
</style>