<template>
    <div class="filiale-judge-manage">
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="指标名称" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入指标名称"></el-input>
            </el-form-item>
            <el-form-item label="发起人" prop="methodPersion">
                <el-input v-model="tableSearch.methodPersion" placeholder="请输入发起人"></el-input>
            </el-form-item>
            <el-form-item label="考核状态" prop="judgeStatus">
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
                <el-button type="primary" @click="dialogVisible = true">新增指标定义</el-button>
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
                        <router-link :to="{path:'/filialeTaskDetail',query:{id:scope.row.beginTime}}">查看详情</router-link>
                    </el-button>
                    <el-button type="text">归档</el-button>
                    <el-button type="text">考核</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="main-space"></div>    
        <!-- 分页 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next, jumper" :total="140">
        </el-pagination>
        
        <!-- 弹窗 -->
        <el-dialog title="发起绩效考核" :visible.sync="dialogVisible" width="520px" class="performance-dialog">
            <el-form :model="tableObject" status-icon ref="tableObject" label-width="110px" class="demo-ruleForm">
                <el-form-item label="绩效考核名称：" prop="name1">
                    <el-input v-model="tableObject.name1" placeholder="请输入绩效考核名称"></el-input>
                </el-form-item>
                <el-form-item label="考核起止时间：" prop="name2">
                    <el-date-picker type="daterange" v-model="valuedate" start-placeholder="考核开始时间" range-separator="至" end-placeholder="考核结束时间" size="mini"></el-date-picker>
                </el-form-item>
                <el-form-item label="下载考核方案：" prop="name3">
                    <el-select v-model="tableObject.judgeStatus" placeholder="--请选择--">
                        <el-option label="考核方案1" value="1"></el-option>
                        <el-option label="考核方案2" value="2"></el-option>
                    </el-select>
                    <el-button type="primary" @click="download('tableObject')">下载</el-button>
                </el-form-item>
                <el-form-item label="导入指标量值：" prop="name5">
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple
                        :limit="3"
                        :file-list="fileList"
                        :auto-upload="false">
                        <el-button size="small" type="primary">导入数据</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="考评人：" prop="name6">
                    <examiner></examiner>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('tableObject')">发起考核</el-button>
                    <!-- <el-button @click="resetForm('tableObject')">重置</el-button> -->
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
import examiner from '@/components/examiner/examiner.vue'
export default {
    name: "pages",
    data:function(){
        return {
            // 搜索参数
            tableSearch:{
                // methodName:'1',
                // methodPersion:'2',
                // judgeStatus:'3',
            },
            // 表格数据
            tableData:[
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
            ],
            // 弹窗
            tableObject:{},
            dialogVisible:false,
            valuedate: '',
            // 翻页
            currentPage4:1,
        }
    },
    components: {
        examiner
    },
    methods:{
        resetForm() {
            this.tableSearch.methodName = '';
            this.tableSearch.methodPersion = '';
            this.tableSearch.judgeStatus = '';
        },
        submitForm() {

        },
        // 翻页
        handleSizeChange(){
            console.log(1);
        },
        handleCurrentChange(){
            console.log(2);
        },
        download() {

        },
        importData() {

        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
