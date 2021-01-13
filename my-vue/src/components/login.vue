<template>
  <div id="app" class="hello">
    <img src="../assets/logo.png">
    <div>智慧物联平台登陆</div>
    <div>
      <div>
        <el-form-item prop="loginName" label="账号">
          账号:<input type="text" v-model="loginName"/>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="密码" prop="pass">
          密码:<input type="password" v-model="password"/>
        </el-form-item>
      </div>
      <div class="form-container-foot">
        <button type="cyan" size="small" @click="submitForm" >保存</button>
        <button  size="small" @click="goBack">返回</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
    export default {
      data () {
          return {
              loginName:'',
              password:''
          }
      },
      created() {

      },
      methods: {
        /** 登陆 */
        submitForm(){
          alert(this.loginName+this.password)
          // this.$axios({
          //       methods:"get",
          //       //接口地址  api-代理+接口端口号之后的其余地址
          //       url:"http://localhost:30000/api/wisdom/getUserApi"
          //   }).then(response =>{
          //   	//验证数据是否获取到
          //       // console.log(response.data);
          //       that.listone=response.data.data.listone;
          //       console.log(that.listone);
          //   })
        },
        /** 重置 */
        goBack(){
          // this.$axios({
          //       methods:"get",
          //       //接口地址  api-代理+接口端口号之后的其余地址
          //       url:"http://localhost:30000/api/wisdom/getUserApi"
          //   }).then(response =>{
          //   	//验证数据是否获取到
          //       // console.log(response.data);
          //       that.listone=response.data.data.listone;
          //       console.log(that.listone);
          //   })
        }
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
