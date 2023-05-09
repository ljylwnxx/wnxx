<template>
  <div class="frame">
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
      </div>
      <div class="aside">
        <Sidebar></Sidebar>
      </div>
      <div class="main">
        <app-main></app-main>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/appMain.vue'
import Sidebar from './components/aside/Sidebar.vue'
</script>

<style scoped>
.frame{
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: solid 10px #00151f;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(50px);
  transition: all 0.4s ease-in-out;
}
.main-container {
  height: 100vh;
  position: relative;
}
.aside {
  width: 300px;
  height: 500px;
  position: absolute;
  left: 150px;
  border: solid 5px #00151f;
  border-radius: 10px;
}
.main {
  height: 100%;
}
.footer {
  height: 80px;
}
</style>