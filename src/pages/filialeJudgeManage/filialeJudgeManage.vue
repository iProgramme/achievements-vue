<template>
    <div class="filiale-judge-manage">
        <!-- 搜索 -->
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="绩效方案名称" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入绩效方案名称"></el-input>
            </el-form-item>
            <el-form-item label="审核状态" prop="judgeStatus">
                <el-select v-model="tableSearch.judge" placeholder="任务审核状态">
                <el-option label="已审核" value="yishenhe"></el-option>
                <el-option label="未审核" value="weishenhe"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="使用状态" prop="useStatus">
                <el-select v-model="tableSearch.region" placeholder="任务使用状态">
                <el-option label="已使用" value="yishiyong"></el-option>
                <el-option label="未使用" value="weishiyong"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="submitForm('tableSearch')">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="routerToAdd">新增考核方案</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData"
        stripe border
        style="width: 100%">
            <el-table-column
            prop="orderNumber"
            label="序号">
            </el-table-column>
            <el-table-column
            prop="methodName"
            label="绩效方案名称">
            </el-table-column>
            <el-table-column
            prop="people"
            label="创建人">
            </el-table-column>
            <el-table-column
            prop="startTime"
            label="创建时间">
            </el-table-column>
            <el-table-column
            prop="status"
            label="审核状态">
            </el-table-column>
            <el-table-column
            prop="status2"
            label="使用状态">
            </el-table-column>
            
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="routerToDetail(scope.row)">查看详情</el-button>
                    <el-button type="text">删除</el-button>
                    <el-button type="text">分发</el-button>
                </template>
                
            </el-table-column>
        </el-table>
        <div class="main-space"></div>    
        <!-- 分页 -->
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="1400">
        </el-pagination>
    </div>
</template>

<script>
import filialeJudgeManage from "./filialeJudgeManage.js";
export default {
  ...filialeJudgeManage
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
