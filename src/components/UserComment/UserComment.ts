import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class UserComment extends Vue {
    // including users' avatar, nickname, comment and the date about publicing comment
    // @Prop({ default: [{}] }) private users!: object[];
    private users: object[] = [
        {
            name: 'Lemon',
            userIcon: '/img/blue.jpg',
            comment: 'Good',
            date: '2019-11-10 12:09:52',
        },
        {
            name: 'Stevens',
            userIcon: '/img/blue.jpg',
            comment: 'Good',
            date: '2019-11-10 12:09:52',
        },
        {
            name: 'Lemon',
            userIcon: '/img/blue.jpg',
            comment: 'Good',
            date: '2019-11-10 12:09:52',
        },
    ];
    private commentTitle: string = '评论列表';
    private publishComment: string = '发表评论';
    // the text on the submit button
    private submitText: string = '发表';
    // the tip about publishing comment
    private tip: string = 'You will allow to input at most 200 letters.';
    // the user's comment, using v-model to bind the data, and we need a key to identify it, liking the user's id
    private comment: string = '';

    private submit(e: any): void {
        // console.log(this.comment);
        return ;
    }
}
