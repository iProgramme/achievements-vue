<template>
    <div class="filiale-judge-manage">
        <!-- 搜索 -->
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="考核维度名称" prop="dimension_name">
                <el-input v-model="tableSearch.dimension_name" placeholder="请输入考核办法名称"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="getData()">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="dialogVisible = true">新增维度</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div>
        <!-- 表格 -->
        <el-table
        :data="tableData"
        stripe border>
            <el-table-column
            v-for="item in tableThead"
            :key="item.value"
            :prop="item.value"
            :label="item.name">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="changeStatue(scope.row)" v-if="scope.row.statue">启用</el-button>
                    <el-button type="text" @click="changeStatue(scope.row)" v-if="!scope.row.statue">停用</el-button>
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
        <el-dialog
            title="新增维度"
            :visible.sync="dialogVisible"
            width="500px" class="performance-dialog">
            <el-form :model="tableObject" :rules="rules" status-icon ref="tableObject" label-width="120px" class="demo-ruleForm">
                <el-form-item label="考核维度名称" prop="dimension_name">
                    <el-input v-model="tableObject.dimension_name" placeholder="请输入维度名称"></el-input>
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
import judgeDimension from "./judgeDimension.js";
export default {
  ...judgeDimension
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
