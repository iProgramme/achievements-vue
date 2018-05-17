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
            let url = this.$route.path
            console.log(url);
            
            setTimeout(()=>{
                this.routerNavslist = [
                    {name:'/dashboard',url:'/dashboard',title:'首页'},
                    {name:'/filialeTask',url:'/filialeTask',title:'分公司任务管理'},
                    {name:'/filialeTaskDetail',url:'/filialeTaskDetail',title:'分公司任务管理',flag:true},
                    {name:'/page1',url:'/page1',title:'页面1'},
                    {name:'/page3',url:'/page3',title:'页面3'},
                    {name:'/page4',url:'/page4',title:'页面4'}
                ]
                let activePage = this.routerNavslist.find(item=>item.url == url)
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