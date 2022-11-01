<!--
 * @Author: Sunny
 * @Date: 2022-10-11 21:42:24
 * @LastEditors: Suuny
 * @LastEditTime: 2022-10-28 15:32:59
 * @Description: 
 * @FilePath: /vue-visual-editor/src/App.vue
-->
<template>
  <div class="app">
    <Editor  v-model="state"/>
  </div>
</template>

<script>

import { ref, provide } from 'vue' // 引入响应式
import data from './data.json'
import Editor from './packages/editor'
import {   registerConfig as config } from './utils/editor-config'


export default {
  components: { 
    Editor
  },
  setup() {
    const state = ref(data)
    provide('config', config) // 将组件的配置直接传入
    return {
      state
    }
  }
}
</script>

<style>
.app {
  position: fixed;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
}
</style>
