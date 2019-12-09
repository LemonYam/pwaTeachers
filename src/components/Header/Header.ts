import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop({ default: '/img/head.png' }) private img!: string;
    @Prop({ default: '#2b8d00' }) private bgcolor!: string;
}
