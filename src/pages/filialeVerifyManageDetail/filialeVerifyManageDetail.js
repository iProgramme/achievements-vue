export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{

            },
            // 表格数据
            tableData:[
                {name1:'111',name2:'222',name3:'333',name4:'444',status:1},
                {name1:'222',name2:'222',name3:'333',name4:'444',status:1},
                {name1:'333',name2:'222',name3:'333',name4:'444',status:1},
                {name1:'444',name2:'222',name3:'333',name4:'444',status:1},
                {name1:'555',name2:'222',name3:'333',name4:'444',status:1},
                {name1:'666',name2:'222',name3:'333',name4:'444',status:1},
                {name1:'777',name2:'222',name3:'333',name4:'444',status:1},
            ],
            // 翻页
            currentPage4:1,
            radio:'1',
            textarea3:'',
            // flag为 true 时，为详情。false时为考核
            flag:true

            
        };
    },
    methods: {
        backPage(){
            this.$router.push({path:'/filialeVerifyManage'})
        },
        submitTable(){
            this.$confirm('提交后将无法修改, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                type: 'success',
                message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                type: 'info',
                message: '已取消删除'
                });          
            });
        }
    }
}