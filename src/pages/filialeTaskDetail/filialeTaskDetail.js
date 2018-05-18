export default {
    name: 'filialeTaskDetail',
    data() {
        return {
              
        }
    },
    methods: {
        
    },
    activated:function(){
        console.log(this.$route.query.id);
    }
}
