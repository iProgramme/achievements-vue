import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    routerName:null
  },
  mutations:{
      newRouterName(state,obj){
          state.routerName = obj
      }
  }
})

export default store