<template>
  <div class="filialeJudgeManageAdd">
        <!-- 标题 -->
        <div class="text-center">2018年集团考核分公司绩效方案</div>
        <div class="main-space"></div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="年度任务指标" name="first1">
                <el-table
                :data="tableData3"
                border
                style="width: 100%">
                    <el-table-column
                    v-for="item in yearTask"
                    :key="item.value"
                    :prop="item.value"
                    :label="item.name">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="金融产品" name="first2">
                <el-table
                :data="tableData3"
                border
                style="width: 100%">
                    <el-table-column
                    v-for="item in financeProduct"
                    :key="item.value"
                    :prop="item.value"
                    :label="item.name">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="银行分类" name="first3">
                <el-table
                :data="tableData3"
                border
                style="width: 100%">
                    <el-table-column
                    v-for="item in bankType"
                    :key="item.value"
                    :prop="item.value"
                    :label="item.name">
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <!-- 表格 -->
        
        <div class="text-center back-page">
            <el-button @click="backPage">返回</el-button>
        </div>
    </div>
</template>

<script>
import filialeTaskDetail from "./filialeTaskDetail";
export default {
  ...filialeTaskDetail
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
