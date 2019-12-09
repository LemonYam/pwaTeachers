import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class StaticImg2 extends Vue {
    @Prop({ default: {} }) private img!: object;
    // select the background color and link style
    @Prop({ default: '0' }) private flag!: string;
}
