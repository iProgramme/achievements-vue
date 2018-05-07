<template>
  <div>
    这是page1 ++ {{msg}}
    <br>
    <br>
    <button @click="add">得到数据</button>
    <span class="iconfont icon-huabanfuben16"></span>
    <div>
        {{arr | filterJson}}
    </div>
  </div>
</template>

<script>
import Page1 from "./page1";
export default {
  ...Page1
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
