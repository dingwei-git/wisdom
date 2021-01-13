<template>
  <div class="hello">
    <div>智慧物联平台登陆</div>
    <div>
      <div>
        <el-form-item prop="name" label="账号">
          <input type="text" v-model="loginName"/>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="密码" prop="pass">
          <input type="password" v-model="password"/>
        </el-form-item>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    data () {
        return {
            loginName:'',
            password:''
        }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
