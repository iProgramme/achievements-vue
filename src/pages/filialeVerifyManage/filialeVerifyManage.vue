<template>
    <div>
        <el-button type="primary" @click="go">去详情</el-button>
        
    </div>
</template>

<script>
export default {
    name: "pages",
    
    data:function(){
        return {
        }
    },
    methods:{
        go(){
            this.$router.push({path:'/filialeVerifyManageDetail'})
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
