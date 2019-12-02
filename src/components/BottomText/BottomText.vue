<template>
  <div id="footer" :style="{backgroundColor: bgcolor, color: fcolor}">{{text}}</div>
</template>

<script lang="ts" src="./BottomText.ts"></script>

<style scoped>
#footer {
  width: 100vw;
  height: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 1rem;
  font-weight: bold;

  position: absolute;
  bottom: 0;
}
</style>