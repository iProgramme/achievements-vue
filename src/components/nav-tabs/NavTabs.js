export default {
    name: 'navTabs',
    data() {
        return {
            activeTab: '',
            editableTabs2: [{title:'首页',name:'/dashboard',url:'/dashboard'}],
            tabIndex: 0,
        }
    },
    methods: {
        // 点自己，跳转到对应的路由的页面
        jumpToTab() {
           this.$router.push({path:this.activeTab})
        },
        // 移除tab
        removeTab(targetName) {
            console.log(this.$store.state);
            let obj;
            let arr = this.$store.state.navTabs;
            // 判断是否为当前页
            if (targetName == this.activeTab) {
                let index = arr.findIndex(item=>item.url == targetName)
                obj = arr[index+1] || arr[index-1];
                setTimeout(() => {
                    this.activeTab = obj.url
                    this.$router.push({path:obj.url})
                }, 0);
            }else{
                this.$router.push({path:targetName})
            }
            this.$store.commit('deleteRouterName',targetName)
            
        }
        
    },
    watch:{
        
    },
    computed:{
        editableTabs(){
            this.activeTab = this.$store.state.routerName.url
            return this.$store.state.navTabs
        }
    }
}