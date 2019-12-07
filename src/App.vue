<template>
  <div id="app">
    <!-- <router-link to="/">HomePage</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/test">Test</router-link>-->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
  width: 100vw;

  /* background-color: aquamarine; */
}

#top-box {
  width: 100%;
  height: 100%;
  position: relative;
  /* background-color: aqua; */
}

#top-scroll {
  width: 100%;
  height: 94vh;
  overflow-y: scroll;
}
</style>
