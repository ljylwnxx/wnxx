<template>
  <div class="introduce-frame">
    <!-- 头像 -->
    <div class="block">
         <el-avatar :size="50" :src="circleUrl" />
    </div>
    <!-- 名称 -->
    <span>xxxx</span>
  </div>
</template>

<script setup lang="ts">
import circleUrl from '@/assets/img/logo.png'
</script>

<style scoped>
.introduce-frame {
    display: flex;
    flex-direction: column;
}
</style>