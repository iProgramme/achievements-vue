export default {
    name: 'navTabs',
    data() {
        return {
            editableTabsValue2: '1',
            editableTabs2: [{
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content',
                url:''
            }, {
                title: 'Tab 2',
                name: '2',
                content: 'Tab 2 content',
                url:''
            }],
            tabIndex: 2,
        }
    },
    props:['routerTabs'], // 期望得到的父组件的值
    methods: {
        // 跳转到对应的路由的页面
        jumpToTab(tab) {
            // 判断标签栏是否已有标签
            if (this.judgeTab(tab)) {
                return
            }
            let newTabName = ++this.tabIndex + '';
            this.editableTabs2.push({
                title: this.routerTabs.name,
                name: newTabName,
                url:this.routerTabs.url
            });
            this.editableTabsValue2 = newTabName;
            this.$router.push({path:tab.url})
        },
        // 移除tab
        removeTab(targetName) {
            let tabs = this.editableTabs2;
            let activeName = this.editableTabsValue2;
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
            this.editableTabsValue2 = activeName;
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
        },
        // 判断tab栏是否已经有点击的那个导航，若有，返回true
        judgeTab(tab){
            if(!this.routerTabs){
                return true
            }
            let tabs = this.editableTabs2;
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].title == this.routerTabs.name) {
                    this.editableTabsValue2 = i+1+'';
                    this.$router.push({path:tab.$attrs?tab.$attrs.url : null})
                    return true
                }
            }
            return false
        }
    },
    watch:{
        // 函数名为监听的数据的名字
        // https://cn.vuejs.org/v2/guide/computed.html
        // 在这里不用计算属性的原因：需要在数据变化的时候执行其他操作
        routerTabs(newValue,oldValue){
            this.jumpToTab(newValue)
        }
    }
}