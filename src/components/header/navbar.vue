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
                <!-- <span>{{ item.title }}</span>     -->
                <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="Consistency" name="1">
                    <div>
                    {{ item.title }}
                    </div>
                </el-collapse-item>
                </el-collapse>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const activeName = ref('首页')
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
    align-items: center;
    cursor: pointer;
}
.menu-icon {
    display: flex;
    flex-direction: row;
    margin: 0 15px;
}
.svg-icon {
    width: 15px;
    height: 15px;
    color: #000;
}

</style>