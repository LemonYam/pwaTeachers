import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
    @Prop({ default: '/public/img/head.png' }) private img!: string;
}
