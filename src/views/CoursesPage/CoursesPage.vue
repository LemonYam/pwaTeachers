<template>
  <div id="top-box">
    <div id="top-scroll">
      <div class="title">{{title}}</div>
      <CoursesList :courses="courses" :state="state" />
      <CoursesList :courses="courses" :state="state" />
      <CoursesList :courses="courses" :state="state" />
      <div class="code-box">
        <img :src="qrCode" class="qr-code" />
      </div>
    </div>
    <BottomText text="华南师范大学" />
  </div>
</template>

<script lang="ts" src="./CoursesPage.ts"></script>

<style scoped>
/* The course page's title */
.title {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin: 20rpx;
}

/* contain the QR code */
.code-box {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blueviolet; */
}

/* QR code */
.qr-code {
  /* the final width is 50% and you don't have to assign the height */
  width: 150px;
  height: 150px;
}
</style>