<template>
    <div class="home-container">
      <PlayButton />
      <!-- Le reste de ton contenu ici -->
    </div>
  </template>
  
  <script>
  import PlayButton from "./PlayButton.vue";
  
  export default {
    components: {
      PlayButton,
    },
  };
  </script>
  
  <style scoped>
  .home-container {
    height: 100vh;
    background-color: #2c2c2c;
  }
  </style>
  