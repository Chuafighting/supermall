<!--
 * @Author: chenhua
 * @Date: 2020-07-16 15:00:16
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-17 14:46:38
 * @Description: 
 * @FilePath: \supermall\src\App.vue
--> 
<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>
