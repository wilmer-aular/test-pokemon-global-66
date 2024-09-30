<script setup lang="ts">
import { colors } from '../../../util/defaultData';

defineProps<{
    next: Function
    disablePrevious: boolean, 
    disableNext: boolean,
    previous: Function,
    textBase: string
    }>();

</script>

<template>
      <div>
        <v-btn
            :style="{backgroundColor: colors.danger.main, color: 'white'}" 
            :disabled="disablePrevious" 
            @click="previous"
        >
        <v-icon left>mdi-arrow-left-bold</v-icon>
    </v-btn>
    <span class="font-thin mx-2">
      {{ textBase }} 
    </span>
   
    <v-btn
            :style="{ backgroundColor: colors.danger.main, color: 'white'}" 
            :disabled="disableNext" 
            @click="next"
        >
        <v-icon left>mdi-arrow-right-bold</v-icon>
      
    </v-btn>
      </div>
</template>

<style scoped></style>