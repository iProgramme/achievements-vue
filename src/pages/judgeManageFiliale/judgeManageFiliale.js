import examiner from '@/components/examiner/examiner.vue';
export default {
    name: "pages",
    data:function(){
        return {
            // type  0 集团考核分公司，1 分公司考核个人
            type:'1',
            // 搜索参数
            tableSearch:{
                task_name:'',
                create_time:'',
                task_statue:'',
            },
            // 表格数据
            tableData:[
                {
                    judgeName: '考核方案名称',
                    beginTime: '2016-05-02',
                    endTime: '2016-05-05',
                    judgePerson: '考核方',
                    judgeNum: '123',
                    judgeStatus: '1',
                    judgeCaseName: '考核方案名称'
                },
                {
                    judgeName: '考核方案名称',
                    beginTime: '2016-05-06',
                    endTime: '2016-05-07',
                    judgePerson: '考核方',
                    judgeNum: '123',
                    judgeStatus: '1',
                    judgeCaseName: '考核方案名称'
                },
                {
                    judgeName: '考核方案名称',
                    beginTime: '2016-05-08',
                    endTime: '2016-05-09',
                    judgePerson: '考核方',
                    judgeNum: '123',
                    judgeStatus: '1',
                    judgeCaseName: '考核方案名称'
                },
            ],
            // 表头数据
            tableThead:[
                {name:'考核方案名称',value:'judgeName'},
                {name:'考核起止时间',value:'beginTime'},
                {name:'考核发起人',value:'judgePerson'},
                {name:'考核数量',value:'judgeNum'},
                {name:'考核状态',value:'judgeStatus'},
                {name:'考核方案名称',value:'judgeCaseName'},
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
            // 弹窗
            outerVisible: {flag: false},
        }
    },
    components: {
        examiner
    },
    methods:{
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
        // 归档弹框
        open4() {
            const h = this.$createElement;
            this.$msgbox({
                title: '归档',
                message: h('p', null, [
                    h('span', null, '是否确认归档？'),
                ]),
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                beforeClose: (action, instance, done) => {
                    if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText = '执行中...';
                    setTimeout(() => {
                        done();
                        setTimeout(() => {
                        instance.confirmButtonLoading = false;
                        }, 300);
                    }, 3000);
                    } else {
                        done();
                    }
                }
                }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
            });
        },
        // 请求表格
        getData(currentPage){
            let defaultParams = {
                start_index: this.page.start_index,
                total: this.page.total
            }
            let params = Object.assign(defaultParams,this.tableSearch)
            console.log(params)
            this.$http.get('api/launchassessmentapi/getassessment',{params: params}).then((result) => {
                console.log(result);
                // this.tableData = result
                // this.total = result.total
            }).catch((err)=>{
                console.log(err);
            })
            this.tableData.forEach(item=>item.beginTime = item.beginTime + '-' +item.endTime)
        },

    },
    created() {
        this.getData()
    },
    updated() {
        console.log(this.outerVisible)
    },
};