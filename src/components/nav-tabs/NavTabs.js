export default {
    name: 'navTabs',
    data() {
        return {
            activeTab: '',
            editableTabs2: [],
            tabIndex: 0
        }
    },
    props:['routerTabs','routerNavs'],
    methods: {
        // 跳转到对应的路由的页面
        jumpToTab(tab) {
            // console.log(this.routerNavs);
            
            // 判断标签栏是否已有标签
            if (this.judgeTab(tab)) {
                return
            }
            this.editableTabs2.push({
                title: this.routerTabs.name,
                url:this.routerTabs.url,
                name:this.routerTabs.url
            });
            document.title = this.routerTabs.name
            this.activeTab = this.routerTabs.url;
            this.$router.push({path:tab.url})
        },
        // 移除tab
        removeTab(targetName) {
            let tabs = this.editableTabs2;
            let activeName = this.activeTab;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            this.activeTab = activeName;
            this.$router.push({path:activeName})
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
        },
        // 判断tab栏是否已经有点击的那个导航，若有，返回true
        judgeTab(tab){
            let obj = this.editableTabs2.find((item)=>{
                if (item.url == tab.url || item.url == tab.name) {
                    // this.activeTab = tab.name
                    return true
                }else{
                    return false
                }
            })
            // console.log(obj);
            if(obj){
                // 标签切换
                this.activeTab = obj.name
                // 路由跳转
                this.$router.push({path:obj.url})
                return true
            }else{
                return false
            }
        }
    },
    watch:{
        routerTabs(newValue,oldValue){
            // console.log(newValue);
            document.title = this.routerTabs.name
            if (newValue.url != '/dashbord') {
                this.jumpToTab(newValue)
            }
        },
        routerNavs(newValue){
            var activeTab = newValue.find((item)=>{
                return item.url == this.$route.path
            })
            document.title = activeTab.name
            var obj = {
                title:activeTab.name,
                url:activeTab.url,
                name:activeTab.url
            }
            this.activeTab = obj.url
            this.editableTabs2 = [obj]
            // console.log(app);
        }
    }
}