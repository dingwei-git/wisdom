<template>
  <div id="app" class="hello">
    <img src="../assets/logo.png">
    <div class="topzi">智慧物联平台登陆</div>
    <div>
      <el-form ref="form" :model="form" label-width="160px">
        <el-form-item label="账号">
          <el-input v-model="form.loginName" placeholder="账号" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="cyan" size="small" @click="submitForm" >保存</el-button>
      <el-button  size="small" @click="goBack">返回</el-button>
    </div>
  </div>
</template>

<script>
  // import { getUserApi} from '@/api/config'
  import request from '@/utils/request'
  export default {
    name: 'login',
    data () {
      return {
        form:{
          'loginName':'',
          'password':''
        }
      }
    },
    methods: {
      submitForm(){
        alert('账号:'+this.form.loginName+"\n"+'密码:'+this.form.password)
        // getUserApi(this.form).then(response => {
        //   if (response.exceptionCode === '200') {
        //     this.msgSuccess("保存成功");
        //     this.open = false;
        //     this.$router.push('/production/taskRelease')
        //   }else{
        //     this.msgError("保存失败");
        //   }
        // });
        request({
          url: 'http://localhost:30000/api/wisdom/getUserApi',
          method: 'get',
          data: data,
          datatype: 'json'
        })
      },
      goBack(){
        alert('goBack')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
