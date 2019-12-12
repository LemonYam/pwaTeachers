import { Vue, Component, Prop } from 'vue-property-decorator';

import Axios from 'axios'

@Component
export default class ScrollImgs extends Vue {
    // the scroll imgs, inclding some text, img's url and the destination's url
    @Prop({ default: [{}] }) private imgs!: object[];

    beforeMount() {
        const test = Axios.get('https://www.baidu.com');
        test.then(function(response){
            console.log(response);//请求正确时执行的代码
        }).catch(function (response){
            console.log(response);//发生错误时执行的代码
        });
        console.log("HHH");
    }
}
