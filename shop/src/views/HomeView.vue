<template>
  <div class="home">
    <!-- <van-button type = "primary">默认按钮</van-button> -->
    <div>
      <svg class="iconfont" aria-hidden="true">
        <use xlink:href="#icon-diqiu"></use>
      </svg>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>

<!-- less  scoped属性代表作用域，内部样式只在这个组件内生效，不会影响外部的全局样式 -->
<style lang="less" scoped>
.home {
  // color: red;
  div {
    // background: greenyellow;
    width: 75px;
    height: 75px;
    font-size: 18Px;

  }
}
</style>
