import resquest from "@/utils/request"

// 创建一个请求轮播图的函数
export const getGoodsList = (count: number, limit: number) => resquest.get('/pro/list', {
  params: { count: count, limitNum: limit }
})

// 创建一个请求分类列表的函数
export const getCategoriesList = () => resquest.get('/pro/categorylist')

// 创建一个根据分类获取信息的函数
export const getGoodsByCategories = (category: string) => resquest.get('/pro/categorybrandlist', {
  params: { category }
})

// 创建一个根据分类和品牌来获取商品信息的函数
export const getGoodsByCateAndBrand = (brand: string, category: string) => resquest.get('/pro/categorybrandprolist', {
  params: { brand, category }
})

// 搜索列表
export const getSearchList = (keyword: string) => resquest.get('/pro/search', {
  params: { keyword }
})

// 热门搜索列表
export const getSearchHotList = () => resquest.get('/pro/hotword')

// 获取商品详情
export const getGoodsInfo = (proid: string) => resquest.get(`/pro/detail/${proid}`)
