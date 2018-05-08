export default {
    name: 'navTabs',
    data() {
        return {
            activeTab: '/page2',
            editableTabs2: [{
                title: 'Tab 1',
                name:'/page2',
                url:'/page2'
            }, {
                title: 'Tab 2',
                name:'/page3',
                url:'/page3'
            }],
            tabIndex: 2
        }
    },
    props:['routerTabs'],
    methods: {
        // 跳转到对应的路由的页面
        jumpToTab(tab) {
            // 判断标签栏是否已有标签
            if (this.judgeTab(tab)) {
                return
            }
            this.editableTabs2.push({
                title: this.routerTabs.name,
                url:this.routerTabs.url,
                name:this.routerTabs.url
            });
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
            console.log(obj);
            if(obj){
                // 标签切换
                this.activeTab = obj.name
                // 路由跳转
                this.$router.push({path:obj.url})
                return true
            }else{
                return false
            }
            
            // let tabs = this.editableTabs2;
            // for (let i = 0; i < tabs.length; i++) {
            //     if (tabs[i].title == this.routerTabs.name) {
            //         this.activeTab = tabs[i].title;
            //         // this.$router.push({path:tab.$attrs?tab.$attrs.url : null})
            //         return true
            //     }
            // }
        }
    },
    watch:{
        routerTabs(newValue,oldValue){
            // console.log(newValue);
            
            this.jumpToTab(newValue)
        }
    }
}