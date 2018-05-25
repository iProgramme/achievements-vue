export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{
                check_method_name:'',
                check_method_define:'',
                count_method:''
            },
            // 表格数据
            tableData:[
                {check_method_name:'111',check_method_define:'222',statue:1},
                {check_method_name:'111',check_method_define:'222',statue:1},
                {check_method_name:'111',check_method_define:'222',statue:0},
                {check_method_name:'111',check_method_define:'222',statue:1},
                {check_method_name:'111',check_method_define:'222',statue:1},
                {check_method_name:'111',check_method_define:'222',statue:0},
                {check_method_name:'111',check_method_define:'222',statue:1},
                {check_method_name:'111',check_method_define:'222',statue:1},
            ],
            tableThead:[
                {name:'考核办法名称',value:'check_method_name'},
                {name:'考核办法',value:'check_method_define'},
                {name:'启用状态',value:'statue'},
            ],
            // 弹窗
            tableObject:{
                check_method_name:'',
                check_method_define:'',
                count_method:''
            },
            dialogVisible:false,
            // 弹窗 - 必填项校验
            rules:{
                check_method_name:[{required:true,message:'请输入考核办法名称',trigger:'blur'}],
                check_method_define:[{required:true,message:'请输入考核办法',trigger:'blur'}],
            },
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
                this.$http.get('/api/checkmethodapi/getcheckmethod',{params:params}).then((result) => {
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
            this.$http.post('/api/checkmethodapi/changecheckmethodstatue',{params:params}).then((result) => {
                console.log(result);
                this.getData()
            }).catch((err)=>{
               
            })
        },
        // 新增校验
        submitForm(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('已全部填完');
                    this.addForm()
                } else {
                  console.log('error submit!!');
                  return false;
                }
            });
        },
        // 确认新增
        addForm(){
            let params = this.tableObject
            this.$http.post('/api/checkmethodapi/addcheckmethod',params).then((result) => {
                console.log(result);
                this.getData()
                this.dialogVisible = false
            }).catch((err)=>{
                
            })
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