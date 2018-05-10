<template>
  <div>
    这是page4 ++ {{msg}}
    <br>
    <br>
    <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
        v-model="value"
        type="date"
        placeholder="选择日期">
        </el-date-picker>
    </div>
    <br>
    <br>
    <button @click="add">得到数据</button>
    <el-button type="primary" @click="add">主要按钮</el-button>
    <table>
      <tr>
        <th>id</th>
        <th>flag</th>
        <th>数量</th>
      </tr>
      <tr v-for="item in filters" :key="item.app">
        <td>{{item.app}}</td>
        <td>{{item.flag | filterString}}</td>
        <td>{{item.number}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Page4 from "./page4";
export default {
  ...Page4
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
