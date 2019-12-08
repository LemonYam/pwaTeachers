<template>
  <div class="grids">
    <div class="grids-cell" :style="{width: width}" v-for="(img, idx) in imgs" :key="idx">
      <router-link :to="img.destUrl" class="grids-link">
        <div class="grids-cell-icon">
          <img :src="img.url" mode="scaleToFill" />
        </div>
        <div class="grids-cell-label">{{img.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./Grid2.ts"></script>

<style scoped>
.grids {
  position: relative;
}

.grids-cell {
  position: relative;
  float: left;
  /* width: 25%; */
  margin-bottom: 5px;
}

.grids-link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grids-cell-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  text-align: center;
  margin-top: 5px;
  font-size: 0px;
  /* background-color: aqua; */
}

.grids-cell-icon img {
  width: 100%;
  height: 100%;
}

.grids-cell-label {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  position: absolute;
  bottom: 0px;
  width: 95%;
  text-align: center;
}
</style>