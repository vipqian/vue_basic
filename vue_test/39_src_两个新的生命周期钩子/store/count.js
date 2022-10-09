/*
 * @Author: wangyunfei
 * @Date: 2022-10-06 22:05:06
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 23:29:01
 * @Description: 该文件用于vuex的核心store
 * @FilePath: /vue_test/src/store/count.js
 */


export default {
    namespaced: true,
    actions: {
        increment(context, value){
            context.commit('INCREMENT', value)
        },
        decrement(context, value){
            context.commit('DECREMENT', value)
        },
        incrementOdd(context, value){
            if(context.state.sum % 2){
                context.commit('INCREMENT', value)
            }
        },
        incrementWait(context, value){
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 500);
        },
    },
    mutations: {
        INCREMENT(state, value){
            state.sum += value
        },
        DECREMENT(state, value){
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state){
            return state.sum*10
        }
    }
}
