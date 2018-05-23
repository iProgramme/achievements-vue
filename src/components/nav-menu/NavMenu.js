export default {
    name: 'navMenu',
    data:function() {
        return {
            routerNavslist:[],
            routerName: {},
            isCollapse:false,
            defaultActiveNow:''
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        add(routerName){
            this.routerName = routerName
            this.$router.push({path:routerName.url})
            this.$store.commit('setRouterName',routerName)            
        },
        getData(){
            let url = this.$route.path.replace('Detail','').replace('Add','').replace('Judge','')
            console.log(url);
            
            setTimeout(()=>{
                this.routerNavslist = [
                    {
                        name:'一级菜单1',
                        children:[
                            {name:'/dashboard',url:'/dashboard',title:'首页'},
                            {name:'/filialeTask',url:'/filialeTask',title:'分公司任务管理'},
                            {name:'/page1',url:'/page1',title:'页面1'},
                            {name:'/page3',url:'/page3',title:'页面3'},
                        ]
                    },
                    {
                        name:'考核任务管理',
                        children:[
                            
                            {name:'/filialeTask',url:'/filialeTask',title:'分公司任务管理'}
                        ]
                    },
                    {
                        name:'考核方案配置',
                        children:[
                            {name:'/page4',url:'/page4',title:'页面4'},
                            {name:'/indexDefinition',url:'/indexDefinition',title:'指标定义维护'},
                            {name:'/indexExpression',url:'/indexExpression',title:'指标公式维护'},
                            {name:'/judgeMethod',url:'/judgeMethod',title:'考核办法维护'},
                            {name:'/judgeDimension',url:'/judgeDimension',title:'考核维度维护'},
                            {name:'/judgeDetail',url:'/judgeDetail',title:'考核细项维护'},
                            {name:'/filialeJudgeManage',url:'/filialeJudgeManage',title:'分公司考核方案管理'},
                            {name:'/judgeManageFiliale',url:'/judgeManageFiliale',title:'分公司考核管理'}
                        ]
                    },
                    {
                        name:'考核方案审核',
                        children:[
                            {name:'/filialeVerifyManage',url:'/filialeVerifyManage',title:'分公司考核方案管理'},
                            // {name:'/filialeVerifyManageDetail',url:'/filialeVerifyManageDetail',title:'分公司考核方案-审核'},
                        ]
                    },
                    
                    
                ]
                let activePage = {}
                this.routerNavslist.find((item)=>{
                    activePage = item.children.find(list=>list.url == url)
                    if(activePage){
                        return true
                    }
                })
                setTimeout(() => {
                    this.defaultActiveNow = activePage.url 
                }, 0);
                console.log(activePage);
                this.$store.commit('setRouterName',activePage)
                // this.$store.commit('sendRouters',this.routerNavslist)
            },100)
        }
    },
    created(){
        this.getData()
    }
}