import { Vue, Component } from 'vue-property-decorator';

const StaticImg2 = () => import('../../components/StaticImg2/StaticImg2.vue');
const BottomText = () => import('../../components/BottomText/BottomText.vue');

@Component({
    components: {
        StaticImg2,
        BottomText,
    },
})
export default class LivePage extends Vue {
    topImg: object = {
        url: '/img/blue.jpg',
        destUrl: '/videoPage',
        text: '点击直播预告',
    }
}
