export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{

            },
            // 表格数据
            tableData:[
                {orderNumber:1,methodName:'某某绩效考核',people:'谁',startTime:'2018-05-22',status:'完成',status2:'启用'}
            ],
            // 翻页
            currentPage4:1
            
        };
    },
    methods: {
        routerToAdd(){
            this.$router.push({path:'/filialeJudgeManageAdd'})
        },
        routerToDetail(item){
            console.log(item);
            
            this.$router.push({path:'/filialeJudgeManageDetail'})
        },
        // 翻页
        handleSizeChange(){
            console.log(1);
        },
        handleCurrentChange(){
            console.log(2);
        }
    }
}