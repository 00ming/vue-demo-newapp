<template >
  <div id="Home" >
    <div class="content">
      <BannerView></BannerView>
      <div class="newList">
        <ul>
          <li v-for="(item,index) in arrList">
            <router-link :to="'/article/'+item.id">
              <h2>{{index+1}}.{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </router-link>
          </li>
        </ul>

      </div>
    </div>

  </div>


</template>
<script>
  import BannerView from './Banner.vue'
  export default{
    data(){
      return{
        arrList:[]
      }
    },
    components:{
      BannerView
    },
    mounted(){
      //获取数据
      this.fetchData();
    },
    methods:{
      fetchData(){
        // console.log(this.$http);
        var _this=this;
        this.$http.get('src/data/index.data').then(function(res){
          // console.log(res);
          // alert(1)
          _this.arrList=res.data;
        }).catch(function(error){
          console.log('Container',error);
          // alert(2)
        }
      ) ;
      }
    }
  }
</script>
<style scoped>
 .content{
   margin-top: 30px;
 }
</style>
