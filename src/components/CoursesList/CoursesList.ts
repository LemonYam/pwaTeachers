import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CoursesList extends Vue {
    @Prop({ default: [''] }) private state!: string[];
    @Prop({ default: [{}] }) private courses!: object[];
}
