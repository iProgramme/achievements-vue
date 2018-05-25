export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{
                indicator_name:'',
                indicator_define:'',
                count_method:''
            },
            // 统计方式
            countMethod:[
                {id:'1',count_method_name:'统计方式1'},
                {id:'2',count_method_name:'统计方式2'},
                {id:'3',count_method_name:'统计方式3'},
                {id:'4',count_method_name:'统计方式4'},
                {id:'5',count_method_name:'统计方式5'},
            ],
            // 表格数据
            tableData:[
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:1},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:1},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:0},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:1},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:1},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:0},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:1},
                {Indicator_name:'111',Indicator_define:'222',Indicator_count_method:'333',statue:1},
            ],
            tableThead:[
                {name:'指标名称',value:'Indicator_name'},
                {name:'指标定义',value:'Indicator_define'},
                {name:'统计方式',value:'Indicator_count_method'},
                {name:'启用状态',value:'statue'},
            ],
            // 弹窗
            tableObject:{
                indicator_name:'',
                indicator_define:'',
                count_method:''
            },
            dialogVisible:false,
            // 弹窗 - 必填项校验
            rules:{
                indicator_name:[{required:true,message:'请输入指标名称',trigger:'blur'}],
                indicator_define:[{required:true,message:'请输入定义',trigger:'blur'}],
                count_method:[{required:true,message:'请选择统计方式',trigger:'blur'}],
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
        // todo 翻页存在问题，当选到最后一页，再将100条/页切换到400时，会导致多请求一次
        // 请求表格
        getData(type){
            let defaultParams = {
                start_index: this.page.start_index,
                total:this.page.total
            }
            let params = Object.assign(defaultParams,this.tableSearch)
            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(() => {
                this.$http.get('/api/indicatorsapi/getindicators',{params:params}).then((result) => {
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
        // 请求指标统计方式
        getCountMethod(){
            let params = {
                start_index:null,
                total:null
            };
            this.$http.get('/api/indicatorsapi/getallcountmethod',{params:params}).then((result) => {
                console.log(result);
                // this.arr = result
            }).catch((err)=>{
               
            })
        },
        // 启用/停用
        changeStatue(item){
            let params = {
                id:item.id,
                statue:!item.statue
            }
            this.$http.post('/api/indicatorsapi/changeindicatorsstatue',{params:params}).then((result) => {
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
            this.$http.post('/api/indicatorsapi/addindicators',params).then((result) => {
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
        this.getCountMethod()
    }
}