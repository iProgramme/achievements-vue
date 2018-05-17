<template>
  <el-container class="clear page-content">
    <!-- 导航 -->
    <el-aside>
        <div class="border-right" style="background:grey;color:yellow">logo</div>
        <nav-menu v-on:routerName="RouterName" :router-navs="routerNavslist"></nav-menu>
    </el-aside>
    <el-container>
        <!-- header -->        
        <el-header>
            <div class="headers clear">
                <h1 class="fl">绩效考核管理系统</h1>
                <div class="fr">
                    <ul class="header-person">
                        <li><span>你好，xxx</span></li>
                        <li><a href="javascript:;"><i class="el-icon-location"></i>修改密码</a></li>
                        <li><a href="javascript:;"><i class="el-icon-location"></i>退出</a></li>
                    </ul>
                </div>
            </div>
        </el-header>
        <!-- tabs -->
        <nav-tabs :router-tabs="routerName" :router-navs="routerNavslist"></nav-tabs>
        <!-- 路由 -->
        <el-main>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </el-main>
    </el-container>

    
  </el-container>
</template>

<script>
import header from '../components/header/header.vue'
import navMenu from '../components/nav-menu/nav-menu.vue'
import navTabs from '../components/nav-tabs/nav-tabs.vue'
import { setTimeout } from 'timers';
export default {
    name: "pages",
    components: {
        "my-header": header,
        "nav-menu":navMenu,
        "nav-tabs":navTabs
    },
    data:function(){
        return {
        routerName:'',
        routerNavslist:[]
        }
    },
    props:{
        routerTabs:String,
        routerNavs:Array
    },
    methods:{
        RouterName(data){
            this.routerName = data.message
        },
        getNavs(){
            // this.$http.get('/navs').then((data)=>{
                
            // })
            setTimeout(()=>{
                this.routerNavslist = [
                    {name:'首页',url:'/dashboard'},
                    {name:'分公司任务管理',url:'/filialeTask'},
                    {name:'页面1',url:'/page1'},
                    {name:'页面3',url:'/page3'},
                    {name:'页面4',url:'/page4'}
                ]
            },100)
        }
    },
    created:function(){
        this.getNavs()
        
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content{
    height: 100%;
    overflow: auto;
}
header{
    border-bottom:1px solid #bebebe
}
.header-person li{
    float:left;
    padding:0 10px
}
</style>
