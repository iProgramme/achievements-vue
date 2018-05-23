export default {
    data() {
        return {
            examinerList: [
                {name: 'qq'}
            ],
            plusShow: true,
            tableObject:{},
            // outerVisible: this.item,
            innerVisible: false,
            valuedate: '',
            fileList: [],
            gridData: [
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
    props:['obj'],
    methods: {
        deleteExaminer(index) {
            this.examinerList.splice(index,1);
            this.plusShow = true
        },
        addExaminer() {
            this.dialogVisible2 = true
            if(this.examinerList.length < 4) {
                this.examinerList.push({name:'雪'})
            }
            if(this.examinerList.length == 4) {
                this.plusShow = false
            }
        },
        download() {

        },
        importData() {

        },
        setCurrent(row) {
            console.log(1)
            this.$refs.singleTable.setCurrentRow(row);
          },
        handleCurrentChange(val) {
            this.currentRow = val;
        }
    },
    created(){

        console.log(this.item)
    },
    
}