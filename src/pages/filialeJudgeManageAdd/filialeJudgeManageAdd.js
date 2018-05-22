export default {
    data() {
        return {
            arr:[],
            msg:'离开交互稿',
            tableDetail:{}, // 顶部
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
            //   弹窗
            dialogVisible:false,
            tableObject: {
                name1:'1',
                name2:'2',
                name3:'3',
                name4:'4',
                name5:'5'
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
                    if(value.name1 == row.name1 && value.span!=0){
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
            let item = this.tableData3.find(item=>item.name1 == '2016-05-03')
            if(item){
                item.span++;
                let index = this.tableData3.findIndex(item=>item.name1 == '2016-05-03')
                this.tableData3.splice(index+1,0,{
                    name1: '2016-05-03',
                    name2: '王小虎7',
                    name3: '上海',
                    name4: '普陀区',
                    name5: '上海市普陀区金沙江路 1518 弄',
                    span:0
                })
            }else{
                this.tableData3.push({
                    name1: '2016-05-09',
                    name2: '王小虎7',
                    name3: '上海',
                    name4: '普陀区',
                    name15: '上海市普陀区金沙江路 1518 弄',
                    span:1
                })
            }
            
            
            console.log(this.tableData3);
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 提交总表单
        submitTable(){
            console.log(this.tableData3);
        },
        // 返回
        backPage(){
            this.$router.push({path:'/filialeJudgeManage'})
        }
        
    },
    computed:{
        tableData4(){
            return this.tableData3
        }
    },
    activated:function(){
        // this.tableData3 = []
        // this.tableDetail = {}
        // this.dialogVisible = false;
        // this.tableObject = {}
        this.$store.commit('toTree',this.tableData3)
        this.$store.commit('toArray',this.$store.state.tree)
        console.log(`切换到所在路由的时候，触发${this.count++}次`);
    }
}