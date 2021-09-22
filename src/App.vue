<template>
  <div id="app">
    <transition  :name="transitionName"  mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide'
    }
  },
  watch:{
    $route(to, from){
        let isBack  = this.$router.isBack
        // this.transitionName = isBack ? 'slide-left' : 'slide-right'
        this.$router.isBack = false
    }
  }
}
</script>

<style>
/* .slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%)
}

.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  transform: translateX(-100%)
}

.slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
  transition: 1.5s;
} */

.slide-enter{
  opacity: 0;
}
.slide-enter-to{
   opacity: 1;
}
.slide-leave{
  opacity: 1;
}
.slide-leave-to{
  opacity: 0;
}
.slide-enter-active {
  transition: 2s;
}
.slide-leave-active {
  transition: 2s;
}
</style>
