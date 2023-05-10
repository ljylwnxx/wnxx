<template>
  <div class="banner-frame">
    <img src="@/assets/img/banner.jpg" class="banner-img">
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.banner-img {
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    /* border: solid 5px #5d8966; */
    border-radius: 0px 0px 20px 20px;
    background-color: #fff7ea;
    backdrop-filter: blur(50px);
    transition: all 0.4s ease-in-out;
}
</style>