<template>
  <div class="frame">
    <aside>aside</aside>
    <div class="main-container">
      <div class="fixed-header">
        <navbar>111</navbar>
      </div>
      <app-main>222</app-main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.frame{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: solid 10px #00151f;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(50px);
  transition: all 0.4s ease-in-out;
}
.aside {
  height: 80px;
}
.main {
  height: 100%;
}
.footer {
  height: 80px;
}
</style>