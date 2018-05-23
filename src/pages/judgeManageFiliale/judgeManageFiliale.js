export default {
    name: "pages",
    data:function(){
        return {
            // 搜索参数
            tableSearch:{
                // methodName:'1',
                // methodPersion:'2',
                // judgeStatus:'3',
            },
            // 表格数据
            tableData:[
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
                {index:'111',filiale:'222',yearIndicators:'333',month:'444'},
            ],
            // 弹窗
            outerVisible:{flag:false},
            // 翻页
            currentPage4:1,
        }
    },
    // components: {
    //     examiner
    // },
    methods:{
        resetForm() {
            this.tableSearch.methodName = '';
            this.tableSearch.methodPersion = '';
            this.tableSearch.judgeStatus = '';
        },
        submitForm() {

        },
        // 翻页
        handleSizeChange(){
            console.log(1);
        },
        handleCurrentChange(){
            console.log(2);
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
        }

    },
    updated() {
        console.log(this.outerVisible)
    }
};