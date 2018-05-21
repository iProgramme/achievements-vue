export default {
    name: 'page1',
    data() {
        return {
            arr:[],
            msg:'离开交互稿',
            tableData3: [{
                date: '2016-05-03',
                name: '王小虎1',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:2
              }, {
                date: '2016-05-03',
                name: '王小虎2',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:0
              }, {
                date: '2016-05-04',
                name: '王小虎3',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:3
              }, {
                date: '2016-05-04',
                name: '王小虎4',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:0
              }, {
                date: '2016-05-04',
                name: '王小虎5',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:0
              }, {
                date: '2016-05-06',
                name: '王小虎6',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:1
              }, {
                date: '2016-05-07',
                name: '王小虎7',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333,
                span:1
              }],
            //   弹窗
            dialogVisible:false,
            ruleForm2: {
                pass: '',
                checkPass: '',
                age: ''
            }
        }
        
    },
    methods: {
        add:function(){
            console.log(this);
            
            this.$http.get('/api/student',{params:{id:'zhangsan',uu:1}}).then((result) => {
                console.log(result);
                this.arr = result
            }).catch((err)=>{
                console.log(err);
            })
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
        // 行内添加行
        // addRow(index,row){
        //     console.log(row.date);
        //     let spanNumber = -1;
        //     spanNumber = this.tableData3.find((value)=>{
        //         if(value.date == row.date && value.span!=0){
        //             return true
        //         }else{
        //             return false
        //         }
        //     })
        //     spanNumber.span++
        //     this.tableData3.splice(index+1,0,{date: row.date,name: '王小虎'+Math.random()*100,province: '上海',city: '普陀区',address: '上海市普陀区金沙江路 1518 弄',zip: 200333,span:0})
        // },
        addProject(){
            this.dialogVisible = true
        },
        deleteRow(index,row){
            if(this.tableData3[index].span!=0 && this.tableData3[index+1] && this.tableData3[index+1].span == 0){
                this.tableData3[index+1].span = this.tableData3[index].span-1
            }else{
                let spanNumber = -1;
                spanNumber = this.tableData3.find((value)=>{
                    if(value.date == row.date && value.span!=0){
                        return true
                    }else{
                        return false
                    }
                })
                spanNumber.span--
            }
            this.tableData3.splice(index,1)
        },
        // 弹窗表单
        submitForm(formName) {
            let item = this.tableData3.find(item=>item.date == '2016-05-03')
            if(item){
                item.span++;
                let index = this.tableData3.findIndex(item=>item.date == '2016-05-03')
                this.tableData3.splice(index+1,0,{
                    date: '2016-05-03',
                    name: '王小虎7',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    span:0
                })
            }else{
                this.tableData3.push({
                    date: '2016-05-09',
                    name: '王小虎7',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    span:1
                })
            }
            
            
            console.log(this.tableData3);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
        
    },
    computed:{
        tableData4(){
            return this.tableData3
        }
    }
}