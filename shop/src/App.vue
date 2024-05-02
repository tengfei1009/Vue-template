<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <!-- <transition> 不是一个有效的 HTML 标签，而是 Vue.js 提供的一个组件。它用于在 Vue 应用程序中实现过渡效果。 -->
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>
<script>
// import { watch } from 'vue'
export default {
  data () {
    return {
      // 这段代码是Vue组件中的一个data选项，用于定义组件的响应式数据。
      // 在Vue中，组件的data选项返回一个对象，其中包含组件内部需要响应式跟踪的数据。
      // 在这个例子中，data函数返回一个对象，其中包含一个名为transitionName的属性，初始值为'slide-left'。
      // 这意味着在组件中可以通过this.transitionName来访问和修改这个响应式数据。
      transitionName: 'slide-left'
    }
  },
  watch: {
    $route (to, from) {
      // 由主级到次级
      // to.meta 能取到 route 路由参数中的 meta 属性
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left' // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = '' // 同级无过渡效果
      }
    }
  }
}
</script>

<style lang="less">
@import './common/style/mixin';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1000;
}
.router-view {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%,0,0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%,0,0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%,0,0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%,0,0);
}
</style>
