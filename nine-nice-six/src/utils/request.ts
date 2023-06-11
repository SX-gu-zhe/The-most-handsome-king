//  使用axios 得先引入 axios
import axios from 'axios';

// 然后 axios.create() 创建一个axios的实例 
// 创建这个实例的时候传入这个对象
const request = axios.create({
    // baseURL 是基础路径， 会自动拼接到请求的 url 前面
    // 前缀 每个网页前面那个
    // 下面这个是使用的 环境变量  分别开 开发环境和生产环境 使用的地址
    // 脚手架里找环境变量
    baseURL: import.meta.env ? 'http://121.89.205.189:3000/api' : 'http://121.89.205.189:3000/api',
    // 超时的时间
    timeout:60000,

})

   // 拦截器
    // 请求拦截器
    // 顾名思义请求拦截器是在请求之前做一些拦截处理
    // 所以应该是对 request 做操作
    
    request.interceptors.request.use((config)=>{
        // config 此次请求的配置
        return config
    },(error)=>{
        // 此次请求失败执行的操作
        return Promise.reject(error)
    });
    

    // 响应拦截器
    // 在响应数据时对他做一些处理
    request.interceptors.response.use((Response)=>{
        // Response 里包括了config此次请求的配置 data 响应体数据
        return Response.data.data
    },(error)=>{
        // 此次响应失败执行的操作
        return Promise.reject(error)
    });
    export default request;

