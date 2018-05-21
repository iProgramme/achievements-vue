<template>
    <div class="nav-menu">
        <el-menu 
        :default-active="defaultActiveNow" 
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        :collapse="isCollapse" 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu v-for="item in routerNavslist" :key="item.url" :index="item.name">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item :index="list.url" v-for="list in item.children" :key="list.url" @click="add(list)">
                    <i class="el-icon-location"></i>
                    <span>{{list.title}}</span>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import NavMenu from "./NavMenu";
export default {
  ...NavMenu
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(./nav-menu.less);
</style>
