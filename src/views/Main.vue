<template>
  <div class="Main">
  <div class="main-vue">
    <!--顶部导航栏-->
    <div class="navbar">
      <navbar></navbar>
    </div>

    <!--内容区域-->
    <div :class="['content', scrollTop < 80 || 'scrollTop', !collapsed || 'minWidth']">
      <!--左边菜单栏-->
      <div class="main-content-left">
        <left-menu></left-menu>
      </div>

      <!--右边内容区域-->
      <div class="main-content-right">
        <!--<router-view></router-view>-->
        <!--<a href="sharedpower://ppstec.com?type=activity">点击唤醒 共享电源app</a>-->
        刘德华
      </div>

    </div>
  </div>
  </div>
</template>

<script>
  import navbar from './navbar/navbar.vue'
  import menu from './menu/menu'

  export default {
    name: "",
    data() {
      return {
        // 屏幕尺寸
        screenWidth: document.body.clientWidth,
        scrollTop: '',
        winPx: true
      }
    },
    created() {
      this.win();
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      win() {
        let userAgentInfo = navigator.userAgent;
        let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        this.winPx = flag;
      },
      handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.scrollTop = scrollTop;
      },
    },
    components: {
      navbar,
      'left-menu': menu,
    }
  }
</script>

<style scoped lang="scss">
.Main{
  height: 100%;
  .content{
    .main-content-left{
      background: #fff;
      min-height: 100%;
      /*width: 196px;*/
      /*transition: top .1s, width .5s;*/
      position: fixed;
      top: 80px;
      left: 0;
      z-index: 1;

    }

    .main-content-right {
      transition: all .5s;
      padding-left: 216px;
      padding-right: 20px;
      z-index: 0;
    }

  }
}

</style>
