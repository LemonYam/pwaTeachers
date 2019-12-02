import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ActiveList extends Vue {
    @Prop({ default: 'Hello' }) private msg!: string;

    private imgs: string[] = [
        '/img/head.png',
        '/img/blue.jpg',
    ];
}
