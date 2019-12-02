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
}
