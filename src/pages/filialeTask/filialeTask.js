export default {
    name: 'filialeTask',
    data() {
        return {
            // 搜索表单
            tableSearch:{
                task_name:'',
                create_time:'',
                task_statue:'',
            },
            // 弹窗表单
            value6:'',            
            fileList:[],
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            // 表格内容
            tableData: [
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄111',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄222',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄333',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄4444',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
            ],
            // 表头
            tableThead: [
                {name:'序号',value:'orderNumber'},
                {name:'任务名称',value:'taskName'},
                {name:'考核起止时间',value:'beginTime'},
                {name:'任务分发人',value:'people'},
                {name:'任务分发状态',value:'status'},
                {name:'创建时间',value:'startTime'},
            ],
            // 分页条
            currentPage: 1,
            total: 1000,
            timeOut: null,
            pageNumber: [10,20,50],
            page:{
                start_index: 1,
                total: 1000
            },
            dialogVisible:false,
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
              ],
              date: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
            }         
              
        }
    },
    methods: {
        resetForm() {
            this.tableSearch.task_name = '';
            this.tableSearch.create_time = '';
            this.tableSearch.task_statue = '';
        },
        searchForm() {
            this.getData()
        },
        // 翻页
        sizeChange(){
            console.log(1);
            this.getData()
        },
        currentChange(){
            console.log(2);
            this.getData()
        },
        // 请求表格
        getData(currentPage){
            let defaultParams = {
                start_index: this.page.start_index,
                total: this.page.total
            }
            let params = Object.assign(defaultParams,this.tableSearch)
            console.log(params)
            this.$http.get('api/taskapi/gettask',{params: params}).then((result) => {
                console.log(result);
                // this.tableData = result
                // this.total = result.total
            }).catch((err)=>{
                console.log(err);
            })
            this.tableData.forEach(item=>item.beginTime = item.beginTime + '-' +item.endTime)
        },
        // 关闭弹窗
        handleClose(done) {
        
        },
        submitForm(formName) {
            let creatParams = {
                task_name: this.ruleForm.task_name,
                start_time: this.ruleForm.start_time,
                end_time: this.ruleForm.end_time,
                task_type: this.ruleForm.task_type,
            }
            this.$http.get('api/taskapi/addtask',{params: creatParams}).then((result) => {
                console.log(result);
                // this.tableData = result
                // this.total = result.total
            }).catch((err)=>{
                console.log(err);
            })
        },
    },
    created(){
        this.getData()
    }
}
