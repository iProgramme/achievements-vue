export default {
    data() {
        return {
            tableData3: [{
                name1: '2016-05-03',
                name2: '王小虎1',
                name3: '上海',
                name4: '普陀区',
                name5: '上海市普陀区金沙江路 1518 弄',
                span:2
              },
              {
                name1: '2016-05-03',
                name2: '王小虎1',
                name3: '上海',
                name4: '普陀区',
                name5: '上海市普陀区金沙江路 1518 弄',
                span:0
              },
              {
                name1: '2016-05-04',
                name2: '王小虎1',
                name3: '上海',
                name4: '普陀区',
                name5: '上海市普陀区金沙江路 1518 弄',
                span:2
              },
              {
                name1: '2016-05-04',
                name2: '王小虎1',
                name3: '上海',
                name4: '普陀区',
                name5: '上海市普陀区金沙江路 1518 弄',
                span:0
              },
              {
                name1: '2016-05-05',
                name2: '王小虎1',
                name3: '上海',
                name4: '普陀区',
                name5: '上海市普陀区金沙江路 1518 弄',
                span:1
              },
              {
                name1: '2016-05-06',
                name2: '王小虎1',
                name3: '上海',
                name4: '普陀区',
                name5: '上海市普陀区金沙江路 1518 弄',
                span:1
              }],
            
        }
        
    },
    methods: {
        getData(){

        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
              	if(row.span != 0) {
	                return {
	                    rowspan: row.span,
	                    colspan: 1
	                };
	            }else if(row.span == 0){
	               	return {
	                    rowspan: 0,
	                    colspan: 0
	                };
              	}
            }
        },
        // 返回
        backPage(){
            this.$router.push({path:'/filialeJudgeManage'})
        }
        
    }
}