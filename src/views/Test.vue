<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(img, index) in imgs" :key="index"
      ><img :src="img.url" style="width:70vw; height:30vh"
    /></swiper-slide>
    <!-- <swiper-slide>slide1</swiper-slide>
      <swiper-slide>slide2</swiper-slide>
      <swiper-slide>slide3</swiper-slide>
      <swiper-slide>slide4</swiper-slide>
      <swiper-slide>slide5</swiper-slide>
      <swiper-slide>slide6</swiper-slide> -->

    <!-- <ScrollImgs /> -->

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- 如果需要滚动条
      <div class="swiper-scrollbar"></div> -->
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator';

// // const ScrollImgs = () => import('@/components/ScrollImgs/ScrollImgs.vue');

// @Component({
//   components: {
//     ScrollImgs,
//   },
// })
import { Vue, Component, Prop } from 'vue-property-decorator';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class Test extends Vue {
  private swiperOption = {
    // 淡出效果
    // effect: "fade",
    // fade: {
    //   crossFade: true
    // },

    // 自动播放
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // 滑动不会失效
    },

    speed: 1000, // 切换幻灯片速度
    loop: true, // 循环模式选项
    // 分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // 点击圆点切换
      // dynamicBullets: true,
      type: 'fraction',
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      // hideOnClick: true
    },
  };
}
</script>
swiper-slide { height:30vh; width:100vw; background-color:"blue"; }
<style scoped></style>
