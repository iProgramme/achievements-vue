<template>
    <div class="filiale-judge-manage">
        <!-- 搜索 -->
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="指标名称" prop="indicator_name">
                <el-input v-model="tableSearch.indicator_name" placeholder="请输入指标名称"></el-input>
            </el-form-item>
            <el-form-item label="定义" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入定义"></el-input>
            </el-form-item>
            <el-form-item label="统计方式" prop="countWay">
                <el-select v-model="tableSearch.countWay" placeholder="--请选择--">
                    <el-option v-for="item in countMethod" :key="item.id" :label="item.count_method_name" :value="item.id"></el-option>
                </el-select>
            </el-form-item>
            
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="getData()">查询</el-button>
            </el-form-item>
            <el-form-item class="open-dialog">
                <el-button type="primary" @click="dialogVisible = true">新增指标定义</el-button>
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
            title="新增考核指标"
            :visible.sync="dialogVisible"
            width="500px" class="performance-dialog">
            <el-form :model="tableObject" :rules="rules" status-icon ref="tableObject" label-width="120px" class="demo-ruleForm">
                <el-form-item label="指标名称" prop="indicator_name">
                    <el-input v-model="tableObject.indicator_name" placeholder="请输入指标名称"></el-input>
                </el-form-item>
                <el-form-item label="定义" prop="indicator_define">
                    <el-input v-model="tableObject.indicator_define" placeholder="请输入定义"></el-input>
                </el-form-item>
                <el-form-item label="统计方式" prop="count_method">
                    <el-select v-model="tableObject.count_method" placeholder="--请选择--">
                        <el-option v-for="item in countMethod" :key="item.id" :label="item.count_method_name" :value="item.id"></el-option>
                    </el-select>
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
