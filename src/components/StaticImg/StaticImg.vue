<template>
  <div class="img-container">
    <router-link :to="img.destUrl">
      <img :src="img.url" class="top-img" />
      <div class="top-text" :style="{color: fcolor, backgroundColor: bgcolor}">
        <div>{{img.text}}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" src="./StaticImg.ts"></script>

<style scoped>
/* the top navigation img's container */
.img-container {
  position: relative;
  margin-bottom: 10px;
  font-size: 0;
  min-height: 50px;
}

/* top navigation img */
.top-img {
  width: 100%;
}

/* top navigation text */
.top-text {
  position: absolute;
  bottom: 0px;
  /* background-color: rgba(30, 30, 30, 0.8);
  color: #ffc600; */
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>