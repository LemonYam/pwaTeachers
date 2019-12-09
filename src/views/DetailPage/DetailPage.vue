<template>
  <div id="top-box">
    <div id="top-scroll">
      <div class="title">{{title}}</div>
      <StaticImg2 :img="topImg" flag="1" />
      <div v-for="(title, idx) in tabTitles" :key="idx" class="tabtitles-box">
        <div
          :id="idx"
          @click="click"
          :class="{'active':currentIndex == idx}"
          class="title-item"
        >{{title}}</div>
      </div>
    </div>
    <BottomText text="华南师范大学" bgcolor="rgba(10, 10, 255, 0.8)" />
  </div>
</template>

<script lang="ts" src="./DetailPage.ts"></script>

<style scoped>
.title {
  height: 6vh;
  background-color: #30468e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
  font-size: 1.2rem;
}

.tabtitles-box {
  float: left;
  width: 33.333%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 1px rgba(193, 193, 193, 0.3);
  margin-bottom: 5px;
}

.title-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bolder;
  color: #434343;
  height: 100%;
  width: 100%;
}

/* the tab page if it actived */
.active {
  color: #3580cd;
  border-bottom: 2px solid #3580cd;
}
</style>