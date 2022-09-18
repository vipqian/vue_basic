/*
 * @Author: wangyunfei
 * @Date: 2022-09-18 10:54:32
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-09-18 11:01:42
 * @Description: file content
 * @FilePath: /vue_test/src/mixin.js
 */
export const hunhe = {
    methods: {
        showName(){
          alert(this.name)
        }
      },
    mounted() {
        console.log('hello')
    }
}
export const hunhe2 = {
    data() {
        return {
            x: 10,
            y: 23
        }
    }
}