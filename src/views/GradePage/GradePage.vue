<template>
  <div id="top-box">
    <div id="top-scroll" :style="{backgroundColor: '#eee'}">
      <div class="title-box">
        <div class="title">{{title}}</div>
        <router-link to="/test" class="icon-link">
          <img :src="searchIcon" class="search-icon" />
        </router-link>
      </div>
      <StaticImg :img="topImg" bgcolor="rgba(255, 255, 255, 0.8)" fcolor="blue" />
      <Grid :imgs="coursesImgs" width="25%" />
      <Grid :imgs="coursesImgs" width="25%" />
      <Grid :imgs="coursesImgs" width="25%" />
      <Grid :imgs="coursesImgs" width="25%" />
    </div>
    <BottomText text="华南师范大学" bgcolor="#999" fcolor="black" />
  </div>
</template>

<script lang="ts" src="./GradePage.ts"></script>

<style scoped>
/* top title's container */
.title-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  height: 60px;
  background-color: #3580cd;
}

.title {
  width: 75%;
  /* background-color: aqua; */
}

.icon-link {
  width: 20%;
  /* background-color: aqua; */
}

.search-icon {
  width: 30px;
  height: 30px;
}
</style>