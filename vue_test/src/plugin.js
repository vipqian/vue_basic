/*
 * @Author: wangyunfei
 * @Date: 2022-09-19 21:43:42
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-19 22:31:00
 * @Description: file content
 * @FilePath: /vue_test/src/plugin.js
 */

export default  {
    install(Vue,x,y,z){
        console.log(x,y,z);
        console.log(Vue);
        // 全局过滤器
        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })
        // 全局指令
        Vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
                element.focus()
            },
        })
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 10,
                    y: 23
                }
            }
        })


        // 给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello= ()=> {alert('您好啊')}
    }
}