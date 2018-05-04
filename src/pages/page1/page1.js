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
            
            this.$http.get('http://192.168.2.1:3000/demo2',{params:{asad:12324}}).then((result) => {
                console.log(result);
                this.arr = result
            }).catch((err)=>{
                console.log(err);
            })
        }
        
    }
}