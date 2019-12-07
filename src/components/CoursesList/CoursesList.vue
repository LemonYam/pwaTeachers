<template>
  <div>
    <div
      v-for="(cls, idx) in courses"
      :key="idx"
      class="cls-container"
      :style="{backgroundColor: idx%2 == 0? '#eee':'#fff'}"
    >
      <router-link :to="cls.destUrl" class="cls-link">
        <div class="detail">{{cls.title}}</div>
        <div class="detail">{{cls.host}}</div>
        <div class="detail">
          直播时间：{{cls.date}}
          <span
            class="state"
            :style="{color: cls.flag == 0 ? '#666': cls.flag == 1 ? 'red': 'green'}"
          >{{state[cls.flag]}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./CoursesList.ts"></script>

<style scoped>
.cls-container {
  padding: 5px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  border-bottom: 1px solid #aaa;
}
.cls-link {
  height: 100%;
  width: 100%;
  font-size: 1em;
  color: black;
  text-decoration: none;

  /* background-color: aqua; */
}
.detail {
  height: 35px;
  display: flex;
}
.state {
  height: 35px;
  padding-left: 5px;
  /* background-color: aqua; */
}
</style>