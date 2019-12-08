import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
    @Prop({ default: [{}] }) private imgs!: object[];
}
