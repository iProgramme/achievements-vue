<template>
    <div class="filiale-judge-manage">
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="考核方案名称：" prop="assessment_name">
                <el-input v-model="tableSearch.assessment_name" placeholder="请输入考核方案名称"></el-input>
            </el-form-item>
            <el-form-item label="考核发起人：" prop="creator_user_name">
                <el-input v-model="tableSearch.creator_user_name" placeholder="请输入考核发起人："></el-input>
            </el-form-item>
            <el-form-item label="考核状态：" prop="assessment_statue">
                <el-select v-model="tableSearch.assessment_statue" placeholder="--请选择--">
                    <el-option label="考核中" value="1"></el-option>
                    <el-option label="待归档" value="0"></el-option>
                    <el-option label="已归档" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="searchForm('tableSearch')">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="outerVisible.flag = true">发起新考核</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div> 
        <!-- 表格 -->
        <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column v-for="item in tableThead" :key="item.id" :prop="item.value" :label="item.name"></el-table-column>>
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
        <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-sizes="pageNumber"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
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
