import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        routerArray:[],
        // 当前nav
        routerName:{},
        // 已有的tab nav
        navTabs:[{title:'首页',name:'/dashboard',url:'/dashboard'}]
    },
    mutations:{
        setRouterName(state,obj){
            obj = obj || {}
            for (const key in obj) {
                if(typeof obj[key] == 'string'){
                    obj[key].replace('Detail','')
                }
            }
            state.routerName = obj;
            
            console.log(obj);
            
            let flag = state.navTabs.find(item=>item.url == obj.url)
            if(!flag){
                state.navTabs.push(obj)
            }
        },
        deleteRouterName(state,str){
            state.navTabs = state.navTabs.filter(item=>item.url!=str)
        }
    }
})

export default store