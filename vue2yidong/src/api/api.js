// 请求的暴露函数 在api.js 
import http from './http'
// 导入请求连接 
 
import {loginUrl,cityListUrl,cinemaListUrl,nowPlayingListUri,comingSoonListUri,moiveDetailUrl} from '@/config/url.js'

//  正在热映

export const nowPlayingListData = (page =1 )=>{
    http.defaults.headers.info = ''
    return http.get(nowPlayingListUri + page)
}


//即将上映请求函数
export const comingSoonListData = (page =1 )=>{
    http.defaults.headers.info = ''
    return http.get(comingSoonListUri + page)
}


// 电影详情页的暴露函数 
export const movieDetailData = (filmId)=>{
    http.defaults.headers.info = 'info'
    return http.get(moiveDetailUrl + filmId)
}


//  电影院列表的请求函数 

export const cinemaListData = (id)=>{
    http.defaults.headers.info = "cinema"
    return http.get(cinemaListUrl + id )
}



// 全国城市数据 
export const cityListData = async () => {
    http.defaults.headers.info = "city";
    let ret = await http.get(cityListUrl);
    // 300多个城市的信息
    console.log(ret)
    let cities = ret.data.data.cities
    var codeList = [] //A B C D EFG HIJKLMN 全部的26个英文字母
    var dataList = [] //城市信息
    var indexList = []  //经过筛选的abcd 字母没有的城市的字母剔除
    for (let i = 65 ;i<= 90; i++) {
        codeList.push(String.fromCharCode(i))
    }
    console.log(codeList)
    codeList.forEach((element)=>{
         let temArr = cities.filter((item)=>element.toLowerCase()==item.pinyin.substr(0,1))
         if(temArr.length >0) {
             indexList.push(element)
             dataList.push(
                 {
                     index:element,
                     data:temArr
                 }
             )
         }
    })
 
//即便是第二种方法 也会变成promise pending 被async感染成promise 
  return  [dataList,indexList ]
   
   
};

export const userLogin = (data) => {
    //loginurl在上面引入了
    return http.post(loginUrl,data)
}