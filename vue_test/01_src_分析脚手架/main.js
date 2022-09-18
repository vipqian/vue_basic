/*
 * @Author: wangyunfei
 * @Date: 2022-09-17 19:56:04
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-17 22:00:57
 * @Description: 该文件是整个项目的入口
 * @FilePath: /vue_basic/vue_test/src/main.js
 */

// 引入vue
import Vue from 'vue'
// 引入app组件，他是所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建vue实例 vm


let a = 12
/*
  关于不同版本的vue
    1、vue.js 与 vue.runtime.xxx.js的区别:
      vue.js是完整版的vue，包括 核心功能+模板解析器
      vue.runtime.xxx.js 是vue精简版的，只包括了核心功能，没有模板解析器

    2、因为vue.runtime.xxx.js是没有模板解析器的，所以不能使用template配置项，需要使用render接收到的createElement去指定具体内容
*/
new Vue({
  // 下面这个代码一会进行解释，完成了价格app组件注放入到容器中
  render: h => h(App),
}).$mount('#app')
