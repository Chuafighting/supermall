/*
 * @Author: chenhua
 * @Date: 2020-07-16 16:22:52
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-18 09:35:07
 * @Description: 
 * @FilePath: \supermall\vue.config.js
 */ 

 const path = require('path');
 function resolve(dir) {
   return path.join(__dirname, dir)
 }
 module.exports = {
     lintOnSave: false,  // 取消eslint校验代码
     chainWebpack: (config)=>{
         config.resolve.alias
         .set('@', resolve('src'))
         // 需要重启 IDE
         .set('assets',resolve('src/assets'))
         .set('common',resolve('src/common'))
         .set('components',resolve('src/components'))
         .set('network',resolve('src/network'))
         .set('views',resolve('src/views'))
         // 这里只写了几个，你可以自己再加，按这种格式.set('', resolve(''))
     }
 }