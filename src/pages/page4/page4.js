export default {
    name: 'page4',
    data() {
        return {
            arr:[{app:1,flag:true,number:200},
                {app:2,flag:false,number:201}],
            msg:'离开交互稿'
        }
    },
    methods: {
        add:function(){
            this.$http.get('http://192.168.2.1:3000/demo1',{params:{asad:12324}}).then((result) => {
                console.log(result);
                this.arr = result
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
    }
}
