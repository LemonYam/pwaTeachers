import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class StaticImg2 extends Vue {
    @Prop({ default: {} }) private img!: object;
    // select the container and link style
    @Prop({ default: '0' }) private flag!: string;

    private linkStyle: object = {
        border: '4px white solid',
        boxShadow: '0 0 4px black',
    };
}
