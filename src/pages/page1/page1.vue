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
    <br>
    <div>
        <el-button
          size="mini"
          @click="addProject()">添加项</el-button>
    </div>
    <el-table
        :data="tableData4"
        :span-method="objectSpanMethod"
        style="width: 100%">
        <el-table-column
        prop="date"
        label="日期"
        width="150">
        </el-table-column>
        <el-table-column label="操作" width="300">
        <template slot-scope="scope">
            <!-- <el-button
            size="mini"
            @click="addRow(scope.$index, scope.row)">添加行</el-button> -->
            <el-button
            size="mini"
            @click="deleteRow(scope.$index, scope.row)">删除行</el-button>
        </template>
        </el-table-column>
        <el-table-column label="配送信息">
        <el-table-column
            prop="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column label="地址">
            <el-table-column
            prop="province"
            label="省份"
            width="120">
            </el-table-column>
            <el-table-column
            prop="city"
            label="市区"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            width="300">
            </el-table-column>
            <el-table-column
            prop="zip"
            label="邮编"
            width="120">
            </el-table-column>
        </el-table-column>
        </el-table-column>
    </el-table>

  <!-- 弹窗 -->
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%" class="performance-dialog">
        <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="日期" prop="pass">
                <el-input type="text" v-model="ruleForm2.pass"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="text" v-model="ruleForm2.checkPass"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
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
