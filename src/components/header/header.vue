<template>
  <div class="headers">
    这是顶部条
    <span>这是span {{msg}}</span>
  </div>
</template>

<script>
import header from "./header";
export default {
  ...header
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url(./header.less);
</style>
