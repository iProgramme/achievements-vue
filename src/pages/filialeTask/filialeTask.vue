<template>
<div>
    <!-- 搜索 -->
    <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
        <el-form-item label="任务名称：" prop="task_name">
            <el-input v-model="tableSearch.task_name" placeholder="请输入任务名称"></el-input>
        </el-form-item>
        <el-form-item label="创建时间：" prop="create_time">
            <el-date-picker 
            v-model="tableSearch.create_time"
            type="date"
            placeholder="请选择创建时间">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="任务分发状态：" prop="task_statue">
            <el-select v-model="tableSearch.task_statue" placeholder="任务分发状态">
            <el-option label="已分发" value="shanghai"></el-option>
            <el-option label="未分发" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
            <el-button type="primary" @click="searchForm('tableSearch')">查询</el-button>
        </el-form-item>
        <el-form-item class="open-dialog">
            <el-button type="primary" @click="dialogVisible = true">创建新任务</el-button>
        </el-form-item>
    </el-form>
    <div class="main-space"></div>
    <!-- 表格 -->
    <el-table
    :data="tableData"
    stripe border
    style="width: 100%">
            <el-table-column type="index" label="序号"></el-table-column>
            <el-table-column v-for="item in tableThead" :key="item.id" :prop="item.value" :label="item.name"></el-table-column>>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="text">
                    <router-link :to="{path:'/filialeTaskDetail',query:{id:scope.row.beginTime}}">查看详情</router-link>
                </el-button>
                <el-button type="text">删除</el-button>
                <el-button type="text">分发</el-button>
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
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <!-- 弹窗 -->
    <el-dialog
    title="创建新任务"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose" class="performance-dialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
            <el-form-item label="任务名称：" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入任务名称" style="width:350px"></el-input>
            </el-form-item>
            <el-form-item label="考核起止时间：" prop="date">
                <el-date-picker
                v-model="value6"
                type="daterange"
                range-separator="至"
                start-placeholder="请选择"
                end-placeholder="请选择">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="下载基础模板：">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                    <el-option label="模板一" value="shanghai"></el-option>
                    <el-option label="模板二" value="beijing"></el-option>
                </el-select>
                <el-button type="primary">下载</el-button>
            </el-form-item>
            <el-form-item label="上传任务附件：">
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                    :limit="3"
                    :file-list="fileList"
                    :auto-upload="false">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm()">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
import filialeTask from "./filialeTask";
export default {
  ...filialeTask
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
