<template>
  <div id="top-box">
    <Header />
    <div id="mid-box">
      <!-- <ScrollImgs :imgs="imgs" /> -->
      <ActiveList :imgs="imgs" />
    </div>
    <BottomText text="华南师范大学" />
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>

<style scoped>
#mid-box {
  height: 87vh;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  /* background-color: blueviolet; */
}
</style>