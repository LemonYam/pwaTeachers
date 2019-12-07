import { Vue, Component, Prop } from 'vue-property-decorator';

const Header = () => import('../../components/Header/Header.vue');
const ScrollImgs = () => import('../../components/ScrollImgs/ScrollImgs.vue');
const ActiveList = () => import('../../components/ActiveList/ActiveList.vue');
const BottomText = () => import('../../components/BottomText/BottomText.vue');

@Component({
  components: {
    Header,
    ScrollImgs,
    ActiveList,
    BottomText,
  },
})
export default class HomePage extends Vue {
  private imgs: object[] = [
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/coursesPage',
      date: '2019.11.28',
    },
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/test',
      date: '2019.12.11',
    },
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/home',
      date: '2019.12.31',
    },
  ];
}
