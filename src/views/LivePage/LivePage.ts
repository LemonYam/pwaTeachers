import { Vue, Component } from 'vue-property-decorator';

const Header = () => import('../../components/Header/Header.vue');
const StaticImg2 = () => import('../../components/StaticImg2/StaticImg2.vue');
const ActiveList = () => import('../../components/ActiveList/ActiveList.vue');
const BottomText = () => import('../../components/BottomText/BottomText.vue');

@Component({
    components: {
        Header,
        StaticImg2,
        ActiveList,
        BottomText,
    },
})
export default class LivePage extends Vue {
    private logo: string = '/img/logo.png';
    private topImg: object = {
        url: '/img/blue.jpg',
        destUrl: '/videoPage',
        event: '通过动手操作提高学生解答多边形面积的能力',
        date: '2018.11.02',
    };

    private imgs: object[] = [
        {
            url: '/img/blue.jpg',
            text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
            destUrl: '/detailPage',
        },
        {
            url: '/img/blue.jpg',
            text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
            destUrl: '/cePage',
        },
        {
            url: '/img/blue.jpg',
            text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
            destUrl: '/coursesPage',
        },
    ];
}
