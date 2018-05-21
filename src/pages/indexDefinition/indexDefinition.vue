<template>
    <div class="filiale-judge-manage">
        <!-- 搜索 -->
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="指标名称" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入指标名称"></el-input>
            </el-form-item>
            <el-form-item label="定义" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入定义"></el-input>
            </el-form-item>
            <el-form-item label="统计方式" prop="judgeStatus">
                <el-select v-model="tableSearch.judge" placeholder="--请选择--">
                <el-option label="统计方式1" value="yishenhe"></el-option>
                <el-option label="统计方式2" value="weishenhe"></el-option>
                </el-select>
            </el-form-item>
            
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="submitForm('tableSearch')">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="dialogVisible = true">新增指标定义</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData"
        stripe border
        style="width: 100%">
            <el-table-column
            prop="name1"
            label="指标名称">
            </el-table-column>
            <el-table-column
            prop="name2"
            label="定义">
            </el-table-column>
            <el-table-column
            prop="name3"
            label="统计方式">
            </el-table-column>
            <el-table-column
            prop="status"
            label="使用状态">
            </el-table-column>
            
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text">启用</el-button>
                    <el-button type="text">停用</el-button>
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
        
        <!-- 弹窗 -->
        <el-dialog
            title="新增考核指标"
            :visible.sync="dialogVisible"
            width="30%" class="performance-dialog">
            <el-form :model="tableObject" status-icon ref="tableObject" label-width="100px" class="demo-ruleForm">
                <el-form-item label="指标名称" prop="name1">
                    <el-input v-model="tableObject.name1" placeholder="请输入考核维度"></el-input>
                </el-form-item>
                <el-form-item label="定义" prop="name2">
                    <el-input v-model="tableObject.name2" placeholder="请输入细项指标"></el-input>
                </el-form-item>
                <el-form-item label="统计方式" prop="name3">
                    <el-input v-model="tableObject.name3" placeholder="请输入基础分值"></el-input>
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
import indexDefinition from "./indexDefinition.js";
export default {
  ...indexDefinition
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
