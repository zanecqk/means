//  模拟数据
var codeList = ['A','B','C','D','E','F','G'] 
var dataList = []  //首字母对应的 首字母城市  
var indexList = []  //筛选后的数据

var cities= [
    {name:'北京',pinyin:'beijing'},
    {name:'北平',pinyin:'beiping'},
    {name:'鞍山',pinyin:'anqing'},
    {name:'安南',pinyin:'annan'},
    {name:'成都',pinyin:'chengdu'},
    {name:'城安',pinyin:'chengan'},   
    {name:'鹅城',pinyin:'echeng'},
    {name:'鹅城2',pinyin:'echeng2'},
]

codeList.forEach((element)=>{
    let temArr=cities.filter((item)=>element.toLowerCase() == item.pinyin.substr(0,1))
    console.log('temArr',temArr)
    // temArr length大于0 代表有匹配的城市
    if(temArr.length >0) {
        indexList.push(element)
        dataList.push({
            index:element,
            data:temArr
        })
    }

})

console.log('indexlist',indexList)
console.log('dataList',dataList)