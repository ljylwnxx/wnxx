<template>
  <div class="aside">
    <!-- 头像 -->
    <div class="block">
          <el-avatar :size="50" :src="circleUrl" />
    </div>
    <!-- 图标 -->
      <div class="menu">
        <div v-for="item in menu" :key="item.title" class="menu-icon">
            <svg-icon :iconName="item.icon"></svg-icon>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

const state = reactive({
  circleUrl: '@/assets/img/logo.png'
})
const { circleUrl} = toRefs(state)
const menu = reactive([
    {
        title: '介绍',
        icon: 'icon-renyuanjieshao'
    },
    {
        title: '目录',
        icon:'icon-mulu'
    }
])
</script>

<style scoped>
.aside {
    width: 400px;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    color: #000;
}
.menu {
    display: flex;
    align-items: center;
    cursor: pointer;
}
</style>