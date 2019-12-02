import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ScrollImgs extends Vue {
    @Prop() private msg!: string;
}
