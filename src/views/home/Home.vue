<!--
 * @Author: chenhua
 * @Date: 2020-07-13 08:05:25
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-18 10:52:36
 * @Description: 
 * @FilePath: \supermall\src\views\home\Home.vue
--> 
<template>
  <div id="home">
     <nav-bar class='home_nav'>
       <div slot="center">源源的小卖铺</div>
     </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommend-view :recommends='recommends'></home-recommend-view>
     <!-- <router-view /> -->
  </div>
</template>

<script type="text/javascript">

import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'

import {getHomeMultidata} from 'network/home';

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView
  },
  created(){
    // 1 请求多个数据
    
    getHomeMultidata().then(res=>{
      // 函数调用--->压入函数栈（保存函数调用过程中的所有变量）
      // 函数调用结束--->弹出函数栈（释放函数所有的变量）
      // console.log(res);
      this.banners = res.data.banner.list;  // 这里的this实际上就是组件对象
      this.recommends = res.data.recommend.list;  // 这里的this实际上就是组件对象
    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>

<style scoped>
.home_nav{
   color: #fff;
   background-color:  var(--color-tint);
}
</style>
