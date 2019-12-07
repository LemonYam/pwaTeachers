import { Vue, Component } from 'vue-property-decorator';

const CoursesList = () => import('../../components/CoursesList/CoursesList.vue');
const BottomText = () => import('../../components/BottomText/BottomText.vue');

@Component({
    components: {
        CoursesList,
        BottomText,
    },
})
export default class CoursesPage extends Vue {
    private title: string = '广东省第十六届小学语文青年教师教学论坛';
    private courses: object[] = [
        {
            title: '《牛犊》',
            date: '2019/11/16/10:40',
            host: '任课教师：巴宜区中学罗旦老师',
            destUrl: '../videoPage',
            flag: '0',
        },
        {
            title: '《牛犊》',
            date: '2019/11/16/10:40',
            host: '任课教师：巴宜区中学罗旦老师',
            destUrl: '../videoPage',
            flag: '1',
        },
        {
            title: '《牛犊》',
            date: '2019/11/16/10:40',
            host: '任课教师：巴宜区中学罗旦老师',
            destUrl: '../videoPage',
            flag: '2',
        },
    ];
    private state: string[] = [
        '(直播未开始)',
        '(直播中)',
        '(直播结束)',
    ];
    private qrCode: string = '/img/blue.jpg';
    private bottomText: string = '';
}
