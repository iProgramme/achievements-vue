<template>
  <div>
    这是page3 ++ {{msg}}
    <br>
    <br>
    <button @click="add">得到数据</button>
    <table>
      <tr>
        <th>id</th>
        <th>flag</th>
      </tr>
      <tr v-for="item in arr" :key="item.app">
        <td>{{item.app}}</td>
        <td>{{item.flag}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Page3 from "./page3";
export default {
  ...Page3
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
