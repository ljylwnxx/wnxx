<template>
  <div class="header">
      <div class="header-left"> 
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
      </div>
      <!-- 菜单 -->
      <div class="menu">
        <div v-for="item in menu" :key="item.title" class="menu-icon">
                <svg-icon :iconName="item.icon"></svg-icon>
                <span class="menu-title" @click="handlegoto">{{ item.title }}</span>    
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
        icon:'icon-guidang',
        path: '/guidang'
    },
    {
        title: '友情链接',
        icon:'icon-link1'
    },
    {
        title: '标签',
        icon:'icon-tag1'
    },
    {
        title: '分类',
        icon:'icon-fenlei'
    },
    {
        title: '关于',
        icon:'icon-l-about'
    }
])
 
import { useRouter } from 'vue-router'

const router = useRouter()
const handlegoto = () => {
  router.push({
    path: ''
  })
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 80px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px 20px 0 0;
    background-color: #fbfae8;
    backdrop-filter: blur(50px);
}
.header-left {
    display: flex;
    align-items: center;
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
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.menu .menu-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  margin: 0 10px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0px 10px 10px rgba(0,0,0,0.1);
  transition: all 0.3s ease-out;
}
.menu .menu-icon:hover{
    float: left;
    width: 140px;
}
.menu .menu-icon .svg-icon {
  height: 20px;
  width: 20px;
  border-radius: 50px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
}
.menu .menu-icon:hover span {
  display: block;
  font-size: 16px;
  transition: all 0.3s ease-out;
}
.menu .menu-icon span {
   display: none;
}
.menu .menu-icon:nth-child(n):hover .svg-icon{
  background: #fbfae8;
}

</style>