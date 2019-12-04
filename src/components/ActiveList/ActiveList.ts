import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ActiveList extends Vue {
    // The list's obj, including the img's url, destination's url and the discribe of the img
    @Prop({ default: [{}] }) private imgs!: object[];
    // Select the border's style
    @Prop({ default: '0' }) private flag!: string;
}
