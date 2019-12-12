<template>
  <swiper class="scroll-view" :options="swiperOption">
    <!-- <div v-for="(x,key) in init"
         :key="key"> -->
    <swiper-slide v-for="(img, idx) in imgs" :key="idx" class="scroll-item">
      <router-link :to="img.destUrl" class="img-link">
        <img :src="img.url" alt="图片加载失败啦 ?_?" class="imgs" />
        <div class="title-container">
          <div class="live-title1">直播预告</div>
          <div class="live-title2">
            <div>
              <span>{{ img.text }}</span>
              <span>{{ img.date }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </swiper-slide>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  <!-- <div class="scroll-item">
      <router-link :to="imgs[0].destUrl"
                   class="img-link">
        <img :src="imgs[0].url"
             alt="图片加载失败啦 ?_?"
             class="imgs" />
        <div class="title-container">
          <div class="live-title1">直播预告</div>
          <div class="live-title2">
            <div>
              <span>{{imgs[0].text}}</span>
              <span>{{imgs[0].date}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div> -->

  <!-- </div> -->
</template>

<script lang="ts" src="./ScrollImgs.ts"></script>

<style scoped>
.swiper-button-next{
  background-image: url(/img/right.jpg);
  background-size: 100%;
  width: 15vw;
  height: 15vh;
  top: 25%;
  margin: 2vw;
}

.swiper-button-prev{
  background-image: url(/img/left.jpg);
  background-size: 100%;
  width:15vw;
  height: 15vh;
  top: 25%;
  margin: 2vw;
}

/* .scroll-view {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: mymove2 7s infinite;
} */
/* @keyframes mymove2 {
  0% {
    left: 150%;
  }
  30% {
    left: 55%;
  }
  60% {
    left: -50%;
  }
  100% {
    left: -155%;
  }
} */
 /* .scroll-item {
  width: 100vw; 
  min-height: 100px;
  border: white inset 1vw;
  border-radius: 10px;
  box-shadow: 0 0 1vw black;
  background-color: rgb(216, 217, 218);
} */

/* .img-link {
  position: relative;
  height: 38vh;
  width: 100vw;
  background-color: blueviolet;
} */

.imgs {
  width: 100vw;
  height: 100%;
  /* border: white solid 5px;
  border-radius: 10px; */
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
