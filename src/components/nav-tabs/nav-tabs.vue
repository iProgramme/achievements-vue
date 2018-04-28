<template>
<div>
  <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" @tab-click="jumpToTab">
    <el-tab-pane v-for="item in editableTabs2" :key="item.name" :label="item.title" :name="item.name" :url="item.url">
      
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import NavTabs from "./nav-tabs";
export default {
  ...NavTabs
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url(./nav-tabs.less);
</style>
