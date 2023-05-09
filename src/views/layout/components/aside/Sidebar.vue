<template>
  <div class="aside-frame">
    <!-- 图标 -->
    <div class="menu">
      <div v-for="(item,index) in menu" :key="index" class="menu-icon" @click="change(index)">
          <svg-icon :iconName="item.icon" class="icon">
          </svg-icon>
      </div>
    </div>
    <keep-alive>
        <component :is="componentName.com"></component>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import introduce from './introduce.vue'
import catalog from './catalog.vue'
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
const list = reactive([
  {
    name: '介绍', com: markRaw(introduce)
  },
  {
    name: '目录', com: markRaw(catalog)
  }
])
const componentName = reactive({
  com: list[0].com
})
const change = (index) => {
  componentName.com = list[index].com
}
</script>

<style scoped>
.aside-frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    
}
.menu {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 50px;
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