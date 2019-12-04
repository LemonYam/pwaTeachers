<template>
  <div id="top-box">
    <video
      src="http://w.gdou.com/livevod/news/06.mp4"
      show-mute-btn
      webkit-playsinline
      controls
      class="vid"
    ></video>
    <div class="title">{{title}}</div>
    <UserComment />
  </div>
</template>

<script lang="ts" src="./VideoPage.ts"></script>

<style scoped>
/* video */
.vid {
  width: 100%;
  display: block;
  margin: auto;
}

/* the video's title */
.title {
  text-align: center;
  padding: 0px 10px;
  line-height: 2em;
  font-weight: bolder;
  word-wrap: break-word;

  /* background-color: aqua; */
}
</style>