<template>
  <div class="introduce-frame">
    <!-- 头像 -->
    <div class="block">
         <el-avatar :size="100" :src="circleUrl" />
    </div>
    <!-- 名称 -->
    <span>xxxx</span>
    <!-- 打印机 -->
    <!-- 分割虚线 -->
    <el-divider border-style="dashed" />
    <!-- 社交图标 -->
    <div class="social">
         <div v-for="(item,index) in menu" :key="index" class="social-icon">
              <SvgIcon :icon-name="item.icon" class-name="social-svgicon">
              </SvgIcon>
         </div>
    </div>
    <!-- 分割虚线 -->
    <el-divider border-style="dashed" />
    <!-- 网站相关介绍 -->
    <div class="website-introduce">
     <span>介绍:</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import circleUrl from '@/assets/img/logo.png'

const menu = reactive([
    {
        name: 'github',
        icon: 'icon-github1'
    },
    {
        name: 'gitee',
        icon: 'icon-gitee'
    }
])
</script>

<style scoped>
.introduce-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.social{
    display: flex;
}
.social-svgicon {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    cursor: pointer;
}
</style>