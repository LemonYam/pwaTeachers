<template>
  <div>Hello Test</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class Icon extends Vue {
  @Prop() private name!: string;
}
</script>