<!--
 * @Author: chenhua
 * @Date: 2020-07-18 10:45:36
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-18 11:01:49
 * @Description: 
 * @FilePath: \supermall\src\views\home\childComps\HomeRecommendView.vue
--> 
<template>
  <div class="recommend">
     <div v-for="item in recommends" class='recommend-item'>
       <a :href='item.link'>
         <img :src="item.image">
         <div>{{item.title}}</div>
       </a>
     </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HomeRecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex:1;
  }

  .recommend-item img{
    width: 72px;
    height: 72px;
    margin-bottom: 10px;
  }
</style>
