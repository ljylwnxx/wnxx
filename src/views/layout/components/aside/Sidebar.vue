<template>
  <div class="aside-frame">
    <!-- 头像 -->
    <div class="block">
          <el-avatar :size="50" :src="circleUrl" />
    </div>
    <!-- 图标 -->
      <div class="menu">
        <div v-for="item in menu" :key="item.title" class="menu-icon">
            <svg-icon :iconName="item.icon" class="icon" @click="handlegoto">
              
            </svg-icon>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import circleUrl from '@/assets/img/logo.png'
import { useRouter } from 'vue-router'
const router = useRouter()

const handlegoto = () => {
  router.push({
    path: '/index'
  })
}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.menu {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.menu-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid #5d8966;
  border-radius: 50%;
  margin: 0 1rem;
  
}
.icon {
  width: 20px;
  height: 20px;
  color: #5d8966;
  transition: all 0.4s ease-in-out;
}
.menu-icon.active {
  background-color: #5d8966;
}
</style>