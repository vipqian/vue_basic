/*
 * @Author: wangyunfei
 * @Date: 2022-10-06 22:05:06
 * @LastEditors: wangyunfei
 * @LastEditTime: 2022-10-07 23:42:50
 * @Description: 该文件用于vuex的核心store
 * @FilePath: /vue_test/src/store/Person.js
 */
import axios from "axios";
import { nanoid } from "nanoid";
export default  {
    namespaced: true,
    actions: {
        addPerson(context, value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON', value)
            }else{
                console.log('不是以王开头的名字', value);
            }
        },
        addPersonServer(context){
            let url = 'https://api.uixsj.cn/hitokoto/get?type=social'
            axios.get(url).then(
                response => {
                    let person = {
                        id: nanoid(),
                        name: response.data,
                        age: 18,
                        sex: '男'
                    }
                    context.commit('ADD_PERSON', person)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value){
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [
            // {id: '1', name: 'li', age: 18, sex: '男'}
        ]
    },
    getters: {
        firstPersonName(state){
            if (state.persons.length){
                return state.persons[0].name
            }
            else{
                return '没有Person'
            }
        }
    }
}
