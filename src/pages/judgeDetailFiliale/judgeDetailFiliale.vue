<template>
    <div>
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <el-form-item label="分公司名称：" prop="methodName">
                <el-input v-model="tableSearch.methodName" placeholder="请输入分公司名称"></el-input>
            </el-form-item>
            <el-form-item label="考核进度：" prop="judgeStatus">
                <el-select v-model="tableSearch.judgeStatus" placeholder="--请选择--">
                    <el-option label="考核中" value="1"></el-option>
                    <el-option label="已完成" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="submitForm('tableSearch')">查询</el-button>
            </el-form-item>
        </el-form>
        <div class="main-space"></div> 
        <!-- 表格 -->
        <el-table :data="tableData" stripe border style="width: 100%">
            <el-table-column prop="index" label="序号"></el-table-column>
            <el-table-column prop="name1" label="分公司名称"></el-table-column>  
            <el-table-column prop="date" label="考核起止时间"></el-table-column>
            <el-table-column prop="name2" label="绩效方案名称"></el-table-column>
            <el-table-column prop="name3" label="考核进度"></el-table-column>
            <el-table-column prop="count" label="考评得分"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text">
                        <router-link :to="{path:'/judgeManageFilialeCheck',query:{id:scope.row.beginTime}}">查看详情</router-link>
                    </el-button>
                    <el-button type="text">
                        <router-link :to="{path:'/judgeManageFilialeCheck',query:{id:scope.row.beginTime}}">考核</router-link>
                    </el-button>
                    <el-button type="text">退回</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="main-space"></div>    
        <!-- 分页 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[10, 20, 50]" layout="total, sizes, prev, pager, next, jumper" :total="140">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: "judgeDetailFiliale",
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
            outerVisible:{flag:false},
            // 翻页
            currentPage4:1,
        }
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
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
