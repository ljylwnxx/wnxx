<template>
  <div class="app-main">
    <div class="item-list">
        <div class="item-box">
            <div class="item-box_imageContainer">

            </div>
            <div class="item-box_content">

            </div>
            <div class="item-box_footer">

            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app-main {
  /* width: 80%; */
  height: 600px;
  position: relative;
  left: 450px;
}
.item-list {
  position: relative;
  height: 100%;
  left: 200px;
  color: #000;
}
.item-box{
  position: relative;
  width: 600px;
  height: 270px;
  border-radius: 20px;
  box-shadow: 0 0 16px #ccc;
  background-color: #5d8966;
}
.item-box_imageContainer {
  width: 300px;
}
.item-box_content {
  width: 300px;
}
</style>

