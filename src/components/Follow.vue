<template >
  <div class="content">
    <ul>
      <li v-for="(item,index) in arrList">
        <a href="#">
          <h2>{{index+1}}.{{item.title}}</h2>
          <p>{{item.detail}}</p>
        </a>
      </li>
    </ul>

  </div>
</template>
<script>
  export default{
    data(){
      return {
        arrList:[]
      }
    },
    mounted(){
      this.fetchData()
    },
    methods:{
      fetchData(){
        var _this=this;
        this.$http.get('src/data/follow.data').then(function(res){
          _this.arrList=res.data;

        }).catch(function(err){
          console.log(err);

        });

      }
    }
  }
</script>
<style scoped>
.content{
  margin-top: 30px;
}
</style>
