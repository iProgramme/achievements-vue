export default {
    data() {
        return {
            // 搜索参数
            tableSearch:{

            },
            // 表格数据
            tableData:[
                {name1:'111',name2:'222',name3:'333',status:1},
                {name1:'222',name2:'222',name3:'333',status:1},
                {name1:'333',name2:'222',name3:'333',status:1},
                {name1:'444',name2:'222',name3:'333',status:1},
                {name1:'555',name2:'222',name3:'333',status:1},
                {name1:'666',name2:'222',name3:'333',status:1},
                {name1:'777',name2:'222',name3:'333',status:1},
            ],
            // 弹窗
            tableObject:{},
            dialogVisible:false,
            // 翻页
            currentPage4:1,

            
        };
    },
    methods: {
        // 翻页
        handleSizeChange(){
            console.log(1);
        },
        handleCurrentChange(){
            console.log(2);
        }
    }
}