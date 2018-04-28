export default {
    name: 'nav-menu',
    data:function() {
        return {
            routerName: {},
            isCollapse:false
        }
    },
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
            console.log(this.$http)
            this.$emit('routerName',{message:this.routerName})
        }
    }
}