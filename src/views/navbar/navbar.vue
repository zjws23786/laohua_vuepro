<template>
    <div class="navbar">
      <div class="navbar-left">
        <img class="navbar-logo" src="../../assets/imgs/denglu_logo.png">
        <h2>后台管理系统V1.0.0</h2>
      </div>

      <div class="navbar-right">
        <div class="portraiImg">
          <img class="portrai" src="../../assets/imgs/touxiang.png">
        </div>

        <div class="userName">
          <Dropdown @click="dropOut">
            <span>{{userName}}</span>
            <DropdownMenu slot="list">
              <DropdownItem name="1">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>
