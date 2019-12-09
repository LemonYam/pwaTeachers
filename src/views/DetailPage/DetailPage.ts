import { Vue, Component, Prop } from 'vue-property-decorator';

const StaticImg2 = () => import('../../components/StaticImg2/StaticImg2.vue');
const BottomText = () => import('../../components/BottomText/BottomText.vue');

@Component({
    components: {
        StaticImg2,
        BottomText,
    },
})
export default class DetailPage extends Vue {
    private title: string = '江西抚州临川区基础教育质量整体提升工程';
    private topImg: object = {
        url: '/img/blue.jpg',
        destUrl: '/videoPage',
        event: '手机直播活动',
        date: '2018.11.02',
    };

    private tabTitles: string[] = [
        '直播课堂',
        '教研活动',
        '特色活动',
    ];
    private currentIndex: number = 0;   // identify the current tab

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
