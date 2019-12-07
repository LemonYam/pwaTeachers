<template>
  <div>
    <div>Hello Test</div>
    <ScrollImgs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const ScrollImgs = () => import('@/components/ScrollImgs/ScrollImgs.vue');

@Component({
  components: {
    ScrollImgs,
  },
})
export default class Test extends Vue {}
</script>