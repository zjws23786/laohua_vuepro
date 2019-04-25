<template>
  <transition name="fade">
    <div class="spin" @touchmove.prevent>
      <img src="./loading.gif"/>
    </div>
  </transition>
</template>
<script>
    export default {
        name: "spin",
      data(){
          return{};
      }
    }
</script>

<style scoped lang="scss">
  .spin{
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .7);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }

  img{
    width: 150px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
