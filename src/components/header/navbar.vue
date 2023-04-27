<template>
  <div class="header">
      <!-- logo -->
      <div class="logo">
        <img src="@/assets/img/logo.png" class="logo-img">
      </div>
      <!-- 名称 -->
      <div class="site-meta">
         <span class="logo-line-before">
            <i></i>
         </span>
         <span>xxx</span>
         <span class="logo-line-after">
            <i></i>
         </span>
      </div>
      <!-- 菜单 -->
      <div class="menu">
        <div v-for="item in menu" :key="item.title">
                <svg-icon :iconName="item.icon"></svg-icon>
                <span>{{ item.title }}</span>    
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const menu = reactive([
    {
        title: '首页',
        icon: 'icon-home'
    },
    {
        title: '归档',
        icon:'icon-guidang'
    },
    {
        title: '友情链接',
        icon:'icon-Link'
    },
    {
        title: '标签',
        icon:'icon-tag'
    },
    {
        title: '分类',
        icon:'icon-fenlei'
    },
    {
        title: '关于',
        icon:'icon-about'
    }
])
 
</script>

<style scoped>
.header {
    width: 100%;
    height: 80px;
    display: flex;
    align-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(50px);
}
.logo-img {
    width: 58px;
    height: 51px;
    transition: transform 1s ease-out;
    cursor: pointer;
}
.logo-img:hover {
    -webkit-transform: rotate(360deg);
}
.site-meta {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}
.logo-line-before,
.logo-line-after {
    display: block;
    overflow: hidden;
    margin: 0 auto;
    width: 75%;
}
.logo-line-before i {
    position: relative;
    display: block;
    width: 50px;
    height: 2px;
    background: #000;
    animation:mymoveleft 1s infinite;
}
.logo-line-after i {
    position: relative;
    display: block;
    width: 50px;
    height: 2px;
    background: #000;
    animation:mymoveright 1s infinite;
}
@keyframes mymoveleft
{
    from {
        opacity: 0;
        left: 100%;
    }
    to {
        opacity: 1;
        left: 0%;
    }
}
@keyframes mymoveright
{
    from {
        opacity: 0;
        right: 100%;
    }
    to {
        opacity: 1;
        right: 0%;
    }
}
.menu {
    display: flex;
    cursor: pointer;
}
.svg-icon {
    width: 15px;
    height: 15px;
    color: #000;
}

</style>