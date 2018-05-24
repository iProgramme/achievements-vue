<template>
    <div class="filiale-judge-manage">
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="指标名称：" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入指标名称"></el-input>
            </el-form-item>
            <el-form-item label="发起人：" prop="methodPersion">
                <el-input v-model="tableSearch.methodPersion" placeholder="请输入发起人"></el-input>
            </el-form-item>
            <el-form-item label="考核状态：" prop="judgeStatus">
                <el-select v-model="tableSearch.judgeStatus" placeholder="--请选择--">
                    <el-option label="考核状态1" value="1"></el-option>
                    <el-option label="考核状态2" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="submitForm('tableSearch')">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="outerVisible.flag = true">发起新考核</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div> 
        <!-- 表格 -->
        <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column prop="index" label="序号"></el-table-column>
            <el-table-column prop="name1 " label="绩效考核名称"></el-table-column>  
            <el-table-column prop="name2" label="考核方案名称"></el-table-column>
            <el-table-column prop="date" label="考核起止时间"></el-table-column>
            <el-table-column prop="name3" label="考核发起人"></el-table-column>
            <el-table-column prop="count " label="考核数量"></el-table-column>
            <el-table-column prop="status" label="考核状态"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text">
                        <router-link :to="{path:'/judgeDetailFilialeDetail',query:{id:scope.row.beginTime}}">查看详情</router-link>
                    </el-button>
                    <el-button type="text" @click="open4">归档</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="main-space"></div>    
        <!-- 分页 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next, jumper" :total="140">
        </el-pagination>
        
        <!-- 弹窗 -->
        <examiner :obj="outerVisible"></examiner>
    </div>
</template>

<script>
import judgeManageFiliale from "./judgeManageFiliale";
export default judgeManageFiliale
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
