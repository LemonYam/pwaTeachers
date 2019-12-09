<template>
  <div class="scroll-view">
    <div v-for="(img, idx) in imgs" :key="idx" v-show="idx==0" class="scroll-item">
      <router-link :to="img.destUrl" class="img-link">
        <img :src="img.url" alt="图片加载失败啦 ?_?" class="imgs" />
        <div class="title-container">
          <div class="live-title1">直播预告</div>
          <div class="live-title2">
            <div>
              <span>{{img.text}}</span>
              <span>{{img.date}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./ScrollImgs.ts"></script>

<style scoped>
.scroll-view {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-item {
  width: 70vw;
  min-height: 100px;
  border: white inset 1vw;
  border-radius: 10px;
  box-shadow: 0 0 1vw black;

  background-color: rgb(216, 217, 218);
}

.img-link {
  position: relative;
  height: 38vw;
  /* background-color: blueviolet; */
}

.imgs {
  width: 100%;
  height: 100%;
  /* border: white solid 5px; */
  border-radius: 10px;
}

.title-container {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 8vh;
  display: flex;
  border-radius: 0 0 10px 10px;
  background: rgba(0, 0, 0, 0.9);
}

.live-title1 {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c9250c;
  font-size: 1.1em;
  font-weight: bolder;

  /* background-color: aqua; */
}

.live-title2 {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;

  /* background-color: #c9250c; */
}

.live-title2 div {
  width: 100%;
  padding: 0em 0.8em;
  box-sizing: border-box;
}

.title-container span {
  text-align: right;
  display: block;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* background-color: #c9250c; */
}
</style>