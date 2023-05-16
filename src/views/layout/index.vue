<template>
  <div class="frame">
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
      </div>
      <div class="banner">
        <banner></banner>
      </div>
      <div class="aside">
        <Sidebar></Sidebar>
      </div>
      <div class="main">
        <app-main></app-main>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import Sidebar from './components/aside/Sidebar.vue'
import Footer from './components/bottom/Footer.vue'
</script>

<style scoped>
.frame{
  display: flex;
  flex-direction: column;
  border: solid 8px #5d8966;
  border-radius: 30px;
  background-color: #fff7ea;
  backdrop-filter: blur(50px);
  transition: all 0.4s ease-in-out;
}
.main-container {
  position: relative;
}
.aside {
  width: 300px;
  height: 550px;
  position: absolute;
  left: 150px;
  top: 130px;
  border: solid 5px #5d8966;
  border-radius: 15px;
  background-color: #fff7ea;
}
.main {
  overflow: auto;
  
}
.footer {
  height: 80px;
}
</style>