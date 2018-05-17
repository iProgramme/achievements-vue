<template>
<div>
    <el-tabs 
    v-model="activeTab" 
    type="card" 
    closable 
    @tab-remove="removeTab" 
    @tab-click="jumpToTab">
        <el-tab-pane 
        v-for="item in editableTabs" 
        :key="item.url" 
        :label="item.title" 
        :name="item.url">
        </el-tab-pane>
    </el-tabs>
</div>
</template>

<script>
import NavTabs from "./NavTabs";
export default {
    ...NavTabs
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(./nav-tabs.less);
</style>
