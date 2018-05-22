<template>
    <div>
        <!-- 搜索条 -->
        <el-form :inline="true" :model="tableSearch" ref="tableSearch" class="demo-form-inline">
            <slot name="search-item"></slot>
            <el-form-item>
                <el-button @click="resetForm('tableSearch')">清除查询条件</el-button>
                <el-button type="primary" @click="submitForm('tableSearch')">查询</el-button>
            </el-form-item>
            <slot name="search-item-add"></slot>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{

            },
            // 弹窗
            tableObject:{},
            dialogVisible:false,
        };
    },
    methods: {
        submitForm
    }
};
</script>

