export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{
                templete_name:'',
                templete_check_statue:0,
                statue:0
            },
            // 表格数据
            tableData:[
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:1,statue:1},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:1,statue:1},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:1,statue:0},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:0,statue:1},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:1,statue:1},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:1,statue:0},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:0,statue:1},
                {templete_name:'1',creator_user_id:'1',create_time:'1',templete_name:'111',templete_check_statue:1,statue:1},
            ],
            tableThead:[
                {name:'考核方案名称',value:'templete_name'},
                {name:'创建人',value:'creator_user_id'},
                {name:'创建时间',value:'create_time'},
                {name:'审核状态',value:'templete_check_statue'},
                {name:'启用状态',value:'statue'},
            ],
            // 审核状态
            templeteCheckStatueList:[
                {name:'未审核',id:0},
                {name:'通过',id:2},
                {name:'退回',id:1},
            ],
            // 使用状态
            statueList:[
                {name:'启用',id:1},
                {name:'停用',id:0},
            ],
            // 翻页
            page:{
                start_index:1,
                total:100
            },
            currentPage:1,
            total:1000,
            timeOut:null,
            pageNumber:[10,25,50,100]
        };
    },
    methods: {
        // 请求表格
        getData(type){
            let defaultParams = {
                start_index: this.page.start_index,
                total:this.page.total
            }
            let params = Object.assign(defaultParams,this.tableSearch)
            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(() => {
                this.$http.get('/api/templeteapi/gettemplete',{params:params}).then((result) => {
                    console.log(result);
                    this.arr = result
                }).catch((err)=>{
                
                })
            }, 0); 
        },
        // 翻页
        sizeChange(total){
            this.page.total = total
            this.getData()
        },
        currentChange(currentPage){
            this.page.start_index = currentPage
            this.getData()
        },
        // 启用/停用
        changeStatue(item){
            let params = {
                id:item.id,
                statue:!item.statue
            }
            this.$http.post('/api/templeteapi/changetempletestatue',{params:params}).then((result) => {
                console.log(result);
                this.getData()
            }).catch((err)=>{
               
            })
        },
        // 去新增页
        routerToAdd(){
            this.$router.push({path:'/filialeJudgeManageAdd'})
        },
        // 去详情页
        routerToDetail(item){
            console.log(item);
            this.$router.push({path:'/filialeJudgeManageDetail'})
        },
        // 清除搜索条件
        resetForm(formName){
            this.$refs[formName].resetFields()
        }
    },
    created(){
        this.getData()
    }
}