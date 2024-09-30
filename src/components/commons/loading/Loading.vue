<script setup lang="ts">
</script>

<template>
<div class="loading-container flex items-center justify-center h-96">
    <div class="loading-text">
        <img width="75" height="75" alt="Pokebola" src="../../../assets/pokebola.png" />
    </div>
    <div class="spinner"></div>
</div>
</template>
  

  <style scoped>
  .loading-container {
    display: flex;
    justify-content: center;
    position: relative; 
    margin: 20px;
  }
  
  .loading-text {
    position: absolute;
    font-size: 12px;
    color: #939393;
  }
  
  .spinner {
    width: 90px;
    height: 90px;
    border: 5px solid rgb(199, 199, 199);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>