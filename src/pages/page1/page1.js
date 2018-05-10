import page1 from './page1.vue'
export default {
    name: 'page1',
    data() {
        return {
            arr:[],
            msg:'离开交互稿'
        }
    },
    components:{
        page1:page1
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
        }
        
    }
}