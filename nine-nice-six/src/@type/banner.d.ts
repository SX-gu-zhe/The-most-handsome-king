// 声明一个TS的命名空间，这里面的东西都是全局的
declare namespace BannerNS{

import { readonly } from 'vue';

export interface IBannerItem{
    img:string,
    alt:string,
    link:string,
    readonly bannerid:string, 
     
} }
