export default {
    data() {
        return {
            examinerList: [
                {name: 'qq'}
            ],
            plusShow: true, // 添加考评人+是否显示
            tableObject:{}, // 下载
            // outerVisible: this.item,
            innerVisible: false,// 二级弹框
            valuedate: '',
            fileList: [], // 上传文件列表
            gridData: [ // 考评人列表
                {
                    index: '2016-05-02',
                    name2: '王小虎',
                    name3: '上海市普陀区金沙江路 1518 弄',
                    name4: '2016-05-04'
                },
                {
                    index: '2016-05-02',
                    name2: '王小虎',
                    name3: '上海市普陀区金沙江路 1518 弄',
                    name4: '2016-05-04'
                },
                {
                    index: '2016-05-02',
                    name2: '王小虎',
                    name3: '上海市普陀区金沙江路 1518 弄',
                    name4: '2016-05-04'
                },
                {
                    index: '2016-05-02',
                    name2: '王小虎',
                    name3: '上海市普陀区金沙江路 1518 弄',
                    name4: '2016-05-04'
                },
            ],
        };
    },
    props:['obj'], // 组件传值
    methods: {
        // 删除考评人
        deleteExaminer(index) {
            this.examinerList.splice(index,1);
            this.plusShow = true
        },
        // 下载
        download() {

        },
        // 导入excel
        importData() {

        },
        // 当前选中第几行
        setCurrent(row) {
            this.$refs.singleTable.setCurrentRow(row);
        },
        // 考评人单选
        handleCurrentChange(val) {
            this.currentRow = val;
            this.innerVisible = false;
            // 添加考评人
            this.dialogVisible2 = true
            if(this.examinerList.length < 4) {
                this.examinerList.push({name:this.currentRow.name2});
            }
            if(this.examinerList.length == 4) {
                this.plusShow = false
                console.log(this.plusShow)
            }
        },
    },
    created(){

        console.log(this.item)
    },
    
}