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
            this.$emit('routerName',{message:this.routerName})
        }
    },
    watch:{
        routerNavs(){
            setTimeout(()=>{
                this.defaultActiveNow = this.$route.path
            },0)
        },
        $route(newValue){
            console.log(newValue);
           
        }
    }
}