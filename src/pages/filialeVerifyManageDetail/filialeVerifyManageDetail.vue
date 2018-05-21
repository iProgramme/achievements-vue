<template>
    <div class="filiale-judge-manage">
        <!-- 标题 -->
        <div class="text-center">2018年集团考核分公司绩效方案</div>
        <div v-if="flag">
            <ul class="clear child-float">
                <li>创建时间：2018-05-21</li>
                <li>创建人：索尔</li>
                <li>审批状态：退回</li>
                <li>退回原因：灭霸当我面，打了个响指</li>
            </ul>
        </div>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData"
        stripe border
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
            label="基础分值">
            </el-table-column>
            <el-table-column
            prop="status"
            label="指标公式">
            </el-table-column>
            <el-table-column
            prop="name4"
            label="考核办法">
            </el-table-column>
        </el-table>
        <!-- 审批 -->
        <div class="follow-table" v-if="!flag">
            <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
                <el-form-item label="审批结果" prop="methodName">
                    <el-radio v-model="radio" label="1">通过</el-radio>
                    <el-radio v-model="radio" label="2">退回</el-radio>
                </el-form-item>
                <el-form-item label="审批结果" prop="methodName">
                    <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入内容"
                    v-model="textarea3">
                    </el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="text-center back-page">
            <el-button @click="backPage">返回</el-button>
            <el-button v-if="!flag" type="primary" @click="submitTable()">提交</el-button>
        </div>
    </div>
</template>

<script>
import filialeVerifyManageDetail from "./filialeVerifyManageDetail.js";
export default {
  ...filialeVerifyManageDetail
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
