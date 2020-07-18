/*
 * @Author: chenhua
 * @Date: 2020-07-15 19:30:26
 * @LastEditors: chenhua
 * @LastEditTime: 2020-07-18 09:55:18
 * @Description: 
 * @FilePath: \supermall\src\network\request.js
 */ 
// 如果使用export default... 只会导出一个实例，而想使用多个时，可将default替换为function
// export function instance1(){
// }

// export function instance2(){
// }
// 导入 axios
import axios from 'axios'


// 将结果回调出去的方法（四） 终极方案(其他方案可查看案例axios或者相应的ppt)
export function request(config,success,failure){
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
  
    timeout: 5000
  })

  // 2 axios拦截器
  // 主要是用来干什么的？
  // （1）config中的一些信息不符合服务器的要求
  // （2）每次发送网络请求时，都希望在界面中显示一个请求的图标
  // （3）某些网络请求（比如登录token），必须携带一些特殊信息
  //  请求拦截
  instance.interceptors.request.use(config=>{
    // console.log(config);
    return config
  },err=>{
    // console.log(err);
  })
  // 响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res);
    return res.data;  // 若这里无返回，则main.js那里会返回undefined(因为我们只需要用data，所有直接返回res.data即可)
  },err=>{
    console.log(err);
  })
  
  // 3 发送真正的网络请求
  return instance(config)   // 返回promise

}