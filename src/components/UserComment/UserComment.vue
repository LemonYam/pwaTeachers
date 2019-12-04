<template>
  <div class="comment-container">
    <div class="comment-title">
      <img src="/img/coffee.png" class="title-img" />
      <div class="title-text">{{commentTitle}}</div>
    </div>
    <div v-for="(user, idx) in users" :key="idx" class="users">
      <img :src="user.userIcon" class="user-icon" />
      <div class="comment-detail">
        <div class="name-date">
          <span class="user-name">{{user.name}}</span>
          <span>{{user.date}}</span>
        </div>
        <div class="user-comment">{{user.comment}}</div>
      </div>
    </div>
    <form @submit="submit">
      <div class="comment-title">
        <img src="/img/comment.png" class="title-img" />
        <div class="title-text">{{publishComment}}</div>
      </div>
      <textarea v-model="comment" placeholder="请输入您的评论^_^" maxlength="200" class="comment-textarea"></textarea>
      <div class="submit-display">
        <div class="submit-tip">{{tip}}</div>
        <button class="submit-btn" type="submit">{{submitText}}</button>
      </div>
      <div v-if="comment">{{comment}}</div>
    </form>
  </div>
</template>

<script lang="ts" src="./UserComment.ts"></script>

<style scoped>
/* The container of comment */
.comment-container {
  padding: 5px;
  /* background-color: #3f9f94; */
}

.comment-title {
  display: flex;
  padding: 0px 0px 10px 0px;
}

.title-img {
  height: 35px;
  width: 35px;
  margin-left: 10px;
}

.title-text {
  display: flex;
  color: #3f9f94;
  align-items: flex-end;
  font-size: 19px;
  line-height: 30px;
  margin-left: 5px;

  /* background-color:aqua; */
}

/* uesrs' container */
.users {
  display: flex;
  margin-bottom: 8px;
  overflow: hidden;
  padding: 13px 0px 13px 10px;
  border-bottom: 1px dashed #f1f1f1;
  /* background-color: purple; */
}

/* users avatar */
.user-icon {
  width: 45px;
  height: 45px;
  margin-right: 8px;
  float: left;
  border-radius: 50%;
}

/* detail comment, including nickname, date and the contend of comment */
.comment-detail {
  width: 300px;
  float: left;
  padding: 5px;
  /* background-color: #6f6f6f; */
}

/* name and date */
.name-date {
  display: flex;
  font-size: 0.8rem;
  color: #8e8e8e;
}

/* name */
.user-name {
  display: flex;
  margin-right: 10px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #3f9f94;
  /* background-color: aqua; */
}

/* comment */
.user-comment {
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 1rem;
  color: #6f6f6f;
  /* background-color: blueviolet; */
}

.comment-textarea {
  width: 90%;
  height: 100px;
  resize: none;
  padding: 10px;
}

.submit-display {
  display: flex;
  margin: 5px 4%;
  padding: 5px;
  position: relative;
  /* background-color: #3cc51f; */
}
.submit-tip {
  float: right;
  font-size: 11px;
}
.submit-btn {
  position: absolute;
  right: 0px;
  background-color: #3cc51f;
  color: #fff;
  border: 0px;
  border-radius: 3px;
  /* padding: 5px; */
}
</style>