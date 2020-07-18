<!--
 * @Author: chenhua
 * @Date: 2020-07-12 16:24:59
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-17 15:19:42
 * @Description: 
 * @FilePath: \supermall\src\components\common\tabbar\TabBarItem.vue
--> 
<template>
 <div class="tab-bar-item" @click="itemClick">
   
   <div v-if='!isActive'>
     <slot name="item-icon"></slot>
   </div>
   <div v-else>
     <slot name="item-icon-active"></slot>
   </div>
   <div :style='activeStyle'> 
      <slot name="item-text"></slot>
   </div>
   
     
   <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
   <div>首页</div> -->
 </div>
</template>

<script type="text/javascript">
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor:{
      type: String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
   flex: 1;
   text-align: center;
   height: 49px;
   font-size: 14px;
 }
 .tab-bar-item img{
   width: 24px;
   height: 24px;
   margin-top: 3px;
   margin-bottom: 2px;
   vertical-align: middle; /* 去掉图标和文字之间的距离 */
}
/* .active{
  color:rgb(255, 87, 119)
} */
</style>
