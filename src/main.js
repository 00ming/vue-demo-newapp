import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/index.js'
import axios from 'axios'
import Loading from './components/loading'



// console.log(filters)
// Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))


Vue.filter('datatime',function(time){
  if(time){
		var oDate=new Date();
		oDate.setTime(time);

		var y=oDate.getFullYear();
		var m=oDate.getMonth()+1;
		var d=oDate.getDate();

		var h=oDate.getHours();
		var mm=oDate.getMinutes();
		var s=oDate.getSeconds();

		return y+'-'+m+'-'+d+' '+h+':'+mm+':'+s;
	}
});
var myFilter = Vue.filter('datatime')
//关于axios配置
//axios.interceptors.request.use();发请求
//axios.interceptors.response.use;接收请求
axios.interceptors.request.use(function(config){//发送请求
  store.dispatch('showLoading')
  return config;
},function(error){
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response){//请求回复
  store.dispatch('hideLoading')
  return response;
},function(error){
  return Promise.reject(error);
});
// axios.default.baseURL='http://localhost:8082/';配置根路劲
// axios.default.headers.post['Content-Type']='application/x-www-form-urlencoded';设计post头部信息
Vue.prototype.$http=axios;//把axios挂到对象vue的原型上

Vue.use(Loading);
Vue.use(VueRouter);
const router=new VueRouter({
  mode:'history',
  scrollBehavior:()=>({
    y:0
  }),
  routes
});


require('./assets/css/base.css');
//require('./assets/js/font.js')
//require('./assets/js/jquery-1.7.2.js')
//require('./assets/js/swipe.js')




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
