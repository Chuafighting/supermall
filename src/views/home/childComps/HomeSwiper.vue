<!--
 * @Author: chenhua
 * @Date: 2020-07-18 10:24:49
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-18 10:42:01
 * @Description: 
 * @FilePath: \supermall\src\views\home\childComps\HomeSwiper.vue
--> 
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href='item.link'>
          <img :src="item.image">
        </a>
      </swiper-item>
     </swiper>
  </div>
</template>

<script type="text/javascript">

import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props:{
   banners:{
     type:Array,
     default() {
       return []
     }
   }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
</style>
