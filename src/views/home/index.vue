<template>
  <div class="home-frame">
      <img src="@/assets/img/index-bg.jpg" class="home-img">
      <div class="home-title">
        <span>👏</span>
      </div>
      <div class="home-button" @click="goto">
        <el-icon class="pointer" size="30" color="#fff" >
          <i-icon-Pointer />
        </el-icon>
      </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goto = () => {
  router.push({
    path: '/index'
  })
}
</script>

<style scoped>
.home-frame {
  overflow: auto;
}
.home-img {
    width: 100%;
    height: 100vh;
    position: relative;
    border: solid 3px #5d8966;
    border-radius: 20px;
    background-color: #fff7ea;
    background-size: cover;
    transition: all 0.4s ease-in-out;
    z-index: -9;
}
.home-title span {
    color: #fff;
    font-size: 40px;
    position: absolute;
    top: 500px ;
    left: 450px;
}
.home-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    cursor: pointer;
}
</style>