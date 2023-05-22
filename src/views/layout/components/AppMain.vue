<template>
  <div class="app-main">
    <div class="main">
        <div v-html="md" class="show"></div>
    </div>
    <Applist></Applist>
  </div>
</template>

<script setup lang="ts">
import test from '../../../pages/test.md'
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
</script>

<style scoped>
.app-main {
   
}

</style>

