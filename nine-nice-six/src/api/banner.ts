import request from "@/utils/request";
// import type { IBannerItem } from '@/page/home/banner'
export const getBannerListApi = ()=> request.get<any,BannerNS.IBannerItem[]>('/banner/list')


// const getBannerListApi = ()=>{
//    return request.get('/banner/list')
// }
// getBannerListApi().then(res=>{

// })
