<template>
  <div class="aside-frame">
    34
    <!-- 图标 -->
      <div class="menu">
        <div v-for="item in menu" :key="item.title" class="menu-icon">
                <svg-icon :iconName="item.icon"></svg-icon>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
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
.aside-frame {
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