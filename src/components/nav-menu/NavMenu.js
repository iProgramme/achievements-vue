export default {
    name: 'navMenu',
    data:function() {
        return {
            routerName: {},
            isCollapse:false,
            defaultActiveNow:''
        }
    },
    props:['routerNavs'],
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        add(routerName){
            this.routerName = routerName
            this.$router.push({path:routerName.url})
            // this.$http.get('/demo1',{params:{asad:12324}}).then((result) => {
            //     // console.log(result);
            //     // console.log(this.$http.defaults);
            // }).catch((err)=>{
            //     console.log(err);
            // })
            this.$emit('routerName',{message:this.routerName})
        }
    },
    watch:{
        routerNavs(){
            setTimeout(()=>{
                this.defaultActiveNow = this.$route.path
            },0)
        }
    }
}