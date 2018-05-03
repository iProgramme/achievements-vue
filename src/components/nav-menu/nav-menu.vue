<template>
    <div class="nav-menu">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        </el-menu>
        <el-menu default-active="1-4" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
            <el-menu-item index="1-1" @click="add({name:'页面1',url:'/page1'})">
                <span>Go to页面1</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="add({name:'页面2',url:'/page4'})">
                <span>Go to页面2</span>
            </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
            <el-menu-item index="1-4">选项1</el-menu-item>
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
