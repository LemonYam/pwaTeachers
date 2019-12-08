import { Vue, Component, Prop } from 'vue-property-decorator';

const StaticImg = () => import('../../components/StaticImg/StaticImg.vue');
const Grid = () => import('../../components/Grid/Grid.vue');
const ActiveList = () => import('../../components/ActiveList/ActiveList.vue');
const Bottomtext = () => import('../../components/BottomText/BottomText.vue');

@Component({
    components: {
        StaticImg,
        Grid,
        ActiveList,
        Bottomtext,
    },
})
export default class CEPage extends Vue {
    // top title and the search icon that make you can search some courses
    private title: string = '华师网院-湛江手机教育云';
    private searchIcon: string = '/img/searchIcon.png';

    // top img, including the img's url, destination url and text
    private topImg: object = {
        url: '/img/blue.jpg',
        destUrl: '/videoPage',
        text: '点击直播预告',
    };

    // tab page
    private tabTitles: string[] = [
        '直播课堂',
        '教研活动',
        '特色活动',
        '培训专题',
    ];
    private currentIndex: number = 0;   // identify the current tab
    // first tab page's imgs
    private firstImgs: object[] = [
        {
            url: '/img/blue.jpg',
            text: '一年级',
            destUrl: '/gradePage',
        },
        {
            url: '/img/blue.jpg',
            text: '二年级',
            destUrl: '/gradePage',
        },
        {
            url: '/img/blue.jpg',
            text: '三年级',
            destUrl: '/gradePage',
        },
        {
            url: '/img/blue.jpg',
            text: '四年级',
            destUrl: '../test',
        },
        {
            url: '/img/blue.jpg',
            text: '五年级',
            destUrl: '../test',
        },
    ];
    // second tab page's imgs
    private secondImgs: object[] = [
        {
            url: '/img/blue.jpg',
            text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
            destUrl: '/coursesPage',
        },
        {
            url: '/img/blue.jpg',
            text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
            destUrl: '/cePage',
        },
        {
            url: '/img/blue.jpg',
            text: '教育部部长陈宝生考察华南师大网络教育学院创新成果实录',
            destUrl: '/test',
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
