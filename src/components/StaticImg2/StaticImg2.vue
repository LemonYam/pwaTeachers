<template>
  <div :class="['container', {'change-container': flag==1}]">
    <router-link :to="img.destUrl" :class="['link', {'add-border': flag==1}]">
      <img :src="img.url" class="img" />
      <div class="text-container">
        <div class="left-label">直播预告</div>
        <div class="right-label">
          <div class="right-sub">
            <div class="sub-label">{{img.event}}</div>
            <div class="sub-label">{{img.date}}</div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" src="./StaticImg2.ts"></script>

<style scoped>
.container {
  background-color: #dfe7f7;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0px 5px #999;
}
.change-container {
  background-color: white;
  border-bottom: none;
  box-shadow: none;
}

.link {
  width: 90%;
  position: relative;
}
.add-border {
  border: 4px white solid;
  box-shadow: 0 0 4px black;
}

.img {
  width: 100%;
}
.text-container {
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0px;
  background-color: rgba(35, 70, 144, 0.85);
}
.left-label {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  float: left;
  font-size: 1.3rem;
  font-weight: bolder;
  color: white;
}
.right-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  float: right;
  font-size: 1rem;
  color: white;
  /* background-color: aqua; */
}
.right-sub {
  padding-right: 10px;
  width: 95%;
  /* background-color: aqua; */
}
.sub-label {
  width: 100%;
  text-align: right;
}
</style>