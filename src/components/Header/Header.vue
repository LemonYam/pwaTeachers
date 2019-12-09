<template>
  <div class="header" :style="{backgroundColor: bgcolor}">
    <img alt="手机教师网" :src="img" />
  </div>
</template>

<script lang="ts" src="./Header.ts"></script>

<style scoped>
.header {
  height: 7vh;
  padding: 5px 0;
}
.header img {
  max-height: 100%;
  max-width: 100%;
  margin: auto;
  display: block;
}
</style>