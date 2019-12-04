import { Vue, Component } from 'vue-property-decorator';

const UserComment = () => import('@/components/UserComment/UserComment.vue');

@Component({
    components: {
        UserComment,
    },
})
export default class VideoPage extends Vue {
    // video's title
    private title: string = '教育部部长陈宝生考察华南师大网络教育学院创新成果实录-网络学院';
}
