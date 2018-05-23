<template>
    <div class="filialeJudgeManageAdd">
        <!-- 搜索 -->
        <el-form :inline="true" :model="tableDetail" ref="tableDetail" class="demo-form-inline">
            <el-form-item label="绩效方案名称" prop="methodName">
                <el-input v-model="tableDetail.methodName" placeholder="请输入绩效方案名称"></el-input>
            </el-form-item>
            <el-form-item prop="extendScore">
                <el-checkbox v-model="tableDetail.extendScore">允许评分超过基础分支</el-checkbox>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="addProject()">新增</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData4"
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
                <template slot-scope="scope">
                    <el-input v-model="scope.row.name2" placeholder="请输入内容"></el-input>
                </template>
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
            <el-table-column label="操作">
            <template slot-scope="scope">
                <!-- <el-button
                size="mini"
                @click="addRow(scope.$index, scope.row)">添加行</el-button> -->
                <el-button
                size="mini"
                @click="deleteRow(scope.$index, scope.row)">删除行</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div class="text-center back-page">
            <el-button @click="backPage">返回</el-button>
            <el-button type="primary" @click="submitTable()">提交</el-button>
        </div>

        <!-- 弹窗 -->
        <el-dialog
            title="新增考核指标"
            :visible.sync="dialogVisible"
            width="35%" class="performance-dialog">
            <el-form :model="tableObject" status-icon ref="tableObject" label-width="100px" class="demo-ruleForm">
                <el-form-item label="考核维度" prop="name1">
                    <el-input v-model="tableObject.name1" placeholder="请输入考核维度"></el-input>
                </el-form-item>
                <el-form-item label="细项指标" prop="name2">
                    <el-input v-model="tableObject.name2" placeholder="请输入细项指标"></el-input>
                </el-form-item>
                <el-form-item label="基础分值" prop="name3">
                    <el-input v-model="tableObject.name3" placeholder="请输入基础分值"></el-input>
                </el-form-item>
                <el-form-item label="指标公式" prop="name4">
                    <el-input v-model="tableObject.name4" placeholder="请输入指标公式"></el-input>
                </el-form-item>
                <el-form-item label="考核办法" prop="name5">
                    <el-input v-model="tableObject.name5" placeholder="请输入考核办法"></el-input>
                </el-form-item>
                
                <el-form-item>
                    <el-button type="primary" @click="submitForm('tableObject')">确认</el-button>
                    <!-- <el-button @click="resetForm('tableObject')">重置</el-button> -->
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import filialeJudgeManageAdd from "./filialeJudgeManageAdd.js";
export default {
  ...filialeJudgeManageAdd
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
