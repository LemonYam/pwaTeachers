import { Vue, Component } from 'vue-property-decorator';

const Header = () => import('@/components/Header/Header.vue');
const ScrollImgs = () => import('@/components/ScrollImgs/ScrollImgs.vue');
const ActiveList = () => import('@/components/ActiveList/ActiveList.vue');
const BottomText = () => import('@/components/BottomText/BottomText.vue');

@Component({
  components: {
    Header,
    ScrollImgs,
    ActiveList,
    BottomText,
  },
})
export default class HomePage extends Vue {
  private tabTitles: string[] = [
    '直播专题',
    '培训专题',
  ];
  private currentIndex: number = 0;   // identify the current tab

  private imgs: object[] = [
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/livePage',
      date: '2019.11.28',
    },
    {
      url: '/img/blue2.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/cePage',
      date: '2019.12.11',
    },
    {
      url: '/img/blue3.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/test',
      date: '2019.12.31',
    },
  ];

  // click the tab title to change its style
  private click(e: any): void | boolean {
    const current: number = e.currentTarget.id;   // 实际是一个 string
    if (this.currentIndex === current) {
      return false;
    } else {
      this.currentIndex = current;
    }
  }
}
