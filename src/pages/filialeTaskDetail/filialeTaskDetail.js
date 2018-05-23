export default {
    name: 'filialeTaskDetail',
    data() {
        return {
            tableData3:[
                {
                    name1: '2016-05-03',
                    name2: '王小虎1',
                    name3: '上海',
                    name4: '普陀区',
                    name5: '普陀区',
                    name6: '普陀区',
                    name7: '普陀区',
                    name8: '普陀区',
                    name9: '普陀区',
                    name10: '普陀区',
                    name11: '普陀区',
                    name12: '普陀区',
                    name13: '普陀区',
                    name14: '普陀区',
                    name15: '上海市普陀区金沙江路 1518 弄',
                },
                
            ],
            activeName: 'first2',
            yearTask:[
                {name:'序号',value:'name1'},
                {name:'分公司',value:'name2'},
                {name:'全年任务指标',value:'name3'},
                {name:'1月任务分解数',value:'name4'},
                {name:'2月任务分解数',value:'name5'},
                {name:'3月任务分解数',value:'name6'},
                {name:'4月任务分解数',value:'name7'},
                {name:'5月任务分解数',value:'name8'},
                {name:'6月任务分解数',value:'name9'},
                {name:'7月任务分解数',value:'name10'},
                {name:'8月任务分解数',value:'name11'},
                {name:'9月任务分解数',value:'name12'},
                {name:'10月任务分解数',value:'name13'},
                {name:'11月任务分解数',value:'name14'},
                {name:'12月任务分解数',value:'name15'},
            ],
            financeProduct:[
                {name:'序号',value:'name1'},
                {name:'分公司',value:'name2'},
                {name:'业务量（万）',value:'name3'},
                {name:'传统新车（万）',value:'name4'},
                {name:'易融贷（万）',value:'name5'},
                {name:'公牌私贷（万）',value:'name6'},
                {name:'车主贷（万）',value:'name7'},
                {name:'融资租赁（万）',value:'name8'},
                {name:'二手车（万）',value:'name9'},
            ],
            bankType:[
                {name:'序号',value:'name1'},
                {name:'分公司',value:'name2'},
                {name:'业务量（万）',value:'name3'},
                {name:'宁波工行（万）',value:'name4'},
                {name:'安徽工行（万）',value:'name5'},
                {name:'建设银行（万）',value:'name6'},
                {name:'广东工行（万）',value:'name7'},
                {name:'广东工行（万）',value:'name8'},
                {name:'其他银行（万）',value:'name9'},
                {name:'其他银行（万）',value:'name10'},
            ]
        }
    },
    methods: {
        backPage(){
            this.$router.push({path:'/filialeTask'})
        }
    },
    activated:function(){
        console.log(this.$route.query.id);
    }
}
