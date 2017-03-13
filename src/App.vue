<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <NavHeader v-show="headerShow" ></NavHeader>
    <transition name="slide-down">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>





    <FooterView></FooterView>

  </div>
</template>

<script>
import NavHeader from './components/Nav.vue'
import FooterView from './components/Footer.vue'
import Container from './components/Container.vue'

import {mapGetters, matpActions} from 'vuex'


export default {
  computed:mapGetters([
    'headerShow',
    'loading'
  ]),
  watch:{
    $route(to,from){
      //console.log(to.path) 路由跳转
      if(to.path=='/user-info'){
        this.$store.dispatch('hideHeader');
      }
      else{
        this.$store.dispatch('showHeader')
      }
    }
  },
  components:{
    NavHeader,
    FooterView

  }
}

//import './assets/js/font.js'
// import './assets/js/jquery-1.7.2.js'
// import './assets/js/swipe.js'

</script>

<style>
@import './assets/css/index.css';

.slide-down-enter-active, .slide-down-leave-active {
  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: .7;
  transform: translate3d(0, 6em, 0);
}
.slide-down-enter, .slide-down-leave-active {
  opacity: .1;
  transform: translate3d(0, 6em, 0);
}
</style>
