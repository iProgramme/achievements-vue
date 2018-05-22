<template>
    <div>
        <div class="item-examiner" v-for="(item,index) in examinerList" :key="item.name">
            <div class="examiner">
                <span class="el-icon-error" @click="deleteExaminer(index)"></span>
                <div class="examiner-name">{{item.name.substr(0,2)}}</div>
            </div>
            <span class="el-icon-back"></span>
        </div>
        <div class="examiner item-examiner plus-examiner" @click="addExaminer()">
            <span class="el-icon-plus"></span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            examinerList: [
                {
                    name: '谢谢ssfasf'
                },
                {
                    name: 'wwsdfa'
                }
            ]
        };
    },
    methods: {
        deleteExaminer(index) {
            this.examinerList.splice(index,1)
        },
        addExaminer() {
            if(this.examinerList.length < 4) {
                this.examinerList.push({name:'雪'})
            }
        },
    }
}
</script>
<style>
    .item-examiner {
        float: left;
    }
    .examiner {
        float: left;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        border: 1px solid #ddd;
        position: relative;
    }
    .el-icon-error {
        position: absolute;
        top: -4px;
        right: -4px;
        cursor: pointer;
    }
    .el-icon-back {
        margin: 0 5px;
        transform:rotate(180deg);
        -ms-transform:rotate(180deg); 	/* IE 9 */
        -moz-transform:rotate(180deg); 	/* Firefox */
        -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
        -o-transform:rotate(180deg); 
    }
    .el-icon-plus {
        margin-left: 9px;
    }
    .plus-examiner {
        cursor: pointer;
        border: 1px dotted #ddd;
    }
    .examiner-name {
        text-align: center;
    }
</style>


