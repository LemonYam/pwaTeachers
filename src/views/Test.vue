<template>
  <div>
    <div>Hello Test</div>
    <UserCommnet />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const UserCommnet = () => import('../components/UserComment/UserComment.vue');

@Component({
  components: {
    UserCommnet,
  },
})
export default class Test extends Vue {}
</script>