<script setup lang="ts">

defineProps<{ field: string, value: any }>();

</script>

<template>
    <div class="py-2"><span class="font-bold">{{ field }}:</span>  {{ value }}</div>
    <v-divider></v-divider>
         
</template>

<style scoped>
</style>
