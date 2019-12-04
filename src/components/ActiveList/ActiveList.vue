<template>
  <div>
    <div v-for="(img, idx) in imgs" :key="idx" :class="[flag == 1 ? 'list2':'list']">
      <router-link :to="img.destUrl" class="list-link">
        <img :src="img.url" class="list-img" />
        <div class="detail">{{img.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./ActiveList.ts"></script>

<style scoped>
.list {
  border-bottom: 1px #aaa solid;
  padding: 5px;
  /* background-color: aqua; */
}
.list2 {
  padding: 5px;
  margin-bottom: 3px;
  border-bottom: 5px solid #ddd;
  /* box-shadow: 0 10rpx 2rpx rgba(193, 193, 193, 0.3); */
}

.list-link {
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  position: relative;
  text-decoration: none;
  /* background-color: blueviolet; */
}

.list-img {
  width: 100px;
  max-height: 100%;
  border-radius: 5px;
}

.detail {
  color: #666666;
  padding-left: 5px;

  font-size: 1rem;
  line-height: 1.2rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  display: -webkit-box;
  word-break: break-word;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  white-space: normal !important;

  /* background-color: aquamarine; */
}
</style>