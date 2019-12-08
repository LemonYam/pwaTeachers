import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StaticImg extends Vue {
    @Prop({ default: '#ffc600' }) public fcolor!: string;
    @Prop({ default: 'rgba(30, 30, 30, 0.8)' }) public bgcolor!: string;
    @Prop({ default: {} }) private img!: object;
}
