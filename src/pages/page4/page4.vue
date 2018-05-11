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
    <!-- source-tree -->
    <div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <!-- 上传 -->
    <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :limit="3"
        :file-list="fileList"
        :auto-upload="false">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
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
