<template>
    <div>
        <div class="text-center">2018年杭州分公司绩效考核</div>
        <div class="main-space"></div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="考核指标" name="first">
                <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
                    <el-form-item label="当月业务量" prop="methodName">
                        <el-input v-model="tableSearch.methodName" placeholder="请输入当月业务量"></el-input>
                    </el-form-item>
                    <el-form-item label="当月费用可用额" prop="methodPersion">
                        <el-input v-model="tableSearch.methodPersion" placeholder="请输入当月费用可用额"></el-input>
                    </el-form-item>
                    <el-form-item label="上月N1原始户数" prop="judgeStatus">
                        <el-input v-model="tableSearch.methodPersion" placeholder="请输入上月N1原始户数"></el-input>
                    </el-form-item>
                    <el-form-item class="open-dialog">
                        <el-button type="primary" @click="tableShow = true">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="main-space"></div>
        <div v-show="tableShow">
            <el-table :data="tableData" stripe border style="width: 100%">
                <el-table-column prop="name0" label="考核维度"></el-table-column>
                <el-table-column prop="name1" label="细项指标"></el-table-column>
                <el-table-column prop="name2" label="基础分值"></el-table-column>
                <el-table-column prop="name3" label="指标公式"></el-table-column>
                <el-table-column prop="name4" label="考核办法"></el-table-column>
                <el-table-column prop="name5" label="考评得分"></el-table-column>
            </el-table>
            <div>
                考评得分：{{82}}分
            </div>
            <div class="text-center back-page">
                <el-button @click="backPage">返回</el-button>
                <el-button type="primary" @click="submit">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import judgePerson from "./judgePerson"
export default {
    ...judgePerson
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
