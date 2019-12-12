import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ScrollImgs extends Vue {
    // the scroll imgs, inclding some text, img's url and the destination's url
    @Prop({ default: [{}] }) private imgs!: object[];
}
