<template>
    <div>
        <div>In view Test</div>
        <test />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import test from '@/components/Test/Test.vue';

@Component({
    components: {
        test,
    },
})
export default class Test extends Vue {

}
</script>