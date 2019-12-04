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
  @Prop() private msg!: string;

  private imgs: object[] = [
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/videoPage',
    },
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/about',
    },
    {
      url: '/img/blue.jpg',
      text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
      destUrl: '/home',
    },
  ];
}
