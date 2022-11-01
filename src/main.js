/*
 * @Author: Sunny
 * @Date: 2022-10-11 21:42:24
 * @LastEditors: Suuny
 * @LastEditTime: 2022-10-12 22:19:11
 * @Description: 
 * @FilePath: /vue-visual-editor/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'

import 'element-plus/dist/index.css'

createApp(App).mount('#app')


// 1. 首先我们先自己构造一些假数据 能实现根据位置渲染内容
// 2. 配置组件对应的映射关系 {preview: xxx, render: xxxx}