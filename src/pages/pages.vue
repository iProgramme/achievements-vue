<template>
  <div class="clear page-content">
    <!-- 导航 -->
    <nav-menu class="fl" v-on:routerName="RouterName"></nav-menu>
    <!-- header -->
    <div class="over-hidden">
      <my-header></my-header>      
      <!-- tabs -->
      <nav-tabs :router-tabs="routerName"></nav-tabs>
      <!-- 路由 -->
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    
  </div>
</template>

<script>
import header from '../components/header/header.vue'
import navMenu from '../components/nav-menu/nav-menu.vue'
import navTabs from '../components/nav-tabs/nav-tabs.vue'
export default {
  name: "pages",
  components: {
    "my-header": header,
    "nav-menu":navMenu,
    "nav-tabs":navTabs
  },
  data:function(){
    return {
      routerName:''
    }
  },
  props:{
    routerTabs:String
  },
  methods:{
    RouterName:function(data){
      this.routerName = data.message
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content{
  height: 100%;
  overflow: auto;
}
</style>
