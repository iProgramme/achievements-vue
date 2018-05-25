<template>
    <div class="filiale-judge-manage">
        <!-- 搜索 -->
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="绩效方案名称" prop="templete_name">
                <el-input v-model="tableSearch.templete_name" placeholder="请输入绩效方案名称"></el-input>
            </el-form-item>
            <el-form-item label="审核状态" prop="templete_check_statue">
                <el-select v-model="tableSearch.templete_check_statue" placeholder="--请选择--">
                    <el-option v-for="item in templeteCheckStatueList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="使用状态" prop="statue">
                <el-select v-model="tableSearch.statue" placeholder="--请选择--">
                    <el-option v-for="item in statueList" :key="item.id" :label="item.name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="getData()">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="routerToAdd('new')">新增考核方案</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData"
        stripe border
        style="width: 100%">
            <el-table-column
            v-for="item in tableThead"
            :key="item.value"
            :prop="item.value"
            :label="item.name">
            </el-table-column>
            
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!-- todo 判断按钮显示方式 -->
                    <el-button type="text" @click="routerToDetail(scope.row)">查看详情</el-button>
                    <el-button type="text" @click="changeStatue(scope.row)" v-if="!scope.row.statue">启用</el-button>
                    <el-button type="text" @click="changeStatue(scope.row)" v-if="scope.row.statue">停用</el-button>
                    <el-button type="text" @click="routerToAdd('change',scope.row)" v-if="scope.row.templete_check_statue == 1">修改</el-button>
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
