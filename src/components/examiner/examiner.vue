<template>
    <div>
        <el-dialog title="发起绩效考核" :visible.sync="obj.flag" width="520px" class="performance-dialog">
            <el-form :model="tableObject" status-icon ref="tableObject" label-width="110px" class="demo-ruleForm">
                <el-form-item label="绩效考核名称：" prop="name1">
                    <el-input v-model="tableObject.name1" placeholder="请输入绩效考核名称" style="width:350px"></el-input>
                </el-form-item>
                <el-form-item label="考核起止时间：" prop="name2">
                    <el-date-picker type="daterange" v-model="valuedate" start-placeholder="考核开始时间" range-separator="至" end-placeholder="考核结束时间" align="center"></el-date-picker>
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
                    <div class="item-examiner" v-for="(item,index) in examinerList" :key="item.id">
                        <div class="examiner">
                            <span class="el-icon-error" @click="deleteExaminer(index)"></span>
                            <div class="examiner-name">{{item.name.substr(0,2)}}</div>
                        </div>
                        <span class="el-icon-back" v-show="index < 3"></span>
                    </div>
                    <div class="examiner item-examiner plus-examiner"   @click="innerVisible = true" v-show="plusShow">
                        <span class="el-icon-plus"></span>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('tableObject')">发起考核</el-button>
                </el-form-item>
            </el-form>
            <el-dialog title="任务提交" width="40%" :visible.sync="innerVisible" class="performance-dialog" append-to-body>
                <div>请选择流转人员 后续流程环节：业务录入</div>
                <el-table :data="gridData" stripe border style="width: 100%" highlight-current-row @current-change="handleCurrentChange">
                    <el-table-column type="index"></el-table-column>
                    <el-table-column prop="name2" label="部门"></el-table-column>
                    <el-table-column prop="name3" label="姓名"></el-table-column>
                    <el-table-column prop="name4" label="当前待办量"></el-table-column>
                </el-table>
            </el-dialog>
        </el-dialog>
    </div>
</template>
<script>
import examiner from "./examiner";
export default {
    ...examiner
}
</script>
<style lang="less" scoped>
    @import url(./examiner.less);
</style>
