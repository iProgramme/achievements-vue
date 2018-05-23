export default {
    name: "judgePerson",
    data() {
        return {
            tableShow: false,
            tableSearch: {},
            activeName: 'first',
            tableData: [
                {
                    name0:'1',
                    name1:'1',
                    name2:'1',
                    name3:'1',
                    name4:'1',
                    name5:'1',
                    name6:'1',
                }
            ]
        }
    },
    methods: {
        backPage() {
            this.$router.push({path:'/judgeManageFiliale'})
        },
        submit() {

        }
    },
}