<template>
  <div class="file">
    <!-- 头部 -->
    <div class="fixed-header">
       <navbar></navbar>
    </div>
    <!-- 时间线 -->
    <div class="timeline">
        <el-timeline>
        <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :size="activity.size"
        :timestamp="activity.timestamp"
        >
        <el-card>
            {{ activity.content }}
        </el-card>
        </el-timeline-item>
    </el-timeline>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WindPower } from '@element-plus/icons-vue';

const activities = [
  {
    content: 'Update Github template',
    timestamp: '2018-04-12 20:06',
    size: 'large',
    type: 'primary',
    icon: WindPower,
  },
  {
    content: 'Custom icon',
    timestamp: '2018-05-12 10:46',
    size: 'large',
    type: 'primary',
    icon: WindPower,
  },
  {
    content: 'hello world',
    timestamp: '2018-07-13 17:96',
    size: 'large',
    type: 'primary',
    icon: WindPower,
  },
  {
    content: 'Custom icon hello world hello hello',
    timestamp: '2018-09-12 22:40',
    size: 'large',
    type: 'primary',
    icon: WindPower,
  },
]
</script>

<style scoped>
.file{
    display: flex;
    flex-direction: column;
    border: solid 8px #5d8966;
    border-radius: 30px;
    background-color: #fff7ea;
    backdrop-filter: blur(50px);
    transition: all 0.4s ease-in-out;
}
.timeline {
    width: 80%;
    margin: 40px auto;
}
</style>