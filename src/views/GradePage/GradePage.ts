import { Vue, Component, Prop } from 'vue-property-decorator';

const StaticImg = () => import('../../components/StaticImg/StaticImg.vue');
const Grid = () => import('../../components/Grid/Grid.vue');
const BottomText = () => import('../../components/BottomText/BottomText.vue');

@Component({
    components: {
        StaticImg,
        Grid,
        BottomText,
    },
})
export default class GradePage extends Vue {
    // top title and the search icon that make you can search some courses
    private title: string = '华师网院-湛江手机教育云';
    private searchIcon: string = '/img/searchIcon.png';

    // top img, including the img's url, destination url and text
    private topImg: object = {
        url: '/img/blue.jpg',
        destUrl: '/videoPage',
        text: '一年级系列课程',
    };

    // students' courses
    private coursesImgs: object[] = [
        {
            url: '/img/blue.jpg',
            text: '语文',
            destUrl: '/videoPage',
        },
        {
            url: '/img/blue.jpg',
            text: '数学',
            destUrl: '/videoPage',
        },
        {
            url: '/img/blue.jpg',
            text: '英语',
            destUrl: '/videoPage',
        },
        {
            url: '/img/blue.jpg',
            text: '体育',
            destUrl: '../test',
        },
        {
            url: '/img/blue.jpg',
            text: '音乐',
            destUrl: '../test',
        },
    ];
}
