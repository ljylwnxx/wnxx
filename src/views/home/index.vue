<template>
    <div class="index-frame">
      <img src="@/assets/img/index-bg.jpg" class="index-img">
      <div class="index-title">
      </div>
      <div class="index-button">
        <el-icon class="pointer" size="25" color="#fff">
          <i-icon-Pointer />
        </el-icon>
      </div>
    </div>
  </template>
  

<script setup lang="ts">
</script>
  
<style scoped>
.index-img {
  width: 100vw;
  height: 100vh;
  position: relative;
  border: solid 3px #00151f;
  border-radius: 20px;
  background-color: #f4f5f7;
  transition: all 0.4s ease-in-out;
  z-index: -999;
}
.index-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}
</style>