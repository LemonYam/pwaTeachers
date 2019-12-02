<template>
  <div>
    <div v-for="(img, idx) in imgs" :key="idx">
      <img :src="img" />
    </div>
  </div>
</template>

<script lang="ts" src="./ActiveList.ts"></script>

<style scoped>
</style>