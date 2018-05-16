export default {
    name: 'page4',
    data() {
        return {
            arr:[{app:1,flag:true,number:200},
                {app:2,flag:false,number:201}],
            msg:'离开交互稿',
            count:0,
            value:new Date()-21111111111,
            fileList:[],
            tableData5: [{
                id: '12987122',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              }, {
                id: '12987123',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              }, {
                id: '12987125',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              }, {
                id: '12987126',
                name: '好滋好味鸡蛋仔',
                category: '江浙小吃、小吃零食',
                desc: '荷兰优质淡奶，奶香浓而不腻',
                address: '上海市普陀区真北路',
                shop: '王小虎夫妻店',
                shopId: '10333'
              }],
            data: [{
                label: '一级 1',
                children: [{
                  label: '二级 1-1',
                  children: [{
                    label: '三级 1-1-1'
                  }]
                }]
              }, {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              }, {
                label: '一级 3',
                children: [{
                  label: '二级 3-1',
                  children: [{
                    label: '三级 3-1-1'
                  }]
                }, {
                  label: '二级 3-2',
                  children: [{
                    label: '三级 3-2-1'
                  }]
                }]
              }],
              defaultProps: {
                children: 'children',
                label: 'label'
              }
        }
    },
    methods: {
        add:function(){
            console.log(this.value.getTime());
            this.$http.get('/demo1',{params:{asad:12324}}).then((result) => {
                console.log(result);
                if (result) {
                    this.arr = result
                }
            }).catch((err)=>{
                console.log(err);
                
            })
        },
        filterIT:function(arr){
            return arr.filter(function(item){
                return item.flag
            })
        },
        handleNodeClick(data) {
            console.log(data);
        }
        
    },
    computed:{
        filters:function(){
            return this.filterIT(this.arr)
        }
    },
    created:function(){
        console.log('1');
        
    },
    activated:function(){
        console.log(`切换到所在路由的时候，触发${this.count++}次`);
    }
}
