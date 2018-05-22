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
        navTabs:[{title:'首页',name:'/dashboard',url:'/dashboard'}],

        // filialeJudgeManageAdd数据
        tree:[],
        arr:[]
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
        },
        // 将filialeJudgeManageAdd数据转为树的形式
        toTree(state,arr){
            let arr1 = [];
            let obj = {}
            arr.forEach((item)=>{
                if(item.span!=0){
                    obj = {
                        name1:'123',
                        children:[item]
                    }
                    arr1.push(obj)
                }else{
                    arr1[arr1.length-1].children.push(item)
                }
            })
            state.tree = arr1
            console.log(arr1);
        },
        // 将filialeJudgeManageAdd数据转为数组的形式
        toArray(state,tree){
            var arr = []
            for(let i = 0;i<tree.length;i++){
                let children = tree[i].children
                if(children.length == 0){
                    arr.push(children[0])
                }else{
                    arr.push(children[0])
                    for(let j = 1;j<children.length;j++){
                        children.span=children.length
                        arr.push(children[j])
                    }
                }
            };
            console.log(arr);
            
        }
    }
})

export default store