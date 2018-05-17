export default {
    name: 'filialeTask',
    data() {
        return {
            // 搜索表单
            formInline: {
                user: '',
                region: '',
                creationTime:''
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
            // 其他
            tableData: [
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
                {
                    orderNumber: '2016-05-02',
                    taskName: '王小虎',
                    beginTime: '上海市普陀区金沙江路 1518 弄',
                    endTime:'asd',
                    people:'lkjhg',
                    status:'123',
                    startTime:'123'
                },
            ],
            dialogVisible:false,
            currentPage4: 4,            
              
        }
    },
    methods: {
        // 搜索表单
        submitForm(formName) {
            console.log(formName);
            
        },
        resetForm(formName){
            console.log(this.$route);
            
            this.$refs[formName].resetFields()
        },
        // 分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 关闭弹窗
        handleClose(done) {
        
        }
    },
    created(){
        
    }
}
