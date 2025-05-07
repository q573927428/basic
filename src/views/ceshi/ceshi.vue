<route lang="yaml">
  meta:
    title: 测试666
</route>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false)
const checked2 = ref(true)

const value1 = ref(0)
</script>

<template>
  <div>
    <FaPageMain>
      <el-checkbox v-model="checked1">
        Disabled
      </el-checkbox>
      <el-checkbox v-model="checked2">
        Not disabled
      </el-checkbox>
    </FaPageMain>
    <FaPageMain>
      <div class="demo-rate-block">
        <span class="demonstration">Default</span>
        <el-rate v-model="value1" />
      </div>
    </FaPageMain>
  </div>
</template>

<style scoped>
.demo-rate-block {
  box-sizing: border-box;
  display: inline-block;
  width: 49%;
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
}

.demo-rate-block:last-child {
  border-right: none;
}

.demo-rate-block .demonstration {
  display: block;
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
