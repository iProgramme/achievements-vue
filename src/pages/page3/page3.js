export default {
    name: 'page3',
    data() {
        return {
            arr:[{app:1,flag:true},
                {app:2,flag:true}],
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
        }
        
    }
}