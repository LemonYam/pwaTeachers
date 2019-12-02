import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BottomText extends Vue {
    @Prop({ default: 'black' }) private bgcolor!: string;
    @Prop({ default: 'white' }) private fcolor!: string;
    @Prop({ default: 'Default Text' }) private text!: string;
}
