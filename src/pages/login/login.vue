<template>
  <div>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
        </el-header>
        <el-main>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="login-main">
                    <h2>用户登录</h2>
                    <el-form :model="user" ref="user" label-width="100px" class="demo-dynamic">
                    <el-form-item
                        prop="userName"
                        label="用户名"
                        :rules="[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        ]"
                    >
                        <el-input v-model="user.userName"></el-input>
                    </el-form-item>
                    <el-form-item
                        :label="'密码' "
                        prop="password"
                        :rules="{
                        required: true, message: '请输入密码', trigger: 'blur'
                        }"
                    >
                        <el-input v-model="user.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="rememberMe">记住密码</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('user')">提交</el-button>
                        <el-button @click="resetForm('user')">重置</el-button>
                    </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
        </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            user:{
                userName:'',
                password:''
            },
            rememberMe:''
        }
    },
    methods:{
        submitForm(uesr){
            this.$refs[uesr].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    console.log(this.rememberMe);
                    
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(user){
            console.log(user);
            
        }
    },
    created(){
        document.title = '绩效考核-登陆'
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
