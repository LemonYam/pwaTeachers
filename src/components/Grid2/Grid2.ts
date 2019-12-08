import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Gride2 extends Vue {
    @Prop({ default: '' }) private width!: string;
    @Prop({ default: [{}] }) private imgs!: object[];
}
