<template>
  <div id="loginBox">
    <div class="bgImg">
      <img src="@/assets/imgs/denglu_bg.png" alt="">
    </div>

    <div class="login">
      <div class="logo">
        <img src="@/assets/imgs/login-logo.png" alt="">
      </div>

      <p>欢迎您登录共享洗衣后台管理</p>

      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem prop="account">
          <Input type="text" v-model="formInline.account" placeholder="Username" icon="ios-person-outline"/>
        </FormItem>

        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="Password" icon="ios-lock-outline"/>
        </FormItem>

        <FormItem>
          <Checkbox v-model="single" style="color: #999;">&nbsp;记住密码</Checkbox>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        single: false,

        formInline: {
          account: '',
          password: ''
        },
        ruleInline: {
          account: [
            {required: true, message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空.', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码不能小于 6 位', trigger: 'blur'}
          ]
        }
      }
    },
    created(){

    },
    methods: {
      //登录
      handleSubmit(name) {
        // 获取对应dom节点元素
        this.$refs[name].validate((vaild) => {
          if (vaild) {
            this.spins.show();
            this.http.post(this.ports.manage.login, this.formInline, res => {
              console.log(res);
              this.spins.hide();
              if (res.success) {
                console.log("hjz",res.data)
                let data = res.data.results
                let user = data.user
                this.storage.setStr('USER_DATA', this.encryption.en(user))
                this.spins.show();
                this.$router.push("/index");
              } else {
                // console.log(res)
                alert(res.rinfo);
              }
            });
          }
        });
      }
    }

  }
</script>

<style scoped lang="scss">

</style>
