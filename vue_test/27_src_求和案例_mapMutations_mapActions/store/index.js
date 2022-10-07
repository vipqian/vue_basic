/*
 * @Author: wangyunfei
 * @Date: 2022-10-06 22:05:06
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 00:15:59
 * @Description: 该文件用于vuex的核心store
 * @FilePath: /vue_test/src/store/index.js
 */

// 导入vuex
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备action --用于响应组件中的动作
const actions = {
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
}

// 准备mutations --用于操作数据
const mutations = {
    INCREMENT(state, value){
        state.sum += value
    },
    DECREMENT(state, value){
        state.sum -= value
    },
    
}

// 准备state --用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
}

// 准备getters --用于state中的数据加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

// 创建并且到处vuex
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
