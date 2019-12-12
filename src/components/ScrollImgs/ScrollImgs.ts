import { Vue, Component, Prop } from 'vue-property-decorator';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class ScrollImgs extends Vue {
  // the scroll imgs, inclding some text, img's url and the destination's url
  @Prop({ default: [{}] }) private imgs!: object[];
  @Prop({ default: {} })
  private swiperOption = {
    // 淡出效果
    effect: 'coverflow',
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
    //   type: "fraction"
    },
    // 前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      // hideOnClick: true
    },
  };
}
