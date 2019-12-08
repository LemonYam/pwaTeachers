<template>
  <div id="top-box">
    <div id="top-scroll">
      <div class="title-box">
        <div class="title">{{title}}</div>
        <router-link to="/test" class="icon-link">
          <img :src="searchIcon" class="search-icon" />
        </router-link>
      </div>
      <StaticImg :img="topImg" />
      <div v-for="(title, idx) in tabTitles" :key="idx" class="tabtitles-box">
        <div
          :id="idx"
          @click="click"
          :class="{'active':currentIndex == idx}"
          class="title-item"
        >{{title}}</div>
      </div>
      <div>
        <div v-show="currentIndex==0">
          <Grid :imgs="firstImgs" width="33%" />
        </div>
        <div v-show="currentIndex==1">
          <ActiveList :imgs="secondImgs" flag="1" />
          <ActiveList :imgs="secondImgs" flag="1" />
        </div>
        <div v-show="currentIndex==2">
          <ActiveList :imgs="secondImgs" flag="1" />
        </div>
        <div v-show="currentIndex==3">
          <ActiveList :imgs="secondImgs" flag="1" />
        </div>
      </div>
    </div>
    <Bottomtext text="华南师范大学" />
  </div>
</template>

<script lang="ts" src="./CEPage.ts"></script>

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

.tabtitles-box {
  float: left;
  width: 25%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 1px rgba(193, 193, 193, 0.3);
  margin-bottom: 5px;
}

/* tab title */
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