export default {
    name: 'page4',
    data() {
        return {
            arr:[{app:1,flag:true,number:200},
                {app:2,flag:false,number:201}],
            msg:'离开交互稿',
            count:0,
            value:new Date()
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
