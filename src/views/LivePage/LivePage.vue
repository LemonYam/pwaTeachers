<template>
  <div id="top-box">
    <div id="top-scroll">
      <Header :img="logo" bgcolor="white" />
      <div class="live-title">手机直播课堂</div>
      <StaticImg2 :img="topImg" flag="0" />
      <ActiveList :imgs="imgs" flag="1" />
      <ActiveList :imgs="imgs" flag="1" />
      <ActiveList :imgs="imgs" flag="1" />
    </div>
    <BottomText text="华南师范大学" />
  </div>
</template>

<script lang="ts" src="./LivePage.ts"></script>

<style scoped>
.live-title {
  background-color: #234690;
  color: white;
}
</style>