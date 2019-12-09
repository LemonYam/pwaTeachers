<template>
  <div id="top-box">
    <div id="top-scroll">
      <Header />
      <ScrollImgs :imgs="imgs" />
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
          <ActiveList :imgs="imgs" />
          <ActiveList :imgs="imgs" />
        </div>
        <div v-show="currentIndex==1">
          <ActiveList :imgs="imgs" />
        </div>
      </div>
    </div>
    <BottomText text="华南师范大学" />
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>

<style scoped>
.tabtitles-box {
  float: left;
  width: 50%;
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
  color: rgb(43, 141, 0);
  border-bottom: 2px solid rgb(43, 141, 0);
}
</style>