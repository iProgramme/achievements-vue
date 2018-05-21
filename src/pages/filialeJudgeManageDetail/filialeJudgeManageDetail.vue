<template>
    <div class="filialeJudgeManageAdd">
        <!-- 标题 -->
        <div class="text-center">2018年集团考核分公司绩效方案</div>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData3"
        :span-method="objectSpanMethod"
        border
        style="width: 100%">
            <el-table-column
            prop="name1"
            label="考核维度">
            </el-table-column>
            <el-table-column
            prop="name2"
            label="细项指标">
            </el-table-column>
            <el-table-column
            prop="name3"
            label="基础分支（100）">
            </el-table-column>
            <el-table-column
            prop="name4"
            label="指标公式">
            </el-table-column>
            <el-table-column
            prop="name5"
            label="考核办法">
            </el-table-column>
        </el-table>
        <div class="text-center back-page">
            <el-button @click="backPage">返回</el-button>
        </div>
    </div>
</template>

<script>
import filialeJudgeManageDetail from "./filialeJudgeManageDetail.js";
export default {
  ...filialeJudgeManageDetail
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
