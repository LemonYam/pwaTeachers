<template>
  <div class="container" :class="[flag == 1 ? 'container2':'container']">
    <router-link :to="img.destUrl" :class="[flag == 1 ? 'link2':'link']">
      <img :src="img.url" class="img" />
      <div class="text-container">
        <div class="left-label">直播预告</div>
        <div class="right-label">
          <div class="right-sub">
            <div class="sub-label">{{img.event}}</div>
            <div class="sub-label">{{img.date}}</div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" src="./StaticImg2.ts"></script>

<style scoped>
.container {
  width: 750rpx;
  background-color: #dfe7f7;
  padding: 30rpx 0rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 2rpx solid #ccc; */
  /* box-shadow: 0 0rpx 12rpx #999; */
}
.container2 {
  width: 750rpx;
  background-color: white;
  padding: 30rpx 0rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 2rpx solid #ccc; */
}
.link {
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link2 {
  position: relative;
  height: 400rpx;
  width: 630rpx;
  border: 8rpx white solid;
  box-shadow: 0 0 8rpx black;
}
.img {
  width: 100%;
  height: 400rpx;
}
.text-container {
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0rpx;
  background-color: rgba(35, 70, 144, 0.85);
}
.left-label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  float: left;
  font-size: 40rpx;
  font-weight: bolder;
  color: white;
}
.right-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  float: right;
  font-size: 30rxp;
  color: white;
  /* background-color: aqua; */
}
.right-sub {
  padding-right: 20rpx;
  width: 95%;
  /* background-color: aqua; */
}
.sub-label {
  width: 100%;
  text-align: right;
}
</style>