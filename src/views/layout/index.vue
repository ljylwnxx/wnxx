<template>
  <div class="frame">
    <div class="main-container">
      <div class="fixed-header">
        <navbar></navbar>
      </div>
      <div class="aside">
        <aside></aside>
      </div>
      <div class="main">
        <main></main>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">

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
.aside {
  width: 400px;
  height: 100px;
}
.main {
  height: 100%;
}
.footer {
  height: 80px;
}
</style>