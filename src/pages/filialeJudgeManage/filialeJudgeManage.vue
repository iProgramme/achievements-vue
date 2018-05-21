<template>
    <div class="filiale-judge-manage">
        <!-- 搜索 -->
        <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
            <el-form-item label="绩效方案名称" prop="methodName">
                <el-input v-model="formInline.methodName" placeholder="请输入绩效方案名称"></el-input>
            </el-form-item>
            <el-form-item label="审核状态" prop="judgeStatus">
                <el-select v-model="formInline.judge" placeholder="任务审核状态">
                <el-option label="已审核" value="yishenhe"></el-option>
                <el-option label="未审核" value="weishenhe"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="使用状态" prop="useStatus">
                <el-select v-model="formInline.region" placeholder="任务使用状态">
                <el-option label="已使用" value="yishiyong"></el-option>
                <el-option label="未使用" value="weishiyong"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="resetForm('formInline')">重置</el-button>
                <el-button type="primary" @click="submitForm('formInline')">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="routerToAdd">新增考核方案</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div>
    </div>
</template>

<script>
import filialeJudgeManage from "./filialeJudgeManage";
export default {
  ...filialeJudgeManage
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
