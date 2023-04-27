<template>
  <div class="header">
      <div class="logo">
        <img src="@/assets/img/logo.png" class="logo-img">
      </div>
      <div class="site-meta">
         <span class="logo-line-before">
            <i style="transform: translateX(100%)"></i>
         </span>
         <span>xxx</span>
         <span class="logo-line-after">
            <i style="transform: translateX(-100%)"></i>
         </span>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.header {
    width: 100%;
    height: 80px;
    display: flex;
    align-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(50px);
}
.logo-img {
    width: 50px;
    height: 50px;
    cursor: pointer;
}
.logo-img:hover {
/* 鼠标经过头像旋转360度 */
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -webkit-transform: rotateZ(360deg);
  -moz-transform: rotateZ(360deg);
  -ms-transform: rotateZ(360deg);
  -o-transform: rotateZ(360deg);
  transform: rotateZ(360deg);
}
.logo-line-before {
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 75%;
}
.logo-line-before i {
    position: relative;
    display: block;
    height: 2px;
    left: -100%;
    background: #000;
}
.logo-line-after {
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 75%;
}
.logo-line-after i {
    position: relative;
    display: block;
    height: 2px;
    right: -100%;
    background: #000;
}
</style>