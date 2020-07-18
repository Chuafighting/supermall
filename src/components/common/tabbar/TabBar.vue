<!--
 * @Author: chenhua
 * @Date: 2020-07-12 16:00:36
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-17 15:19:27
 * @Description: 
 * @FilePath: \supermall\src\components\common\tabbar\TabBar.vue
--> 
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'TabBar',
  data() {
    return {

    }
  },
}
</script>
 
<style scoped>
   #tab-bar{
   display: flex;
   background-color:#f6f6f6;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;

   box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
 }
 
</style>
