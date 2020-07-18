/*
 * @Author: chenhua
 * @Date: 2020-07-17 16:04:24
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-18 09:55:08
 * @Description: 封装了所有首页中的数据请求
 * @FilePath: \supermall\src\network\home.js
 */ 
 import {request} from './request';
 export function getHomeMultidata(){
   return request({
     url: '/home/multidata'
   })
 }; 

// 后续还可添加其他请求
//  export function getHomeMultidata(){
//   return request({
//     url: '/home/multidata'
//   })
// }; 
// export function getHomeMultidata(){
//   return request({
//     url: '/home/multidata'
//   })
// }; 
 