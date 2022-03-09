# VUE

## 引导

[官网](https://cn.vuejs.org)

### 封装 VS 库 VS 框架

**封装**通常指一小部分通用业务逻辑，多个封装形成一个模块或者文件，多个模块或者文件就发展成为**库**或者**框架**，而**插件**是为库或者框架发布后做后期补充，可以有官网或者第三方提供的，有点外挂的意思，有时候一个模块就是一个文件，有时候一个文件里面有多个模块，把不同的文件按类别放置到不同的目录里，这个目录叫做**包**，框架改变了编码思想，库只是个工具你用或者不用不会影响你的编码思想

### 编码思想

jquery你用或者不用，你的编码思想都会是面向事件，开发一款插件中间用到什么库不重要，你会面向对象开发，如果用vue你要做的就是**面向数据**

### MVC由来

一个思想、是后端产物,是为了前后端分离，早期的开发组成↓

| 工种               | 涉及                                         |
| ------------------ | -------------------------------------------- |
| 后端、后台、程序员 | java(jsp+html)  php(php+html+js)             |
| 前台、前端、美工   | html+table+css                               |
| 编辑、如今叫小编   | 登录后端开发的管理平台，对网页内容做增删改查 |
| 美工、设计师       | ps，dw，flash                                |

### 后端MVC

不谈

### 前端MVC

对js分离，js业务如今是厉害了（繁杂了）

| 目录          | 分类      | 举例                           | 复用 |
| ------------- | --------- | ------------------------------ | ---- |
| model/xx.js   | 数据(M)   | ajax/jsonp/数据解析            | √    |
| view/xx.js    | 视图(V)   | 展示数据、创建元素，变色，运动 | √    |
| control/xx.js | 控制层(C) | 串业务,事件驱动                | ×    |

伪代码举例

```js
//M
function readBaidu(str,callback){..拿着需求str,求数据，调用回调带数据出去.}
//V
function writeLi(data,callback){...拿着数据写页面}
//C
window.onload=function(){
  oBtn.onclick=function(){
    readBaidu('xxx',function(res){
      writeLi(res);
      winObj.close()
    })
  }
}
```

### vue是MVC？

MVC衍生出很多变体，MVP,MVVM,MV*, **VUE是MVVM**，M----V----VM，M数据，V视图, VM是负责M与V相互通信

## 开发工具

[HbuilderX](https://www.dcloud.io/hbuilderx.html)

软件自动引入依赖

手动引入依赖

## hello world

vue的使用，简单理解，new出来一个Vue的实例，传一堆配置参数，控制一片html

```html
<script src="vue"></script>
<body>
  V
  <div id="app">
    要被控制的html{{key}}
  </div>
</body>
<script>
	let vm = new Vue({
    el:'#app'  //要控制的那片html代码
    data:{key:value}//数据  M
  })
</script>
```

## data选项

初始化数据位置，元数据，是vue实例的一个实例属性，所接受的数据类型，number/string/boolean/array/json/undefined/null

## 数据绑定

**插值表达式**

{{数据名}}	mustache语法   声明式渲染

**指令**

`v-text="数据名"`

`v-html="数据"`	非转义输出

**属性**

`v-bind:html属性="数据"`	属性值动态化
		`:html属性="数据"`  简写   

 `v-bind:[属性名]="数据"`	属性名动态化

## 列表渲染

把数据指定到一些dom中去渲染，推荐操作的数据类型：变量数组、对象、字符、数字

```html
<li v-for="值 in 数据">{{值}}</li>
<li v-for="值 of 数据">{{值}}</li>
<li v-for="(值,索引) in 数组">{{值}}/{{索引}}</li>
<li v-for="(对象,索引) in|of 数组">{{对象.key}}/{{索引}}</li>
<li v-for="(值,键) in 对象">
<li v-for="(数,索引) in 数字">
<li v-for="(单字符,索引) in 字符">
```

> 空数组，null，undefined不循环



## 条件渲染

一段dom可以根据数据有条件的渲染，使用指令`v-show`，或者`v-if`,对应的值是布尔

```html
<div v-show="true">box1</div>
<div v-if="false">box2</div>
```

`v-show` VS `v-if`

|          | v-show="布尔" | v-if="布尔"    |
| -------- | ------------- | -------------- |
| 区别     | 操作css       | 操作dom        |
| 场景     | 适合频繁切换  | 适合不频繁切换 |
| 性能消耗 | 初始渲染消耗  | 频繁切换消耗   |



## 事件绑定

vue通过`v-on`指令绑定事件，处理函数需要丢到一个`methods`选项当中去

```html
<button v-on:不带on的源生事件名="方法"..
<button	@事件名="方法"	...
<button	@事件名="方法(参数)" .....
<button	@事件名="方法($event,参数)"	.....
```

> 事件名 不带on

```js
new Vue({
  methods:{
    方法:function(ev,参数){业务}
    方法2(ev,参数){业务}
  }
})
```

> ev 事件对象，参数可以有多个
>
> **注意**：vue提供的选项的值如果是函数时，不可用箭头函数  , 会造成this丢失



## 双向绑定

视图控制数据，数据也可控制视图,可通过属性+事件绑定实现，也可以使用系统指令`v-model`,这个指令可以用在能生产数据的表单元素上

```html
<input type="text" :value="data数据" @input="checkIptValue">
<input type="text" :value="data数据" @input="data数据=$event.target.value">
<input type="text" v-model="data数据">
```

## 

## 类和实例API

Vue 是个类，所以Vue.protoname，是类属性|静态属性，Vue.methodname()是类方法|静态方法，new Vue返回的是实例，所以vm.$protoname是实例属性，vm.$methodname()是实例方法,同时vue类内部的this指向的是实例vm，实例vm.$protoname对等vue选项的key





## 非响应式情况

**情况要发生**

- 对数组使用了 非变异 (non-mutating method) 方法（返回的了新数组）
- 修改数组的长度时
- 修改数组索引上的值（根索引)
- 给对象添加了不存在的属性

**问题还是要解决**

Vue.set(数组, index, value)

vm|this.$set(对象, key, value)

this.$forceUpdate()  强制刷新

this|vm.$mount('#app')

**吃亏后的经验**

不要修改数组的根键,不要修改数组的长度,数据一开始都要声明在data选项内部，不要对数组使用非变异的api

## key的问题

给指定循环的dom一个key 是数据的id，确保key唯一性，避免数据错乱导致的视图问题,同时提供性能优化

## 模板表达式

插入数据的地方，可以出现表达式，但不是语句，如``{{数据+表达式}}``	``v-指令="数据+表达式"``

表达式:

```js
title + 'abc'
`${title}呵呵哒` 
bl ? '处' : '非处'
'i love you'.split(' ').reverse().join(' ')
```

## 计算属性

是一个函数,所依赖的元数据变化时，会再次执行，平时会缓存，是响应式的，需要在模板中渲染才可调用

**语法**

```js
//定义
computed:{
    计算属性: function(){return 返回值}		
}

//使用
使用:	{{计算属性}} |  v-指令="计算属性" | :[计算属性]="计算属性"
```

**computed	VS 	method**

| method             | computed                       |
| ------------------ | ------------------------------ |
| 方法会每次调用     | 基于它们的响应式依赖进行缓存的 |
| 一般               | 性能高                         |
| {{methodname()}}   | {{computedname}}               |
| 适合强制执行和渲染 | 适合做筛选                     |



**作业**

vue+bootstrap实现留言板

读[官方教程](https://cn.vuejs.org/v2/guide/)，只看课堂上讲过的，没讲的不要纠结



## 复习文档

[官方教程](https://cn.vuejs.org/v2/guide/)

多vue实例控制多片html，多实例不可嵌套，body和html不可作为被控制的dom根

计算属性的getter/setter

template元素

​	包裹元素,有逻辑，自身不渲染

if	+	v-else-if	+	v-else

双向绑定选择框

## 属性检测

需要在数据变化时执行异步或开销较大的操作时，而计算属性是同步的，这个时候需要属性检测watch

定义一个选项

```js
watch:{
  数据名:'method函数名'    //数据名==data的key
  数据名:函数体(new,old){}
  数据名:{
    handler:fn(new,old){},
    deep: true //深度检测
    immediate: true //首次运行
  }
}
```

注意：在变更 (不是替换) 对象或数组时，旧值将与新值相同，因为它们的引用指向同一个对象/数组。Vue 不会保留变更之前值的副本。

**计算属性 VS 函数 VS 属性检测**

|                        | 计算属性 | 函数 | 属性检测 |
| ---------------------- | -------- | ---- | -------- |
| 依赖模板调用且有返回值 | √        | -    | ×        |
| 是否缓存               | √        | ×    | √        |
| 异步                   | ×        | √    | √        |

## 样式操作

操作样式，就是属性绑定，只不过绑定的属性是class和style

**绑定姿势**

```vue
<div v-bind:class="数据|属性|变量|表达式"></div>
<div :class="数据|属性|变量|表达式"></div>

<div v-bind:style="数据|属性|变量|表达式"></div>
<div :style="数据|属性|变量|表达式"></div>
```

**属性值的类型支持**

字符/对象 / 数组

```vue
<div class="active t1"></div>
<div :class="'active t1'"></div>
<div :class="{active:true,t1:false}"></div>
<div :style="[{css属性名:值},{'xx-xx-xx'：值}]"></div>
```

## 指令

扩展了html语法功能,区别了普通的html属性，vue系统自带了指令，也可自定义指令来扩展，所有系统指令在官方文档的[API](https://cn.vuejs.org/v2/api/)处提供

### 其他系统指令

**v-pre**

保留字不编译，原样输出，跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译

**v-cloak**

防闪烁，模板没编译完，电脑配置差，有可能会看到{{}}，体验不佳，用css先隐藏，之后再显示，包括被包裹的子元素

**v-once**

只渲染元素一次。随后的重新渲染被忽略，包括被包裹的子元素。这可以用于优化更新性能

### 自定义指令

系统指令在不够用的情况下，考虑自定义，指令是个函数|对象,用来操作dom的, 里面的this 返回window

**全局定义**

```js
Vue.directive('指令名',函数(el,binding){})
```

[^指令名]: 不带v-
[^el]: 使用指令的DOM元素
[^binding]: 是个对象 含有调用指令时传入的 参数

**局部定义**

```js
new Vue({
	directives:{
    指令名	: function(el,binding){},//简写方式: bind + update
  	指令名(el,binding){},
    指令名:{
				inserted:fn(el,binding){}		//绑定指令的元素插入到父节点时调用  v-focus
				bind:fn	//指令第一次绑定到元素时调用	v-drag
				update:fn	//指令所在的元素的model层的数据，view有更新请求时
				componentUpdated:fn	//更新完成时
    }
  }
})
```

## 过滤器

对数据在模板中的表现过滤，符合预期，比如数据是0和1，想要表现成对错、成功失败、男女，数据需要过滤器来格式化，vue1.x版本有系统自带过滤器，vue2.x之后完全需要自定义，没有自带过滤器

**使用**

```vue
{{数据名 | 过滤器名(参数2,参数3)}}
:属性="数据| 过滤器名(参数2,参数3) "
v-指令名="数据 | 过滤器"
```

[^|]: 管道符

**全局定义**

```js
Vue.filter('过滤器名称',函数(要过滤的元数据,参数2,参数3,n){ return 过滤后的值})
```

**局部定义**

```js
filters:{
  过滤器名称:函数(要过滤的元数据,参数){}	//函数必须要有返回值
}
```

**预购阿里云服务器(ecs云服务器)**

[链接](https://www.aliyun.com/activity/daily/cloud?spm=5176.12901015.0.i12901015.6ab3525crKORBj) -》个人云 -》突发性能型 t5（74/年)-》系统（**centOs系统7**，认准**云服务器**-》控制台做一下实名认证

**域名购买**

[链接](https://promotion.aliyun.com/ntms/act/domainbrand.html?spm=5176.8112568.483655.2.67ae9ed5edEDHe)

## 数据交互

向服务器发送ajax请求，抓取数据，【vue：你看我看嘛】

### 解决方案

- 自行通过XMLHttpRequest对象封装一个ajax
- 使用第三方自带的ajax库，如：jquery 	×
- 把XMLHttpRequest，封装成一个promise
- 使用js原生自带的promise语法糖 [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- 使用第三方ajax封装成promise习惯的库，如：[vue-resource](https://www.npmjs.com/package/vue-resource)、[axios](https://www.npmjs.com/package/axios)

### 封装ajax到promise

```js
function maxios(options) {
  
  return new Promise((resolve, reject) => {
    
    //-1  整理options
    options = options || {};
    options.data = options.data || {};
    options.timeout = options.timeout || 0;
    options.method = options.method || 'get';

    //0 整理data
    var arr = [];
    for (var key in options.data) {
      arr.push(key + '=' + encodeURIComponent(options.data[key]));
    }
    var str = arr.join('&');

    //1	创建ajax对象
    if (window.XMLHttpRequest) {
      var oAjax = new XMLHttpRequest(); //[object XMLHttpRequest]
    } else {
      var oAjax = new ActiveXObject('Microsoft.XMLHTTP')
    }

    if (options.method == 'get') {
      //2.
      oAjax.open('get', options.url + '?' + str, true);
      //3.
      oAjax.send();
    } else {
      //2.
      oAjax.open('post', options.url, true);
      //设置请求头
      oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      oAjax.send(str); //身子
    }

    //3.5	超时
    if (options.timeout) {
      var timer = setTimeout(function() {
        alert('超时了');
        oAjax.abort(); //中断ajax请求	
      }, options.timeout);
    }


    //4.
    oAjax.onreadystatechange = function() { //当准备状态改变时
      if (oAjax.readyState == 4) { //成功失败都会有4
        clearTimeout(timer);
        if (oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304) {
          resolve(JSON.parse(oAjax.responseText))
        } else {
          reject(oAjax.status)
        }
      }
    };
  })
}
```



### axios

```js
this.$http|axios({配置}).then(成功回调(res)).catch(失败回调(res))
this.$http|axios.get(url,{配置}).then(成功回调(res)).catch(失败回调(res))
this.$http|axios.post(url,data,{配置}).then(成功回调(res)).catch(失败回调(res))
```

> 配置：
>
> url:“地址“
> 		method: “ 提交姿势”
> 		params：{} 地址栏携带的数据
> 		data:{} 非地址栏携带数据
>
> res: 响应体  数据是在res.data内部  vue-resource 返回的数据在res.body内部

### 访问本地json

```js
// axios({ //第三方的axios
  this.$http({ //把axios绑定到Vue的原型
    url: './data/user.json'
  }).then(
    res => console.log('maxios res', res)
  ).catch(
    err => console.log('maxios err', err)
  )
```

### 读取php接口get

```js
axios({
  url: 'http://localhost:80/php7/get.php',
  params: {//地址栏数据
    a: 11,
    b: 22
  }
}).then(
  res => this.list = res.data
)
```

### 跨域

有时，前端和后端的工程文件不在同一个域，也会出现跨域，以下是解决方案

#### 后端解决

部分接口允许

```js
//node 要允许的接口内部 
res.setHeader('Access-Control-Allow-Origin', req.headers.origin)

//php端
header('Access-Control-Allow-Origin:*');
```

所有接口允许

```js
//node端
let cors = require('cors');

app.use(cors({
  //允许所有前端域名
  "origin": ["http://localhost:8001","http://localhost:5000","http://localhost:8080"],  
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization','token']//被允许的post方式的请求头
}));


```

#### 前端解决

jsonp

浏览器装插件 正向代理

开发环境做代理（webpack，反向代理，客户端代理） 

### 读取php接口post

```js
let params = new URLSearchParams(); //创建一个url传输的实例
  params.append("a", "1"); //添加一个key/value
  params.append("b", "22"); //添加一个key/value
  // params.delete("a")  删除
  // params.set("a","11");//修改
  // params.has("a")  返回 true/false

axios({
  url: 'http://localhost:80/php7/post.php',
  method: 'POST', //提交姿势
  // data: {//非地址栏数据 ***
  //   a: 11,
  //   b: 22
  // },
  // data: "a=11&b=22",
  data: params,//URLSearchParams类型
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  } //php 默认要求传递请求头
}).then(
  res => this.list = res.data
)
```



### 读取node接口get

```js
axios({
  url: 'http://localhost:3001/api/follow',
  params: {
    _page: 1,
    _limit: 2
  }
}).then(
  res => this.list = res.data
)
```

### 读取node接口post

```js
//测试 formdata类型

let fileInput = document.getElementById('icon'); //抓取到file dom
let formData = new FormData(); //创建formData类型

formData.append("icon", fileInput.files[0]); //icon键的值是个文件体

formData.append("username", "damenmen")
formData.append("password", "damenmenda123")
formData.append("nikename", "我子个启的")

axios({
  url: 'http://localhost:3001/api/reg',
  data: formData,//formdata类型
  method: 'POST',
}).then(
  res => this.list = res.data
)
```

### 读取第三方接口

```js
axios({
  url: 'https://douban.uieee.com/v2/movie/in_theaters',
  params: {
    start: 0,
    count: 3
  }
}).then(
  res => this.list = res.data
)
```

### 发送jsonp请求

axios不支持jsonp请求，vue-resource支持，解决axios支持jsonp需要自行封装或使用第三方axios插件

**自行封装**

```js
//options url,data,timeout,success,error
function jsonp(options){
	
	options = options || {};
	if(!options.url){
		return;
	}
	options.data = options.data || {};
	options.cbName = options.cbName || "cb";
	options.timeout = options.timeout || 0;
	
	var fnName = "jsonp_"+ Math.random();
	fnName = fnName.replace("." ,"");
	options.data[options.cbName] = fnName;
	
	var arr = [];
	for(var i in options.data){
		arr.push(i + "=" + encodeURIComponent(options.data[i]));
	}
	var str = arr.join("&");
	
	
	window[fnName] = function (json){

		options.success && options.success(json);
		
		clearTimeout(timer);
		oHead.removeChild(oS);
		window[fnName] = null;
	}
		
	var oS = document.createElement("script");
	oS.src = options.url + "?" + str;
	var oHead = document.getElementsByTagName("head")[0];
	oHead.appendChild(oS);
	
	if(options.timeout){
		var timer = setTimeout(function(){
			options.error && options.error();
			//window[fnName] = null;
			window[fnName] = function(){};
		},options.timeout);
	}
		
}

axios.jsonp=jsonp//axios需要先引入
```

**使用自行封装**

```html
<script src="axios"></script>
<script src="自行封装的jsonp"></script>
<script>axios.jsonp({配置})</script>
```

**使用第三方axios的jsonp插件**

推荐 [axios-jsonp](https://www.npmjs.com/package/axios-jsonp)



**作业**

利用axios读取node|php接口，渲染一张页面，页面中要求有过滤器和计算属性级指令的使用，其他自由发挥

## 生命周期

每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做**生命周期钩子**的函数，这给了用户在不同阶段添加自己的代码的机会

[链接](https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

## 组件

Vue根实例表示1个应用，一个应用有若干个组件拼装而成

**使用组件**

```vue
<组件名></组件名>
<组件名/>
```

**定义组件**

```js
let 组件变量名= Vue.extend({
  template:'<div class="header">我是header组件</div>' //组件使用的模板
});

let 组件变量名={};  //√
```

**注册组件**

```js
//全局注册
Vue.component('组件名',组件变量名);

//局部注册
components:{ //选项
  组件名：组件变量名	//√
}
```

**组件数据**

一个组件的 **data 选项必须是一个函数,且要有返回object**，因此每个实例可以维护一份被返回对象的独立的拷贝，否则组件复用时，数据相互影响,也就是说**组件的作用域是独立的**

**组件模板**

外部模板,字符模板(行间模板|inline-template)

```html
//=========外部模板========

//模板定义1
<template id="id名">
	<div>...</div>
</tempalte>

//模板定义2
<script type="x-template" id='id名'></script>

<script>
let 组件变量名= {
  template:'#id名' //组件使用的外部模板
};
</script>


//=========字符模板========
<script>
let 组件变量名= Vue.extend({
  template:'<div>...</div>'
});
</script>
```

**组件避讳**

- 组件名不可和html同名

- 组件没有el选项，只有根实例存在el

- 组件的模板一定要有根元素

- 组件的data是个函数,需要返回对象

**书写风格**

- 组件变量名: 大驼峰  XxxXxx
- 组件名:  xx-xx | 大驼峰|app-header-nav

**单文件组件**

xx.vue,内部组成（script + template + style）

**vue-dev-tools安装**

方案1： 登录谷歌应用商城->索引vue-dev-tools->安装->重启浏览器

方案2：

```js
  https://github.com/vuejs/vue-devtools
  1. 	Clone this repo  downloadzip 到桌面
  2.	npm install  安装依赖
  3.	npm run build		build目录项目就有各种浏览器的安装包
  4.	打开 chrome -> 设置->更多工具->扩展应用->开发者模式->加载扩展程序->指向->build目录项目下的chrome
```



## 工程化开发环境

通过官方脚手架，**手动**搭建模块化，工程化，自动化开发环境

```js
vue -V  //查看版本 

//非3.x/4.x/5.x 时需要先卸载
npm unstall vue-cli -g  

//安装
npm install -g @vue/cli  //装3/4/5
npm install -g @vue/cli-init //桥接2  

//测试
vue -V

//初始开发环境
vue create 目录  |  .
 自定义->保留babel-vue2
cd 目录
npm run serve


//问题汇总。
1. vue : 无法加载文件 ...，因为在此系统上禁止运行脚本

解决: https://blog.csdn.net/wqnmlgbsz/article/details/100654258
hbx内部设置当前策略: Set-ExecutionPolicy -Scope CurrentUser -> RemoteSigned


2. @vue/cli安装失败
分析：安装全局包 登录账号要是admin  |  管理运行 cmd | powersheel ，node要全量安装
解决：
   a 换手机5g ，关防火墙，重装
   b node要全量安装
	 c hbx自动创建
   d npx vue create 目录
   e copy 被人 创建好的项目
```

HbuildX**自动**搭建模块化，工程化，自动化开发环境

```js
工作区-》右键-》创建项目-》普通项目-》vue-cli项目

//测试
工作区-》右键-》外部命令->npm run serve
```



**环境讲解**

main

```js
Vue.config.productionTip = false//设置为 false 以阻止 vue 在启动时生成生产提示。
render: h => h(App)
//↓
render: function(createElement){
  // return createElement('h3','内容')
  // return createElement(组件)
  return createElement(App)
}
```

**es6模块化复习**

输入

```js
import a from './mod/a.js'  //输入 默认输出 的任意类型
import {对外变量，a,b,c} from './mod/a.js'  //输入批量输出的 属性,需要一个对象包装
import * as a from './mod/a.js'  //输入批量输出的 属性,包装到一个对象里面使用
```

输出

```js
//批量输出  any  导出多次
export const 对外变量 = 模块内部的变量
export {a,b,c} //批量输出模块内部的属性

//默认输出  any   只能导出一次
export default any
```

**css 规则**

style-loader 插入到style标签，style标签多了选择器冲突问题就出来了，解决方案如下

```css
/* 方案1:	命名空间 推荐BEM命名风格*/
/*B__E--M  block 区域块  element 元素  midiler 描述|状态 */
.search{}
.search__input{}
.search__input--focus{}
.search__input--change{}
.search__button{}

//  B__E--M
//  b-b-b__e-e-e--m-m-m
```

```vue
<!--方案2 css模块化 -->
<template>
	<div :class="$style.box">
    ...
  </div>
</template>

<script>
export default {
  mounted(){
    this.$style //返回一个对象 {选择器:'混淆后的选择器',xx:oo}
  }
}
</script>

<style module>
  /* 注意： 选择器名（支持 id,类,或者id、类开头其他选择器) */
  .box{}
  #box2{}
  .box3 div{}
  #box3 div{}
</style>
```

```vue
<!--方案3 独立样式作用域-->
<template></template>
<script></script>
<style scoped></style>
```



## 组件通讯基础

### 父子（props）

父组件通过**属性绑定**，子组件通过选项props接收,props是响应式的，props完成单向下行绑定

**父传**

```vue
<子 :自定义属性="父数据"></..>
```

**子收**

```vue
props:['自定义属性']
props:{自定义属性:{type/default/required/validator...}}

<div>
  {{自定义属性}}
</div>
```

> 注意: 
>
> ​	props是只读的,不推荐改
>
> props命名:
>
> ​	props: ['postTitle']
> ​			<xx :post-title="hello!"></xx>

**奇葩情况**

在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态

### 子父

通过**自定义事件**实现，给子组件绑定自定义事件，子组件触发自定义事件时传递，事件函数是父组件方法，父方法负责接收

**父绑定父接收**

```vue
<template>
	..
	<子 @自定义事件="父方法"></..>
	..
</template>
<script>
export default {
  methods:{
    父方法(接受数据){处理}
  }
}
</script>
```

**子触发子传递**

```vue
<script>
	this.$emit('自定义事件',子.数据名)
</script>
```



### 集中管理（$root)

把数据存到根实例的data选项，其他组件直接修改或者使用

**定义**

```js
new Vue({
  data:{a:1}
})
```

**使用**

```js
//组件内部
this // 组件本身
this.$root // vm
this.xx //组件内部数据
this.$root.a //根实例数据

this.$root.proname=value  //修改

vm.xx  其他模块需要输入vm
```



## 内容分发

组件调用时，给其内部插入内容，如:``<组件>内容</组件>``，又叫：**插槽**，**投射**，插入到组件内容的可以是dom或组件

```vue
<组件>123</组件>
<组件><div>123</div></组件>
<组件><组件></组件></组件>

<组件名><元素 slot="槽名">...
<组件名><template #槽名>..
<组件名><template slot="槽名">...
<组件名><template v-slot:槽名>...
```

```vue
组件内部:	
<slot>匿名</slot>
<slot name=槽名></slot>
```

> 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译

## **ref**

引用元素（dom，组件<类，函数>）  

```vue
//父 template
<子 ref="自定义子名称"></..>
<div ref="自定义子名称">
  
</div>

//父 script
 this.$refs.自定义子名称.数据名
 this.$refs.自定义子名称.方法()
```

> $refs 只会在组件渲染完成之后生效，并且它们不是响应式的,避免在模板或计算属性中访问 $refs

## 第三方组件

使用一些别人开发好的单组件、组件库、插件、ui库，来提高项目开发进度，组件库通常是某公司开发并开源出来，获取方式可以通过npm、github查询，或者百度vue组件库，这里有一些[推荐1](https://www.jianshu.com/p/8ca46a6c0d58),、[推荐2](https://baijiahao.baidu.com/s?id=1629138670094636894&wfr=spider&for=pc)、[推荐3](http://tangjiusheng.com/vue/155.html?csdn)

**使用方式**

```js
//安装
npm i vue-swipe -D  安装

//引入
import './node_modules/vue-swipe/dist/vue-swipe.css'; 引入样式
import { Swipe, SwipeItem } from 'vue-swipe'; 引入组件

Vue.component('swipe', Swipe);    //注册安装到全局
Vue.component('swipe-item', SwipeItem);

//注册到选项components 私有使用   自写样式避免与vue-swiper.css冲突  scoped
```

**dom组件库类别**

pc端、后台管理

-  element-ui  饿了么 √
-  iview  个人
-  ant design 蚂蚁金服

移动端、客户端

- vant   有赞   电商 √
- mint-ui   饿了么
- vue-material
- muse-ui
- VUX
- cube-ui
- vonic
- Vue-Carbon 
- YDUI

通用

- bootstrap5/4
- ameizi

### elementUI

[官网](http://element.eleme.io)

**安装**

```js
npm i element-ui -S
```

**整体引入**

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

**按需引入**

```js
npm install babel-plugin-component -D

//修改babel配置 baberc|babel.config.js
//添加:
"plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]


//全局使用  √
import { Button } from 'element-ui';
Vue.component(Button.name, Button); | Vue.use(Button)
import 'element-ui/lib/theme-chalk/button.css';

//局部使用： 只有当前组件可使用
import { Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
components:{
  'el-button':Button,
  [Button.name]:Button,
},
```

**引入自定义主题**

和引入默认主题一样，在代码里直接引用「在线主题编辑器」或「命令行工具」生成的主题的 `theme/index.css` 文件即可。

```javascript
import '../theme/index.css' //整体，按需，都需要引入自定义的主题css文件
import ElementUI from 'element-ui'
import Vue from 'vue'

Vue.use(ElementUI)
```

### mintUI

[官网](https://mint-ui.github.io)

**安装**

```js
npm i mint-ui -S
```

**整体引入**

```js
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
```

**按需引入**

```js
//全局使用: npm install babel-plugin-component -D

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

//babel.config.js | babelrc 配置: 添加
"plugins": [
  [
    "component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
 ]
]

//组件内部引入,只有当前组件可使用
import { Button } from 'mint-ui';
components:{
  //'bulala':Button,
  [Button.name]:Button,
},
```



### vant

[官网](https://youzan.github.io/vant/#/zh-CN/)

**整体引入**

```js
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//全局使用: <van-xxx></van-xxx>
```

**按需引入**

```js
npm i babel-plugin-import -S

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};

//局部使用:
  import { Button, Cell } from 'vant';
  components:{Button,Cell}
  //<Button></Button>

//全局使用
  import { Button } from 'vant';
  Vue.use(Button); 
  //<van-xxx></van-xxx>
```

**组件样式顺序**

1. 修改主题 *
2. 使用props  权重**
3. 添加 class/style *
4. 审查元素，查询相关样式名，修改编译后的样式 + scoped ***
5. scope 影响
   	css解决： .a >>> .b { /* ... */ }   深度选择器
       		Sass解决: .a{ /deep/ .b{} }

**举例**

*app组件* 

​	Tabbar 标签栏

*home组件* 

​	Search 搜索/轮播/Tab 标签页

*category组件* 

​	Tab 标签页

*follow组件* 

​	pull-refresh 下拉刷新 / 单元格 cell

*column组件*

​	Popup 弹出层

*detail组件* 

​	NavBar 导航栏/栅格布局

*ShopCart组件* 

​	NavBar 导航栏/SwipeCell 滑动单元格>Card 卡片/SubmitBar 提交订单栏/stepper步进器

*user组件*

​	flex布局/van-tag标记/Panel 面板/cell-group 单元格组/ icon图标

*login组件*

​	NavBar 导航栏/field输入框

*reg组件*

​	van-uploader 文件上传



## 路由

用来SPA	(single page application   单页面应用)，页面跳转，[官网](https://router.vuejs.org/zh/)

### 单页VS多页

| **页面模式**      | **多页面模式（MPA Multi-page Application）**                 | **单页面模式（SPA Single-page Application）**                |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 页面组成          | 多个完整页面， 例如page1.html、page2.html等                  | 由一个初始页面和多个页面模块组成， 例如：index.html          |
| 公共文件加载      | 跳转页面前后，js/css/img等公用文件重新加载                   | js/css/img等公用文件只在加载初始页面时加载，更换页面内容前后无需重新加载 |
| 页面跳转/内容更新 | 页面通过window.location.href = "./page2.html"跳转            | 通过使用js方法，append/remove或者show/hide等方式来进行页面内容的更换 |
| 数据的传递        | 可以使用路径携带数据传递的方式，例如：http://index.html?account="123"&password=123456""，或者localstorage、cookie等存储方式 | 直接通过参数传递，或者全局变量的方式进行，因为都是在一个页面的脚本环境下 |
| 用户体验          | 如果页面加载的文件相对较大（多），页面切换加载会很慢         | 页面片段间切换较快，用户体验好，因为初次已经加载好相关文件。但是初次加载页面时需要调整优化，因为加载文件较多 |
| 场景              | 适用于高度追求高度支持搜索引擎的应用                         | 高要求的体验度，追求界面流畅的应用                           |
| 转场动画          | 不容易实现                                                   | 容易实现                                                     |

>  单页面模式：相对比较有优势，无论在用户体验还是页面切换的数据传递、页面切换动画，都可以有比较大的操作空间  多页面模式：比较适用于页面跳转较少，数据传递较少的项目中开发，否则使用cookie，localstorage进行数据传递，是一件很可怕而又不稳定的无奈选择

### 基础使用

**安装引入注册**

```js
npm i vue-router -S

// src/main.js
import router from './plugins/router.js'
new Vue({
  router
})
```

**配置路由**

```js
// src/plugins/router.js
import Vue from 'vue'

//1. 引入路由包
import VueRouter from 'vue-router'

//2. 安装插件包到Vue上, 
Vue.use(VueRouter);

//3. 路由配置
let routes = [
  {path: '/home',component: Home}, //route  一条路由的配置
]

//4.路由实例
let router = new VueRouter({ //插件路由对象
  // routes:routes
  routes,
});

//5.导出路由实例，让他去控制vue根
export default router
```

**声明式跳转**

```vue
<router-link to="/home">声明式跳转</router-link>
<router-link to="/home" tag='li'>声明式跳转</router-link>
<router-link to="/home" tag='li' active-class='类名'>声明式跳转</router-link>
<router-view>展示区</router-view>
```

> router-link 组件属性:
> 			tag='li' 指定编译后的标签
> 			active-class='类名' 	指定激活后的样式	模糊匹配
>			exact-active-class='类名' 	指定激活后的样式  严格匹配
> 			router-link和router-view组件是vue-router插件提供的

**重定向**

```js
//src/plugins/router.js  >  routers
{
  path: '/',  //默认页
  redirect: '/home' //配置型跳转
}, 
```

**404**

```js
{
  path: '*',
  component: NoPage组件
}
```

**路由嵌套**

```js
// src/plugins/router.js
routes=[
  {},
  {path:'xx/:变量',component:xx}, //在当前层级展示区展示
  {
    path:xx
    component:xx
    children:[  //子路由
      {path:':变量', ..}
	    {.. ，redirect: 'xx'} //默认页
    ]
  },
  {}
]
```

**路由传参**

```js
// 组件中
<router-link to='xx/参数?a=1&b=2'></..>
<router-link :to='{name:'名字',params:{id:1},query:{a:2,b:3}}'></..>
```

**命名路由**

```js
{path: '/home',component: Home, name:'名字'}, //route  一条路由的配置
```

**组件接参**

```js
//模板template
{{$route.params|query|path}} 
//组件 script
this.$route.params|query
```

**编程式跳转**

```js
this.$router.push(string|obj)
this.$router.push({name:'...'})   //添加一个路由 （记录到历史记录)
this.$router.replace({name:'...'})   //替换一个路由 （不记录到历史记录)
this.$router.go(-1|1)|back()  //回退/前进
```

**路由模式**

```js
// src/plugins/router.js

let router = new VueRouter({ //插件路由对象
  routes,
  // mode:'hash'//哈希模式   location.href
  mode:'history'//历史记录   history.pushState
});
```

### 扩展

#### 路由守卫

**全局守卫**

```js
// src/plugins/router.js

//前置
router.beforeEach((to, from, next) => {
  
  //	to: 目标路由 $route
  //	from: 当前路由 $route
  
  // next() 跳转  一定要调用
  next(false);//走不了
  next(true);//走你
  next('/login')//走哪
  next({path:'/detail/2',params:{},query:{}})//带点货
  
  // 守卫业务
  if(to.path=='/login' || to.path=='/reg' || to.path=='/register'){
    //判断是不是登录了
    //axios请求 携带 token 
    next()
  }else{
    next('/login');
  }
  
})

//后置
router.afterEach((to,from)=>{
  //全局后置守卫业务
})
```

**路由独享守卫**

```js
// src/plugins/router.js -> routes
{
  path: '/user',
  component: User,
  beforeEnter: (to,from,next)=>{ //路由独享守卫 前置 
    console.log('路由独享守卫');
    if(Math.random()<.5){
      next()
    }else{
      next('/login')
    }
  }
 },
```

> 独享，没有后置

**组件内部守卫**

```js
//组件内部钩子
beforeRouteEnter (to, from, next) {//前置   运行在beforeCreate 之前
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
},
beforeRouteUpdate (to, from, next) {
  // 在当前路由改变，但是该组件被复用时调用
  // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  // 可以访问组件实例 `this`
},
beforeRouteLeave (to, from, next) {//后置  运行在beforeDestory之前
  // 导航离开该组件的对应路由时调用
  // 可以访问组件实例 `this`
}
```

#### 路由元信息

定义路由的时候配置 `meta` 字段

```js
//src/plugins/router.js
{
  path: '/home',
  component: Home,
  meta: { requiresAuth: true }
}
```

访问 `meta` 字段

```js
this.$route.meta
to.meta from.meta
```

#### 滚动行为

SPA是单页面，只有一个滚动条，路由跳转时滚动条会影响到元素位置，使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样

对于所有路由导航，简单地让页面**滚动到顶部**

```js
// src/plugins/router.js
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    //计算位置
    return { x: 0, y: 0 }
  }
})
```

#### 数据获取

有时候，进入某个路由后，需要从服务器获取数据，解决的方案有**导航完成之后获取**，和**导航完成之前获取**

**导航完成之后获取**

组件会先渲染，哪怕空数据，之后数据回来会再次渲染，组件会渲染至少两次，数据没回来之前可以显示一个loading

**导航完成之前获取**

又叫**数据预载**,在前置守卫里面完成数据读取后再跳转到目标组件，数据未回来之前，画面不动，显示loading，组件只渲染一次

```js
beforeRouteEnter(to,from,next){
  //读取数据附加到目标路由上 to.query.数据名=拿到的数据  √
  //读取数据 next( _this => _this.属性="拿到的数据")   导致更新期触发
  // 本地存储
}
```





## 项目

### 技术栈选型

**前端**

@vue/cli

vue-router

axios 

vant

animate.css / vue-animate

vuex

全家桶

**后端**

nodejs

express

mongodb

bcryptjs

jsonwebtoken

multer

### 工作区目录

```js
dist
  |-...	 打包后，生产环境资源
public   不优化 数据资源
  |-data:
    |-写死数据.json
    ....
  |- 图/字体/MP4
src  开发环境 会优化  
  |-assets 全局会优化 ui资源 开发资源
    |-js
    |-css
    |-image
    |-...
  |-pages  页面 跳转 不通用
    |-	home.vue / follow.vue / column.vue / user.vue
    |-  detail.vue / login.vue / reg.vue 
    |-	goods 目录 
      |- comment.vue
      |- goods
        |- boots.vue
      |- goods.vue
			
  |-layouts 布局
    |- App.vue
		|- error.vue
  |-utils
    date.js
    fillzero.js
    ...
  |-plugins 插件配置
    axios
    router
  |-components 通用组件
    |- loading.vue 
    |- banner.vue /  Button.vue / Cell.vue / uc-input / uc-nav
		|- uc-toolbar/ frame-screen
		|- Button
			 |- Button.vue
 			 |- assets
					|- css/js/image
  main.js 模块主入口
package.json 依赖管理
```

### 开发

**准备工作**

移动端(设置视口,设置字体比例，基础样式normal，base)

**资源引入**

- index.html引入  不优化 全局
- main.js  引入 优化 全局
- 组件 引入 优化 全局，应该是私有

**资源指向**

相对路径 以当前文件为基准	绝对路径指向public， dom里面行间样式链接图片资源指向了pubic，前景图片都为数据默认指向public

**布局方案**

- 切图，需要设计稿，客户端开发时用到
- UI库，管理端开发时用到，常用的UI库(elementUI/mintUI/vantUI/antd...)
- 模板移植，老项目重构时用到

**布局组件/通用组件/页面组件**

01 全局资源 在主入口文件(index.html)引入
		02 全局资源 主程序(main.js|app.vue) | providerPlugin webpack插件
		03 自执行脚本，跟着要控制的元素走 ,为了迁移
		04 私有资源，进入组件内部, 添加scoped
		05 开发环境资源引入动作，取决于资源的输出方式，和业务自身的要求(如何暴露)

**组件事件**

```vue
<组件 @原生事件名.native="函数"></组件>
<组件 @自定义事件名="函数"></组件>
```

**组件双向绑定**

```vue
//父
<template>
	...
	<组件 v-mode=“父数据" />
  <组件 :value="父数据" @input="父函数" />
	...
</template>

//组件
<template>
	...
	<input type="text" :value="value" @input="$emit('input',$event.target.value)"/>
	...
</template>
<script>
	export default {
    props:{
      value:{
        type:String,
        default:''
      }
    }
  }
</script>
```

### 路由搭建

所有组件css 插入到 style标签，选择器会有机会出现重名,css 冲突,解决方案如下

- css命名空间   BEM √
- 模块化
- scoped 独立样式作用域

### 数据交互

**客户端代理**

```js
// 项目根/vue.config.js
module.exports = {
  devServer:{
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': { //axios访问 /api ==  target + /api
        target: 'http://localhost:3001',
        changeOrigin: true, //创建虚拟服务器 
        ws: true, //websocket代理
      },
      '/douban': { // axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&count=10'
        target: 'https://douban.uieee.com',
        changeOrigin: true,
        pathRewrite: { //路径替换
          '^/douban': '', // axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}
```

**列表&详情**

```js
home->axios->props(数据,数据标识)->cell  -> 路由传递 参数id 和 数据标识-> detail(参数id,数据标识->axios)

follow->axios->props(数据,数据标识)->cell  -> 路由传递 参数id 和 数据标识-> detail(参数id,数据标识->axios)

column->axios->props(数据,数据标识)->cell  -> 路由传递 参数id 和 数据标识-> detail(参数id,数据标识->axios)
```

**用户介权**

```j
登录
login-> axios （username、密码）->/api/login -> 返回token-》客户端种本地(cookie/localStorage)->跳转之前|user

//自动登录成功
/user->前置守卫->数据预载 api/user ->axios请求携带token（本地抓取）->成功->返回用户数据->传递给user组件

//注销: 
删除 本地 token, 跳转登录

//注册 同登录
formData 类型
```

### 拦截器

```js
import axios from 'axios';
import Vue from 'vue';
import router from './router.js'

//添加一个请求的拦截器
axios.interceptors.request.use(function(config) {
  //config 含有发出的请求的配置信息  axios(config)
  
  // 每次都自动携带token
  let token = window.localStorage.getItem('user')
  token = token ? JSON.parse(window.localStorage.getItem('user')).token : ''
  config.headers={
    token: token
  }
  return config;// 撒手放出经过配置的请求
}, function(error) {
  // 发出了错误的请求，拦截
  return Promise.reject(error);
});

// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
  //response  ~~ axios请求后的res
  // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
  //校验返回数据，token过期，路由跳转login,传递当前路由地址
  let currentRoute = router.currentRoute.fullPath;//获取当前路由全路径，string
  if(response.data.err===2 && !currentRoute.includes('/login')){
    router.replace({
      path:'/login',
      query:{p:currentRoute}
    })
  }
  
  return response;//奔向组件
}, function(error) {
  // 错误的响应，拦截
  return Promise.reject(error);
});


Vue.prototype.$axios=axios;
window.axios=axios;
export default axios;
```



### 集中式管理

bNav/bFoot/bLoading 使用$root管理

### 路由监听

属性检测  $route

```js
watch:{
	$route:{
    handler(nextValue,PrevValue){},
    immediate:true
  }
}
```

**作业**

班长整理: word|excel文档

张三
		github地址:  客户端  |   服务端 | ppt
		线上api文档 :      服务端在线api文档
		阿里云上线地址 :  zhangsan.top | 22.33.101.12:3001
		录制项目介绍的视频 (制作ppt,使用了哪些技术栈，完成哪些业务，讲解每个页面如何使用，如何实现，开发过程中遇到的坑及如何解决)



## 项目部署

### 阿里云部署

vue的项目打包(dist)，拷贝到node项目环境（public)下，再一同拷贝到购买的云服务器上，阿里云的服务器类型选择centos

#### 简洁型部署

**买服务器(机器)**

- 选择**云服务器ECS** | **centOs系统**，[学生特惠地址](https://promotion.aliyun.com/ntms/act/campus2018.html?spm=5176.230344.1224685.2.3b84443e9LLgUu)

- 支付宝-》注册-》实名认证填写身份证的信息-》ecs

- 重设密码初始化磁盘：ecs服务器->控制台

**使用finalShell连接服务器**

- [安装] finalShell

- 启动 finalShell-》新建会话-》SSH链接->主机：公网IP-》端口 ： 22-》用户名：root-》密码: **登录密码**

**給服务器安装环境**

```js
//安装node 在 finalShell里面

curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
yum install -y nodejs
检测: node -v
```

**上传代码**

- vue 打包:			``npm run build``  -> dist

- 创建空的node环境:		``express -e 目录``

- dist里面的文件  copy -> node 的 public下面

- 把node项目 -》 拖拽到 finalSheel/usr/local/创建目录/

- ```js
     //让阿里云支持node里面的3000端口
     找到控制台->安全组-》配置规则-》添加规则-》端口范围（1/3000）,授权对象(0.0.0.0/0)
     ```

- ```js
     finalShell 里面-> cd /usr/local/你的目录 -> npm start
     ```
     
     > 测试: 浏览器输入： http://公网IP:3000

#### 高要求部署

**买服务器(机器)**

- [成人特惠地址](https://promotion.aliyun.com/ntms/act/qwbk.html?spm=5176.8112568.420890.1.67ae9ed5edEDHe)，认准云服务器ECS/centos

- 支付宝-》注册-》实名认证填写身份证的信息-》ecs

- 手动停止服务器 ----> 初始化磁盘 ---> 重设密码（登录密码Root123-_-）

**使用finalShell连接服务器**

- 安装  finalShell

- 启动 finalShell-》新建会话-》主机：公网IP-》端口 ： 22-》用户名：root-》密码: **登录密码**

**給服务器安装环境**

```js
curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum install -y nodejs
检测: node -v
```

**上传代码**

- vue 打包:			``npm run build``  -> dist
- 本地测试生产环境（css有时打包后有出错) **可选**

```js
npm i serve -g
serve -s dist -l 8080
问题 ： 生产环境下 不能访问 3000
原因  : 生产环境下客户端代理是无效的
解决: copy到服务器端 | ngnix  来完成代理
```

- 拷贝 dist ->  node的public下面   + 本地测试(启动node服务)
- 整合好的node 拖到 finalShell 下面(不拽node_modules)

```js
//远程操作
npm i 
npm start

//让阿里云支持node里面的3000端口
找到控制台->安全组-》配置规则-》添加规则-》端口范围（1/3000）,授权对象(0.0.0.0/0)
```



**給服务器安装mongodb服务**

下载目录可任意选择，本人下载至 download

```
//center os 8.x 
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-4.0.9.tgz 
```

**解压**

```
sudo tar zxvf 下载下来的包名
```

**移动**

将解压后的文件夹移动至指定目录

```
  sudo mv 解压后目录/*  /usr/local/mongodb
```

**创建数据文件夹、日志文件和mongo配置文件**

```
sudo mkdir -p  /usr/local/mongodb/data
sudo touch /usr/local/mongodb/mongod.log
sudo touch /usr/local/mongodb/mongodb.conf

sudo chown `whoami` /usr/local/mongodb/data
sudo chown `whoami` /usr/local/mongodb/mongod.log   # 设置权限
sudo chown `whoami` /usr/local/mongodb/mongodb.conf   # 设置权限
```

**修改配置文件**

通过参数启动的方法较为麻烦，本文不赘述，仅提供通过配置文件启动的方法。

```
sudo vim /usr/local/mongodb/mongodb.conf
```

在配置文件中加入如下代码：

```
dbpath=/usr/local/mongodb/data
logpath=/usr/local/mongodb/mongod.log #以守护程序的方式启用，即在后台运行
fork = true 
```

保存后退出。

```
:wq
```

**启动和关闭**

进入到安装目录下

```
cd /usr/local/mongodb/bin

//安全组:27017
```

**启动**

```shell
//服务端
./mongod -f /usr/local/mongodb/mongodb.conf

//客户端
./mongo
```

**关闭**

```
./mongod -shutdown -dbpath=/usr/local/mongodb/data
```

**配置环境变量**

```
sudo vim ~/.bashrc
```

在最后添加

```
export PATH=$PATH:/usr/local/mongodb/bin
```

退出后记得使用source命令使设置生效

```
source ~/.bashrc
```

如此可直接在命令行使用mongo连接mongod服务

**本地数据库copy到远程库**

```js
//本地出库:需要先导出本地的数据 -> json
mongoexport -h 127.0.0.1 -d 库名 -c 集合名 -o 输出路径/xx.json

//上传: json -> finalShell上传到远端磁盘

//远端入库:  json -> 导入数据库
mongoimport -d 远端库 -c 集合 --file 服务器json路径/xx.json
```

**mongodb傻瓜安装**

```shell
#安装mongodb centos<8.x 傻瓜安装
sudo yum install mongodb-server mongodb -y      

#创建数据库目录和日志目录
mkdir -p /data/mongodb
mkdir -p /data/logs/mongodb

#启动数据库文件存储位置
mongod --fork --dbpath /data/mongodb --logpath /data/logs/mongodb/nodeapp.log

#创建远程数据库（与本地操作一样）可选 
use 库
db.集合.save
```



#### 问题汇总

**关闭finalShell ,服务断了**

```js
//安装pm2, nodejs服务器管理器
npm i pm2 -g

//启动服务器:
pm2 start ./bin/www.js 

//浏览器访问项目即可
http://公网IP:node端口

//如果想停掉服务器: 
pm2 stop all

```

> [pm2使用](https://blog.csdn.net/chengxuyuanyonghu/article/details/74910875)

**可以有多个app？使用一个实例？**

分析：app指向不同端口就好了
		解决：app指向不同端口，安全组里添加多个端口，pm2 进入到对应服务器位置，逐个启动，如果端口重复，先启用的应用会占用端口

**不想要端口可以？**

分析：使用http协议默认的80端口,使用https协议默认端口443
		解决： 修改本地的端口号指向80,安全组添加80   

**不使用ip，使用网址?**

分析： 是一个IP和域名关联的过程

解决： 必须得用于一个已经备过案的域名(未备案不可使用一级域名和省略端口)，[域名购买地址](https://promotion.aliyun.com/ntms/act/domainbrand.html?spm=5176.8112568.483655.2.67ae9ed5edEDHe)

备案: 	特惠专区-》域名与网站->域名新手多重礼（实名，备案15工作日）

域名解析：域名-》解析-》添加记录->记录值(ip)

```js
www：解析后的域名为www.aliyun.com。
@：直接解析主域名 aliyun.com。
二级域名：如：abc.aliyun.com，填写abc。
```

**不备案有什么影响**

小程序上线时不能部署,但不影响学习
		没有域名不便于宣传，解决：做成二维码
		无法使用https安全协议访问

**启用https访问**

流程：SSL证书->获取https免费证书->配置(node服务器使用https模块响应)

[获取https免费证书](https://yq.aliyun.com/articles/221596?spm=5176.10695662.1996646101.searchclickresult.1dec5d98Oy3WNE)

下载： 证书通过后->下载 other类型的 xx.key/xx.pem 下载到-> bin

配置node：

```js
var https = require('https');
const fs = require('fs');
const port=443;		
app.set('port', port);

const options = {
  key: fs.readFileSync('./bin/1826016_uncle9.top.key'),//指向key
  cert: fs.readFileSync('./bin/1826016_uncle9.top.pem'),
}; 
var server = https.createServer(options,app);//查看nodejs.cn>https模块|或已完成的node项目
```

安全组规则：添加443 ，443是https的默认端口

**在阿里云配置apache+mysql+php**

[参考资料](https://blog.csdn.net/chwshuang/article/details/52443274)

**历史记录模式路由，强刷找不到**

现象：客户端路由服务找/todos/42时，服务器会找/todos/42的接口（没有这个子服务接口)
		解决：服务器路由优先，找不到时，返回vue的前端index.html，交还给客户端路由

```js
// node项目 app.js

app.use(function(err, req, res, next) {
	...
  
  if(req.url.includes('/api')){//webApi接口错误
    res.send({
      err:1,
      msg:'不存在的接口名'
    })
  }else if(req.url.includes('/admin')){//服务端Api接口错误
    res.render('error');
  }else{//交还给客户端判断
    res.sendFile(path.join(__dirname, 'public','template', 'index.html'));
  }

});
```

> 也可以通过中间件  connect-history-api-fallback 实现
>

### 百度云部署

混合开发时会讲

### 腾讯云部署

小程序时会讲







## 事件高级

**行间事件**

```js
<div v-on:js原生事件名="方法名($event,参数)"></div>
<div @事件名="方法名($event,参数)"></div>
```

**自定义事件**

```js
//绑定
vm|组件.$on( '自定义事件名'|['自定义事件名1','自定义事件名2'], 回调(参数) )
<自定义组件  v-on:自定义事件="函数" />
<自定义组件  @自定义事件="函数" />

//销毁
vm|this.$off( '自定义事件名'|['自定义事件名1','自定义事件名2'])

//触发
vm|this.$emit(自定义事件名,参数)
```

> 自定义事件名：	使用 kebab-case 的事件名
>
> 只有被绑定方才可以触发
>
> 自定义的组件 触发原生事件需要native修饰符

**事件对象**

事件对象可以不传递，需要传递的场景，传参数同时使用事件对象时，如：``show($event,参数)``

**阻止冒泡**

```js
ev|e.cancelBubble=true //属性
ev.stopPropagation() //api
<div @click.stop="函数“ /> //修饰符
```

**默认行为**

```js
e|ev.preventDefault();   
<div @事件名.prevent="函数" />
```

**修饰符连缀**

```js
<div @事件.prevent.stop="..."    排名分先后
```

## 修饰符

**事件修饰符**

```vue
<div @click.修饰符="函数"></div>
     			 .capture 		使用事件捕获模式
					 .self				点到时才触发，不是从内部元素触发的
					 .once  			只会触发一次
					 .passive 		onScroll事件 结束时触发一次，不会频繁触发，移动端使用
					 
						.sync 				接受props被修改，实现表单之外的元素双绑
              //父组件
              <子组件 :title.sync="父数据"></子组件>

              //子组件
              this.$emit('update:title', newTitle)//通知父去修改title的数据==newTitle

```

**按键修饰符**

```vue
<!--普通键-->
<div @keyup.修饰符="函数"></div>
     			 .left 				上下左右
					 .enter				回车
					 .13  				可以使用键码

<!--系统键-->
<div @keyup.修饰符="函数"></div>
     			 .ctrl 				
					 .alt					
					 .shift  				
					 .exact  		严格		@键盘事件.修饰符1.修饰符2.exact    只有1+2才可触发 1+2+3不可以

<!--鼠标键-->
<div @mousedown.修饰符="函数"></div>
     			 .left 				
					 .right					
				 	 .middle	鼠标中键
```

**表单修饰符**

```vue
<input v-model.修饰符="数据"></div>
			 v-model.number 	提取数子
			 v-model.trim 		删除前后空格
			 v-model.lazy   	确认时才修改model数据
```

## 动态组件

 组件动态化(数据化)，在不同组件之间进行动态切换,component自身不会渲染

```vue
<component is="组件名"></component>
<component :is="'组件名'"></component>
```

> 注意: 动态组件切换时候，会有挂载和卸载发生
>
> ​		  切换的组件，需要引入+注册

## 缓存组件

keep-alive 包裹了目标组件，对目标组件缓存，后期不会触发卸载挂载，但会触发activated/deactivated
	keep-alive 不给属性时，默认内部出现过得组件，都会被缓存，子集任需包裹

```vue
<keep-alive
  :include="/组件名|组件名2/"  加入一部分
	:exclude="'组件名','组件名2'"  排除一部分
	:max = "数字"   最多可缓存的组件数,一旦这个数字达到了，时间戳最早出现的被卸载(遗忘)
>
	..目标组件..
</keep-alive>
```

> 组件钩子:
>
> ​	activated  活动组件  被缓存时起效果
> ​			deactivated 非活动组件
>
> 缓存组件可以包裹哪些组件
>
> ​	自定义普通组件、component系统组件，router-view第三方组件



## 动画

vue动画通过系统组件 transition 和 transition-group来介入，谁做动画，就用此组件就包着谁，可以包的元素有dom，组件。

vue不渲染只声明逻辑的系统元素 有 template，keep-alive，component，router-view。

### 实现方案

- css动画
  - css过渡动画transition，无跳变，关注打哪来1，到哪去4
  - css帧动画animation，有跳变，关注来了停哪2，到哪去4
  - animate.css 帧动画库
  - vue-animate
- js控制dom完成动画
  - 第三方的js动画库,推荐 [Velocity](http://velocityjs.org/)
    - Velocity(el,{css属性},{配置})
  - $('div').animate({css属性},{配置属性})
  - move(el,{css属性},{配置属性})

- canvas动画

### transition

**组件属性**

```vue
<tansition
	name =  "动画名"
  mode="out-in|in-out"  前后场景进退次序

  enter-class = "类名"
  enter-active-class = "类名"
  leave-class = "类名"
  leave-active-class = "类名"
>
	...要做动画的元素...
</tansition>
```

**样式**

```css
<style>
.动画名-enter{..}  入场前(打哪来)
.动画名-enter-active{..} 入场后(来了停哪)
.动画名-leave{..} 离场前
.动画名-leave-active{..} 离开场后(到哪去)
</style>
```

**组件事件**

```html
<tansition
	@before-enter="方法"   方法会接收做动画的元素(原生)
  @enter="方法"
  @after-enter="方法"
  @before-leave="方法"
  @leave="方法"
  @after-leave="方法"
>
	...要做动画的元素...
</tansition>
```

**velocity**

```vue
<template>
	...
	<tansition
    @before-enter="方法" 
    @after-leave="方法2"
  >
    ...要做动画的元素...
  </tansition>
	...
</template>
<script>
	export default {
    methods:{
      方法(el){//el==做动画的原生元素
        Velocity(el,{css属性},{配置})
      }
    }
  }
</script>
```

> 配置
>
> duration: 毫秒   事件
> 		easing: 动画类别 ''
> 		Queue
> 		complete:fn()
> 		progress:fn
> 		loop: 1 次  true无限
> 		delay: 毫秒 延时
> 		display:'none/block' 动画结束时是否可见
>
> leave(el,done){} 无缝动画 要加done

### transition-group

一组元素做动画，transition-group 包着一组元素  ，每个元素要有key ，无key部动画，其他的用法同transition

### 状态过渡

数据元素本身的动效

- 数字和运算

- 颜色的显示

- 元素的大小和其他的属性

  使用第三方库(TweenMax)来实现切换元素自身的过渡状态,具体查询 [官网](https://cn.vuejs.org/v2/guide/transitioning-state.html)



## 异步流程控制

### 串行有关联

一个请求结束，再发生下一个请求，出现回调地狱，async await 解决

```js
//时间=接口1+接口2
axios({
  url:'/api/home',
}).then(
  res=>axios({
    url:'/api/follow',
    params:{msg:res.data.msg}
  }).then(
    res=>console.log('follow',res.data)
  )
)

axios({
  url:'/api/home',
}).then(
  res=>axios({
    url:'/api/follow',
    params:{msg:res.data.msg}
  })
).then(
  res=>console.log('follow',res.data)
)
let xx = async ()=>{
let xx = async function(){
async function xx ()=>{
  let result = await axios({url:'/api/home'})
  console.log(1,result);
  let result2 = await axios({url:'/api/follow',params:{msg:result.data.msg})
  console.log(2,result2);
}

```

### 并行无关联

所有请求一起发生，组件有多次求取，会多次渲染，promise.all /axios.all解决

```js
//时间=用时最多的接口
axios({
  url:'/api/home',
}).then(
  res=>this.home=res.data.data
)

axios({
  url:'/api/follow',
}).then(
  res=>this.follow=res.data.data
)

Promise.all([axios({
  url:'/api/home',
}),axios({
  url:'/api/follow',
})]).then(
  res=>{
    this.home = res[0].data.data
    this.follow = res[1].data.data
  }
) 
//一次性 抓取多次请求的结果
axios.all([
  axios({url:'/api/home'}), 
  axios({url:'/api/follow'})
]).then(axios.spread((home, follow)=>{
   this.home=home.data.data;
   this.follow=follow.data.data;
}))
```

## 路由props接参

松耦合 组件便于不依赖路由，可单独测试

**路由配置**

```js
//布尔: props:true,  route.params->props 
//只传递params
{path:xx,component:xx, props:布尔}

//props:{id:xx,a:xx,b:xx}  route.query -> props，  配置不依赖$route
//只传递query
{path:xx,component:xx, props:对象}

//props:(route)=>({id:route.params.id, ...route.query})  依赖了路由的$route，通过函数介入，并返回给目标组件的props
{path:xx,component:xx, props:函数}
```

## vue-cli详解

官方自带的一款工程化、模块化、自动化开发环境工具（命令行），内部代码（webpack+node）

### 安装cli

```js
vue -V   //如果是非 3.x.x、4.x
npm uninstall vue-cli -g //卸载

npm install -g @vue/cli || yarn global add @vue/cli  //安装3.x/4.x到全局
npm install -g @vue/cli-init  ||  yarn global add @vue/cli-init //桥接2.x
```

### cli2

#### 创建项目简洁版

```js
vue init webpack-simple 目录|.  
	//webpack-simple | webpack | other  都是vue指向的模板 simple代表简洁模板， webpack是专业模板
cd 目录
npm install
npm run dev  运行
开发....
npm run build 打包
```

**package.json**

```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --port 8001 --open",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
  }
}

```

> 设置端口，开启浏览器

**webpack.config.js**

```js
devServer: {
  historyApiFallback: true,
  noInfo: true,
  overlay: true,
  port:8088,//开启端口
  open:false,//开启浏览器
  hot:false//模块热重载
}
```



#### 创建项目专业模板

```js
vue init webpack 目录|.  
cd 目录
npm run dev  运行
开发....
npm run build 打包
```

**工作区目录解析**

```js
build	项目配置
config   项目配置
static   静态资源目录 // cli4 node 的public
test	测试目录
```

**package.json**

```js
{
 "scripts": {
    "dev": "webpack-dev-server --port 8001 --open --inline --progress --config build/webpack.dev.conf.js",
  },
}
```

**config/index.js**

```js
module.exports = {
  dev: {//开发环境配置
    assetsSubDirectory: 'static',//静态资源位置
    proxyTable: {//客户端代理
      '/api':{//axios访问 /api/xx ==  target + /api/xx
        target:'http://localhost:3001',
        // target:'https://uncle9.top',
        changeOrigin:true,//创建虚拟服务器
        // ws:true,//websocket代理
      },
      '/douban':{// axios 访问 /douban == target + '/douban'
        target:'https://douban.uieee.com',
        changeOrigin:true,
        pathRewrite:{//路径替换
          '^/douban':'',// axios 访问/douban/v2/xx == target +'' + /v2
        }
      }
    },

    host: 'localhost', // 主机名，设置后可以替换process.env.HOST
    port: 8888, // 端口
    autoOpenBrowser: true,//开启浏览器
    errorOverlay: true,//错误遮罩的形式显示到网页上
    useEslint: false,// eslint检查的开启关闭
  },

  build: {//生产环境设置
    // 打包后index.html文件位置
    index: path.resolve(__dirname, '../dist/index.html'),
  }
}

```



### cli4

[官网](https://cli.vuejs.org/zh/)

#### 创建项目

```js
vue create 目录 | . //命令行

vue ui 		//图形UI形式
```

> 删除保存的预设配置:		.vuerc     C:\Users\Admin

#### 打包后

```js
npm run build
npx vue-cli-service build
```

> index.html 会带有注入的资源和 resource hint
> 		第三方库会被分到一个独立包以便更好的缓存
> 		小于 10kb 的静态资源会被内联在 JavaScript 中
> 		public 中的静态资源会被复制到输出目录中

​	

##### 插值

使用 lodash template 语法插入内容，``<link rel="icon" href="<%= BASE_URL %>favicon.ico">``打包后``<link rel=icon href=/favicon.ico>``

##### Preload

**优先加载**，是一种 resource hint，用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。 

vue 自动生成``<link href=/css/app.8c41b469.css rel=preload as=style>``

##### Prefetch

**预加载**，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。Vue CLI 应用会为所有作为 async chunk 生成的 JavaScript 文件 (通过动态 import() 按需 code splitting 的产物) 自动生成 prefetch 提示。

#### 资源安排

**相对路径 当前目录为基准**，**绝对路径 指向public**目录，在 JavaScript 被导入或在 template/CSS 中通过相**对路**径被引用。这类引用会被 webpack 处理。

放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理，url-loader 将小于 10kb 的资源内联，以减少 HTTP 请求的数量

推荐 资源放置到assets，脚本和样式表会被压缩且打包在一起，从而避免额外的网络请求。文件丢失会直接在编译时报错，而不是到了用户端才产生 404 错误。最终生成的文件名包含了内容哈希，因此你不必担心浏览器会缓存它们的老版本

何时使用 public 文件夹，你需要在构建输出中指定一个文件的名字。你有上千个图片，需要动态引用它们的路径。有些库可能和 webpack 不兼容，这时你除了将其用一个独立的 ``<script>`` 标签引入没有别的选择

#### 安装vue插件

通过 ``vue add 插件``	来安装vue插件，原理是找vue-cli-plugin-插件名 的**生成器**，自动在项目环境下生成开发小样，再去安装对应包，比普通``npm install``要多一个开发小样，不需要做基础工作

**举例**

```js
vue add router
//可以安装包，并创建文件(插件配置的基本小样)
```

> 注意：不是所有的包都可以 vue add 添加，vue生态圈的包才支持
>
> 解释：
>
> vue add 的设计意图是为了安装和调用 Vue CLI 插件。这不意味着替换掉普通的 npm 包。对于这些普通的 npm 包，你仍然需要选用包管理器。CLI 插件都会包含一个 (用来创建文件的) 生成器和一个 (用来调整 webpack 核心配置和注入命令的) 运行时插件

#### 配置方式

​	**package.json**

```js
scripts->vue-cli-service serve --port 8001 --open
```

​	**node_modules**

```js
node_modules/@vue/cli-service/lib/options
```

​	[**vue.config.js**](https://cli.vuejs.org/zh/config/#vue-config-js)

```js
module.exports={
  css: {
    extract:false,//css分离 生产环境下是 true，开发环境下是 false
    modules: true, //开启css模块化
    loaderOptions:{//重写 loader
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  devServer:{//开发环境设置
    // host: '0.0.0.0',//IP地址地址
    port: 8003,//端口
    open: true,//开浏览器
    // https: false,//开启https请求
    // proxy: null, // string | Object  //客户端代理
    proxy:{//代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
        '/api':{//axios访问 /api ==  target + /api  
          target:'https://uncle9.top',
          changeOrigin:true,//创建虚拟服务器 
          ws:true,//websocket代理
        },
        '/douban':{// axios 访问 /douban == target + '/douban'
          target:'https://api.douban.com',
          changeOrigin:true,
          pathRewrite:{//路径替换
            '^/douban':'',// axios 访问/douban/v2 == target + /v2
          }
        }
      }
  },
  lintOnSave:false, //关闭esling警告
  lintOnSave: process.env.NODE_ENV !== 'production', //生产构建时禁用
  productionSourceMap:false, //打包不携带map文件
}
```



### scss配置

**sass**

```SAS
$bg-color: #939
.box
  background: #bg-color
```

**scss**

```scss
$bg-color: #399;
.box{
  background: $bg-color;
}
```

#### scss for vue-cli4

**条件**

需要具备 node-sass / sass-loader  

**引入使用**

```vue
定义
<style lang="scss">.box{}</style>
引入
<xx class="box"...></xx>
    
模块化引入
<style lang="scss" module>.box{}</style>
使用
<xx class={$style.box}></xx>

独立作用域引入
<style lang="scss" scope>.box{}</style>
使用
<xx class=box></xx>
 
```

**引入sass全局变量**

定义主题： $theme-color: #300 -> base.scss -> assets

```js
//配置1	vue.config.js √
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // data: `@import "@/assets/css/base.scss"`		//sass-loader V7
        prependData: `   
          @import "@/assets/css/base.scss"; //v8
        `
      },
      
      sass: {
       additionalData: `   
          @import "@/assets/sass/base.scss"; // v9 | v10
        `
      }
    }
  }
}

//配置2 node_modules/@vue/cli-service/lib/options.js
css: {
  // extract: true,
  // modules: false,
  // localIdentName: '[name]_[local]_[hash:base64:5]',
  // sourceMap: false,
  loaderOptions: {
    sass: {
      data/prependData: `
        @import "@/assets/css/base.scss";
      `
    }
    scss: {
     additionalData: `   
        @import "@/assets/sass/base.scss"; // v9
      `
    }
  }
}
```



#### scss for vue-cli2

**条件**

需要安装node-sass / sass-loader  装好需配置

```js
//在build文件夹下的webpack.base.conf.js的rules里面添加配置
{
  test: /\.scss$/,
  loaders: ["style-loader", "css-loader", "sass-loader"]
}
```

> sass-loader版本要求 ， 8以下

**引入使用**

```vue
引入
<style lang="scss">.box{}</style>
使用
<xx class="box"...></xx>
    
模块化引入
<style lang="scss" module>.box{}</style>
使用
<xx class={$style.box}></xx>

独立作用域引入
<style lang="scss" scope>.box{}</style>
使用
<xx class=box></xx>
 
```

**引入sass全局变量**

定义主题： $theme-color: #300 -> base.scss -> assets

```js
//安装: sass-resources-loader
//配置webpack： 在build/utils.js中修改配置
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/assets/scss/base.scss')  //注意自己的路径
    }
  }
)
```



## 状态管理

打算开发中大型应用，集中式数据管理, 一处修改，多处使用，多个组件依赖于同一状态，来自不同组件的行为需要变更同一状态，生态环境给我们提供了官方插件vuex

**vuex相关成员**

``import Vuex from 'vuex'``， Vuex是个对象，相关成员如下

| 成员         | 用途                       |
| ------------ | -------------------------- |
| Store        | 类，构造状态管理的**实例** |
| mapActions   | 函数，通讯工具             |
| mapMutations | 函数，通讯工具             |
| mapGetters   | 函数，通讯工具             |
| mapState     | 函数，通讯工具             |

状态管理**实例**相关成员

| 成员     | 用途               |
| -------- | ------------------ |
| dispatch | 实例方法，通讯工具 |
| commit   | 实例方法，通讯工具 |
| state    | 属性，获取公共数据 |

**角色分工**

| component->    | actions->            | mutations->     | state       | <-getters->   | ->component  |
| -------------- | -------------------- | --------------- | ----------- | ------------- | ------------ |
| 发送请求       | 同步,异步业务        | 修改状态        | 状态        | 读取处理状态  | 渲染状态     |
| 学生           | 代课老师             | 校长            | 财务        | 班主任        | 学生         |
| dispatch->     | commit->             | state.key=value | {key:value} | state.key     | {{key}}      |
| mapActions->   |                      |                 |             |               | <-mapGetters |
| mapMutations-> | -------------------> |                 |             | <------------ | <-mapState   |
| commit->       | -------------------> |                 |             |               |              |
|                |                      |                 |             | <------------ | <-例属state  |

**交互流程图**

<img src="https://vuex.vuejs.org/flow.png" alt="vuex" style="zoom:50%;" />

**配置**

```js
// /src/main.js

//引入store实例
import store from './plugins/vuex.js'

new Vue({
  render: h => h(App),
  store//控制vue实例，为vue实例提供一个状态管理实例，管理整个vue公共状态
}).$mount('#app')

```

```js
// src/plugins/vuex.js

//配置 store
import Vue from 'vue';
import Vuex from 'vuex';//引入vuex包
Vue.use(Vuex);//安装插件到vue

import state from '../store/state.js'
import actions from '../store/actions.js'
import mutations from '../store/mutations.js'
import getters from '../store/getters.js'

let store = new Vuex.Store({//配置接受state等选项，值为对象
  state,mutations,
  getters,actions
});

export default store;//导出store实例给main.js
```

```js
// src/store/state.js

let state={
  count:0
}

export default state;
```

```js
// src/store/actions

let actions = {
  jia:({commit,state},payload)=>{
   	//state 公共状态 payload 负载  payload有没有传递时，是事件对象
    commit('increment',payload)
  }
};

export default actions;
```

```js
// src/store/mutations.js

let mutations={
  increment:(state,payload)=>{
    //state 仓库|公共数据 payload携带的负载 payload有没有传递时，是undefined
    state.count+=payload;//mutations 不做业务,只负责突变state
  }
};

export default mutations;
```

```js
// src/store/getters.js

let getters = {
  count:(state)=>{
    //返回处理后的state  ~~ computed  
    return state.count % 2 === 0 ? state.count + '偶数': state.count + '奇数'
  }
};
export default getters;
```

**组件中使用**

```vue
<!--声明式 发送请求-->
<div @click="类型(负载)"></div>

<!--展示状态-->
<div>{{count}}</div>
<div>{{$store.state.count}}</div>
```

```js
import {mapActions, mapMutations,mapState,mapGetters} from 'vuex'
import store from './plugins/vuex.js';
export default {
  name: 'app',
  methods:{
    jia(){
      //编程式 发送请求
      store | this.$store.commit('类型',数据/负载/payload) //-> mutations
			store | this.$store.dispatch('类型',数据/负载/payload)  //-> actions
			store | this.$store.dispatch|commit({type:'类型',payload:负载}) // payload={}
    }
  }, 
  
  //mapActions 用来接管methods,返回一个对象
  methods:mapActions([
    'jia'
  ])
  
  //mapMutations 接管methods,跳过actions找mutations
  methods:mapMutations([
    'increment'
  ])
  
  methods:{
    ...mapMutations([//mapMutations 返回来一个对象
      'increment'
    ]),
    ...mapActions(['jia']),//mapActions 返回来一个对象
      
    show(){//组件内部methods
      ...
    }
  },
    
  //mapGetters接管computed，返回一个对象
  computed:mapGetters([
      'count'
  ]),
  
  computed:mapState([
      'count'
  ]),
  computed:{
    ...mapState([//mapState返回一个对象
      'count'
    ]),
    ...mapGetters([
      'count'
    ])
    
    count(){ //组件内容计算属性
      return this.$store.state.count % 2 === 0 ? 
        this.$store.state.count + '偶数'	: 
      	this.$store.state.count + '奇数'
    }
  }
}

```



**vuex融入到项目当中**

**创建types**：收藏vuex提交类型，便于后期修改，和一些types工具检查

**路由监听**：找一个不会被卸载组件，做数据观测（属性检测 watch），``commit`` 到``mutations``突变state.nav数据

**拦截器**：请求和响应前后，``commit``->``mutations``突变state.bLoading

## token校验

**main.js获取本地token**

```js
//同步localStorage 到 vuex  防止强刷
let local = window.localStorage.getItem('user');

if(local){
  store.commit('USER',JSON.parse(local))
}
```

**拦截器携带到后端校验**

每次发生请求，都要携带token到后端校验是否过期，拦截器携带从vuex中抓取token ，带在headers，成功返回对应接口的数据， 失败返回未登录的信息，拦截器负责前端路由的跳转

```js
// src/plugins/axios.js

//axios的封装
import axios from 'axios';
import Vue from 'vue';
import store from './vuex.js'
import router from './router.js'

// 添加一个请求的拦截
axios.interceptors.request.use((config) => {
	
  //抓取公共state的token
  let token = store.state.user.token;
  token = token ? token : '';
  config.headers = {
    'token': token
  }
  store.commit('LOADING', true)//控制loading显示
  return config;
  
}, function(error) {
  // 请求错误时做点事
  return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function(response) {
  store.commit('LOADING', false)
  
  //token过期: 返回值2,当前路由不是login时跳转 
  if (response.data.err == 2 && !router.currentRoute.fullPath.includes('/login')) {
    router.push({
      path: '/login',
      query: {
        path: router.currentRoute.fullPath// 携带当前路径，便于登录后返回，登录时需要同步vuex和localStorage
      }
    })
  }
  return response;

}, function(error) {

  return Promise.reject(error);
  
});

Vue.prototype.$axios = axios;
window.axios = axios;

export default axios;

```

## vuex的module

由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成**模块（module）**。每个模块拥有自己的 state、mutation、action、getter

```js
// src/plugins/vuex.js
import goods from '../store/modules/goods.js'
import detail from '../store/modules/detail.js'

let store = new Vuex.Store({
  state,actions,mutations,getters,//根作用域
  modules:{//模块作用域
    goods,detail
  }
});
```

```js
//src/store/modules/goods.js
const state={
  list:[]
};

const actions={
  A_GOODS_LIST({dispatch,commit,getters,state,rootState,rootGetters},payload){
    //state,getters 为模块内部，局部
    commit('M_GOODS_LIST',payload)//  局部化访问模块内部
    dispatch('jia',payload,{root:true})//访问根 dispatch 或 commit
    dispatch('模块名/类型',payload)//模块访问模块
  },
  GLOBAL_A_JIA:{//模块注册全局 action
    root:true,
    handler({dispatch,commit,getters,state,rootGetters,rootState},payload){
      //state 模块 rootState根
    }
  }
};
const mutations={
  M_GOODS_LIST(state,payload){
    state.list=payload;//state是局部
  }
};
const getters={
  G_GOODS_LIST(state,getters,rootState,rootGetters){
    return '处理后的'+state.list
  }
};

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations,getters
}

```

```vue
//xx.vue
<template>
  <div id="app">
    <button @click="show">goods请求</button>
    <button @click="A_GOODS_LIST(5)">发送goods模块下的actions请求</button>
    <button @click="M_GOODS_LIST(5)">goods模块下的mutations请求</button>
    <br>
    goods模块下的getters属性: {{G_GOODS_LIST}}
    <br>
    goods模块下的state数据: {{$store.state.goods.list}}/{{list}}
    <br>
    <button @click="GLOBAL_A_JIA(3)">调用模块内部的全局actions</button>
  </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations, mapState,createNamespacedHelpers } from 'vuex'
//const { mapState, mapActions } = createNamespacedHelpers('模块名')
//使用 createNamespacedHelpers 创建基于某个命名空间辅助函数
export default {
  methods: {
    ...mapActions(['jia', 'jian', 'odd', 'yibu','GLOBAL_A_JIA']),//GLOBAL_A_JIA定义在模块内的全局actions
    ...mapActions('goods', ['A_GOODS_LIST']),//调用模块，添加了goods的命名空间
    ...mapMutations(['increment']),//全局
    ...mapMutations('detail', ['M_DETAIL_LIST']),//模块内部
    ...mapMutations('goods', ['M_GOODS_LIST']),//模块内部
    show () { 
      this.$store.dispatch('goods/A_GOODS_LIST', 12)//调用模块内部
      this.$store.commit('goods/M_GOODS_LIST', 12)
      this.$store.commit('increment', 12)//调用根
    },
    
  },
  computed: {
    ...mapGetters(['getCount']),//根
    ...mapGetters('goods', ['G_GOODS_LIST','type2']),//模块
    ...mapState(['count']),//根
    ...mapState('goods',['list']),//模块
    
    
    ...mapState({
      A: state => state.a, //抓全局，若有createNamespacedHelpers就取模块内部的state.a作为当前组件的A属性使用
      AA: state => state.goods.a//抓模块
    })
  },

  components: {
  }
}
</script>


//模块名不能与跟级别数据名 同名
```

## mutations无引用负载

actions内部要传给mutations的负载(payload),不可以是源state的引用，否则有时会出现非响应式情况，如**购物车**

## 组件懒加载

让路由配置时所指向的组件，无需一开始就加载到app.js，而是分块到不同的js文件，在路由访问时加载对应组件(js)，减少首屏压力，其原理是利用webpack对代码进行分割，异步调用组件，组件懒加载又叫异步路由、分片(块)打包、code splitting、异步组件

**webpack分片打包支持的语法**

```js
//方案1
import(目标组件地址).then(res=>res是加载后的组件)


//动态加载组件,挂载到页面当中去
import('../components/comp1.vue').then(
    res=> {

      //编程式的挂载到页面当中去
      let MyCompClass = Vue.extend(res.default)   // comp.vue == 要实例化的单文件组件  == res.default
      let myCompStance = new MyCompClass();//构造器需要  实例化
      myCompStance.$mount(); //挂载组件实例
      document.body.appendChild(myCompStance.$el)//添加当前组件的el元素到页面
    }
  )

//方案2
require([组件1,组件2],response)  response=加载结果 需要传入
```

**vue路由配置**

```js
// src/plugins/router.js

- import Home from 'xxx'
+ const home =()=>import(/* webpackChunkName: "groupname-home" */ "../components/home.vue");

//或者

{
  path:'/home',
  component:组件|函数
  component:(r) => { require(['../components/home.vue'],r) }  | home
},
```

> webpackChunkName: "groupname-home" 给块命名 | 同名会拆到一个块，可减少请求次数
>
> 在cli2里需要注意
>
> ​	import() 导入 需要安装 babel-plugin-syntax-dynamic-import
>
> ​	配置 babelrc  "plugins": ["syntax-dynamic-import"]
>
> 组件内部注册异步组件会按照要求到对应的js里面
>
> 组件内部同步注册组件会打包到app.js

**vue打包后的片名**

```js
//修改片名，需要修改 webpack 配置

//vue-cli1 、 2 
//src/build/webpack.prod.conf.js
  output:
        chunkFilename:'chunks/[name]-[chunkhash:8].js',//build之后的代码更便于识别

```



## echarts

**安装**

```js
npm i echarts --save
```

**引入**

```js
import echarts from 'echarts'
```

**使用**

```js
//实例化
let instance=echarts.init(dom元素);
//渲染
instance.setOption(数据)
//API: 
instance.showLoading()/hideLoading()/ on('事件名',方法)

//事件:
instance.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
});
```

[资料](https://echarts.apache.org/zh/index.html)

## 第三方地图

这里以百度地图为例，其他第三方地图库学习方法同理，登录[官网](http://lbsyun.baidu.com/)

- 注册百度账号
- 申请成为百度开发者  注册   **浏览器端**
- 获取服务密钥（ak mT8XXo4kIGkUfzFeInb0A6GvzS09WtNv）
- 使用相关服务功能

**引入库**

```vue
//vue的index.html cdn加入 
<script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=BNjoNa7koZgyuo24Y2Yz4LkZ1SLwGQxz"></script>
```

**使用**

```html
//装地图的id要有，元素要有高
<div id="map"></div>
```

[API](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html)	[事例](http://lbsyun.baidu.com/jsdemo.htm#a1_2)



## 组件通讯详解

### 贴层传递

#### 父子

##### **属性绑定+props接受**

```vue
// 父 template内
<子 :自定义属性="父数据"></..>

//子 script内
props:['自定义属性']   
props:{自定义属性:{type/default/required/...}}

//子 template内
<div>
  {{自定义属性}}
</div>
```

> props是只读的，使用场景: 电商 (松耦合)
>
> props命名
>
> ​	props: ['postTitle']
> ​        	<xx post-title="hello!"></xx>

##### **$parent**

```js
 //子模板: 
$parent.父数据

//子js: 
this.$parent.父数据
```

> 使用场景: 通用组件（紧耦合)
>
> 父更新，子更新

#### 子父

##### **自定义事件**

```vue
//父组件 template
<子 @自定义事件="父方法"></..>

//父组件 script
methods:{
	父方法(数据){梳理}
}

//子组件 template
<div @click="$emit('自定义事件',数据)"></div>
     
//子组件 script
this.$emit('自定义事件',子.数据名)
```

##### **$children**

```js
// 父组件
this.$children[索引].数据|方法
```

> 使用场景: 通用组件（紧耦合)
>
> 子更新，父不会更新

#### 中间人

兄弟A->**自定义事件**->中间人(父)->**props**->兄弟B

#### 路由

params,query,props(boolean,object,function)

### 隔层传递

#### $attrs/$listeners

假设A>B>C三个组件关系，A传递给C，越过中间的B，A作为祖先一定要传递(属性绑定)，C作为后代一定要接受(props)，中间层所有的组件值负责做二传手的动作,如下

```vue
<中间层组件 v-bind="$attrs" v-on="$listeners"></..>
```

> $attrs里面包含了所有上层组件传递过来的属性
> 		$listeners 里面包含了所有下层组件传递过来的事件
>
> $attrs 如果中间层组件没有接受props,给c的是所有props
> 		$listeners 所有上层组件可接受，后代组件都可触发
> 		紧密耦合

#### provide/inject

祖先组件中通过provide来提供变量，然后在子孙组件中通过inject来注入变量

```js
//祖先组件
export default {
  data(){
    return {数据}
  },
  provide: {
    name: '浪里行舟'
    name2: this.data数据
  }
}

//后代组件
export default {
  inject: ['name'],
  mounted () {
    console.log(this.name);  // 浪里行舟
  }
}
```

> 使用场景：为高阶插件/组件库提供用例
>
> provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的

### 集中式管理

#### 订阅发布模式

##### 第三方库

如：pubsub，会在react时讲

##### 公共总线

利用一个空vue实例的事件订阅和发布api实现

```js
//src/main.js
const dog = new Vue()
export default dog;

//组件内部
import dog from '...';
dog.$emit('事件',数据) //发布
dog.$on('事件',(接){处理})	//订阅
dog.$off('事件')	//取消订阅
```

#### $root

子组件内部直接找到根实例，访问，操作根data数据

```js
//src/main.js

new Vue({
  data:{key:value}
})

//组件内部
this.$root.key //获取
this.$root.key=value //修改
```

#### web存储

通过把数据存储在客户端浏览器本地的行为，cookie，localstroge，session

#### 状态管理

在浏览器下层，应用上层，打造一个“全局变量”，利用vuex插件管理

#### 数据库

利用本地，或者远端的数据库存储

### 永久与临时

**永久存储**

存库 , web/本地存储(localstroge,cookie),后端文件存储(writeFile)

**临时存储**

状态管理,订阅发布模式,公共总线(vue),$root(vue)

## 函数式组件

vue支持函数式组件，其意义在于快，特点是无状态，没有实例（没有 this），也没有生命周期，只是个函数，所以渲染开销也低很多，适用场景为展示、UI、纯渲染、自身无数据的组件，另有别名无状态组件、展示型组件、UI组件、哑组件、木偶组件的叫法

**定义**

```vue
<template functional>
	<div>
    <!--通过 组件上下文context-->
    <!--提供所有 prop 的对象-->
    {{props.key}}
    <!--对父组件的引用parent-->
    <button @click="parent.show">调用父方法</button>
  </div>
</template>

```



## 组件式开发

核心：props/event/slot/ref

**button组件**

- type	类型，可选值为 primary info warning danger	| default
- size	尺寸，可选值为 mini	| block | default
- square 是否为方形按钮 false
- round 是否为圆形按钮 false
- icon	图片链接，	String | ''

要实现的props,按钮文字使用slot

**input组件**

要实现的props，组件双绑

- label	输入框左侧文本	String
- placeholder	当前输入的值	String | Number
- type	可设置为原生类型, 如 number password	String	text
- border	是否显示内边框	Boolean	true
- round 是否为圆形按钮 false

```vue
<template>
	<!--组件上使用v-model-->
	<子 v-model="父数据"></子>
	<子 :value="父数据" @input="父函数"></子>
</template>

<script>
export default {
  props: ['value'],  // value 等于 父组件绑定的value,
  //触发父组件input事件，传当前输入值
  template:`
    <input
      :value="value"
      @input="$emit('input', $event.target.value)" 
    >
  `
}
</script>
```

**modal组件**

- events: on-cancel/on-confirm
- slot: name/ 默认内容
- props：width宽度 show是否显示
- computed: cptStyle 根据width

## **混入**

意义在于分发 Vue 组件中的可复用功能

**用法**

```js
//定义

mixin1 = {
  data: ...
  methods: ...
}
mixin2 = {...}


//组件内部混入 组件选项内
  mixins: [mixin,mixin2] 

//根实例混入
  new Vue({ mixins: [mixin,mixin2]})

//全局混入:
 	Vue.mixin(mixin1)
```

> 混入是钩子 都调用。
> 		混入的钩子先调用
> 		混入普通选项与组件选项合并，遇冲突，以组件为主

## 插件封装

[参考](https://cn.vuejs.org/v2/guide/plugins.html)

插件通常用来为 Vue 添加全局功能

- 添加全局方法或者属性。如: vue-custom-element
- 添加全局资源：指令/过滤器/过渡/组件等。如 vue-touch
- 通过全局混入来添加一些组件选项。如 vue-router
- 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。

实例化**组件**并单独**挂载到页面**

```js
let MyCompClass = Vue.extend(MyComp.vue)   // MyComp.vue == 要实例化的单文件组件
let myCompStance = new MyCompClass();//实例化
myCompStance.$mount(); //挂载组件实例
document.body.appendChild(myCompStance.$el)//添加当前组件的el元素到页面
```

**实例化组件** 操作内部成员

```js
myCompStance.propName
myCompStance.dataname=value
myCompStance.method
```

**toast**

```js
1. 定义 组件 情景状态 success error waring   computed
2. 组件自身点击后消失 methods
3. 组件内容 、情景状态、显示状态 支持编程式修改 和 声明式 props 传入式 更新
4. 支持 显示隐藏时 调用方 回调  watch
```

## 扩展

## 多页面

对于官网、电商类这种对SEO和首屏加载速度要求比较高的项目，可以采用多页面应用结构。如果是后台管理系统页面，不对外开放的系统，用单页面应用，推荐将系统拆分成单页面形式的多页面应用，如用户端和管理端

**vue.config.js**

```js
module.exports = {
    pages: {
        index: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pages/index/index.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'public/index.html',

            // npm run build 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'index.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性html文件 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index page config',

            // 包含的模块，可选项
            // chunks: ['index']
        },
        // 只有entry属性时，直接用字符串表示模块入口
        page1: {entry:'src/pages/page1/page1.js',title:'page1 config'},
        page2: {entry:'src/pages/page2/page2.js',title:'page2 config'},
        // page3: 'src/pages/page3/page3.js',
    }
}
```

public/index & other **html**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title %></title>
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
</head>

<body>
  <div id="index"></div>
</body>

</html>
```

pages/index/**index.js** & other pages

```js
import Vue from 'vue'
import Index from './Index.vue'
Vue.config.productionTip = false
new Vue({
  data:{
    msg:'index实例数据'
  },
  render: h => h(Index)
}).$mount('#index')
```

pages/index/**index.vue** & other component

```vue
<template>
    <div class="index">
        <app-header>公共头</app-header>
        <div class="wrap">
          <div>根实例数据：{{$root.$data.msg}}</div>
          <div>组件内部数据：{{msg2}}</div>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  name: "index",
  data(){
    return {
      msg2:'index。vue数据'
    }
  },
  components:{AppHeader},
  mounted(){
    console.log('index mounted');
  },
  // destroyed(){console.log('index destroyed');},
};
</script>

<style scoped>
</style>
```

**多页跳转**

```html
<!--components|layouts / header.vue -->
<template>
  
  <div class="app-header">
    <nav>
      <a href="/index.html">首页</a>
      <a href="/page1.html">页面1</a>
      <a href="/xx.html">页面2</a>
    </nav>
  </div>
    
</template>
```

**多页套单页**、**标题修改**和**路由实现**

```js
//多页中找到页面的vue实例(page.js)、或单页中找到vue实例(main.js)
//单页插件 覆盖html/htmlWebpackPlugin.options.title配置,

//main.js | page.js
Vue.use(require('vue-wechat-title'));

//标题路由配置时设定
const routes = [
  { path: '..'component: .., meta: { title: 'page2 登录' } }
]
```

```html
//需要在实例对应的根组件的template根元素下设置v-wechat-title="$route.meta.title"
// app.vue | page.vue
<template>
    <div id="page2" v-wechat-title="$route.meta.title">...</div>
</template>
```

## Vue-Socket

Vue-Socket.io + socket.io-client 见desktop/vue-socket

https://www.cnblogs.com/wind-lanyan/p/9061684.html)

## VUE+TS

### 环境安装

通过vue-cli4创建项目时，选择typescript创建即可

```js
npm i @vue/cli -g
vue create 目录
	// √ typescript
	// Use class-style component syntax?  是否使用类方式定义组件 yes
npm run serve
```

### 组件定义

#### 类式

```vue
<script lang="ts">
  //装饰器包
  import { Component, Vue } from 'vue-property-decorator';
  
  //一个类需要被装饰成一个vue组件
  @Component({})
  export default class App extends Vue{
    mounted():void{
      window.console.log('---------app--------------')
    }
  }
</script>
```



#### extend式

```vue
<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    mounted() {
      window.console.log('-------app--------')
    },
  })
</script>
```



#### 函数式

```vue
<template functional>
  <div>
    <span>{{props.p1}}</span>
    <button @click="parent.show($event,12)">按钮</button>
    footer........
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>
```



### 元数据

```ts
//类式：类内定义的实例属性
msg4: string = "bmw";
msg6: string = "依赖props的数据" + this.msg;
msg8: undefined = undefined; //undefined类型不响应式
msg9: any = null; //null类型响应式
msg11: Person = { id:1,name:'alex',age:19 };

interface Person{
  id:number;
  name:string;
  age:number;
  address?:string;
}

//extend式： 同vuejs
export default Vue.extend({
  data() {
    return {
      msg: "bmw",
    };
  }
})

//函数式： 不存在状态
```

### 实例方法

```ts
//类式：类内的实例方法，等同vue的methods选项key
show(arg: number = 12): void {
  window.console.log(arg);
  this.msg4;//访问实例属性==方式data元数据
  this.msg11.name = "修改后的name";//修改实例属性==修改data元数据
  this.bbox.style.background='blue';//引入ref访问dom
  let oDiv:HTMLDivElement=document.querySelector('#div1');//直接抓取dom
}

//extend式： 与vuejs用法一致
methods:{
  show(arg: number = 12):void{
    ...
  }
}
  
//函数式 不存在this，没有上下文
```

### 计算属性

```js
//类式
get cptMsg4(): string {
  return "计算后的" + this.msg4;
}

//extend式 与vuejs一致
computed: {
  cptMsg():string{
    return '计算后的'+this.msg3
  }
}

//函数式 不存在 没有this上下文
```

### 钩子函数

```js
//类式
mounted():void{
  ...
},

//extend式 与vuejs一致
mounted():void{
  ...
},

//函数式 不存在 没有this上下文
```

### props

```js
//类式
import {Prop} from "vue-property-decorator";

//! 操作符（Bang Operator）显式地告诉编译器它的值不为空
@Prop() readonly msg!: string; 

//默认值p2
@Prop({ default: "p2" }) readonly msg2: string | undefined; 

//默认值p10,传递类型为数字？
@Prop({ default: 110, type: Number }) readonly msg10!: number; 

//会报警告，避免直接改变属性，因为当父组件重新呈现时，该值将被覆盖

@Prop() private msg3: string = "qqq"; 



//extend式 与vuejs一致
props:{
  prop1:{
    type:String,
    default:'bmw',
    // required:true,
    validator:(val:string)=>val.length>2
  }
}

//函数式 与vuejs一致
<template functional>
  <div>
    <span>{{props.p1}}</span>
    <button @click="parent.show($event,12)">按钮</button>
  </div>
</template>
```



### 属性检测

```ts
//类式
import { Component, Prop, Watch, Ref, Vue } from "vue-property-decorator";

//观察msg4数据
@Watch("msg4")
onMsg3Change(newValue: string, oldValue: string): void {
  //newValue变后,oldValue变前
  window.console.log("watch msg4");
}

// immediate 首次运行 deep深度观测
@Watch("msg11", { immediate: true, deep: true })
onMsg11Change(newValue: number, oldValue: number): void {
  window.console.log("watch msg11");
}

//extend式 与vuejs一致
watch:{
  msg4(newValue: string, oldValue: string){
    ...
  }
}
//函数式 不存在，没有this上下文
```

### ref

```ts
//类式
  import {Ref} from "vue-property-decorator";

  //refs引用 
  @Ref('box') readonly bbox!:HTMLDivElement;

  //dom: 
	<div id="div1" ref="box">ref</div>

  //ref访问
  this.bbox.style.background='blue';

//extend式 与vuejs一致
  <div id="div1" ref="box">ref</div>
  this.box.style.background='blue';

//函数式 不存在，没有this上下文
```



### 指令、过滤器

**全局**

ts和js无变化

**局部**

```js
//类式
  @Component({
    directives: {//局部指令
      direc2:(el,binding)=>window.console.log('direc2')
    },
    filters: {//局部过滤器
      filt2(data:string,arg:number){
        window.console.log('filt2',data,arg)
        return '过滤器的数据'
      }
    }
  })
  export default class HelloWorld....
  
//extend式 与vuejs一致
  filters: {
    filt1:(data:any,arg:any):string=>'处理后的数据'
  },
  directives: {
    direc1:(el,binding)=>window.consoe.log('direc1')
  }
```

### vue-router

路由的使用方式与vuejs一致，源包自带类型检查文件 xx.d.ts

**异步路由**

```js
let routes = [
  { path: '/goods', component: () => import('../pages/Goods.vue') },
  { path: '/reg', component: (r:any) =>{require(['../pages/Reg.vue'],r)} },
];
```

**全局守卫**

```js
//router.js
router.beforeEach((to,from,next)=>{
  console.log('全局前置守卫')
  next()
})
```

**路由独享守卫**

```ts
//router.js
{ 
  path: '/user', 
  component: User, 
  beforeEnter:(to:Route,from:Route,next:Function)=>{
    ...
  } 
}
```

**组件内部守卫**

```js
//类式
//需写在装饰器里
@Component({
  beforeRouteLeave(to:Route, from:Route, next:Function) {
    let goout: boolean = window.confirm(to.path);
    goout ? next() : next(false);
  },
  beforeRouteEnter(to:Route,from:Route,next:Function){
    let goout: boolean = window.confirm(to.path);
    goout ? next() : next(false);
  }
})

//extend式
//与vuejs写法一致
export default Vue.extend({
  beforeRouteLeave(to:Route, from:Route, next:Function) {
    let goout: boolean = window.confirm(to.path);
    goout ? next() : next(false);
  },
  beforeRouteEnter(to:Route,from:Route,next:Function){
    let goout: boolean = window.confirm(to.path);
    goout ? next() : next(false);
  }
})

//函数式 	不存在，没有构子
```



### axios

有些插件 需要安装types ，axios需要安装 @types/axios 来支持类型检查

**客户端代理**

```js
//   /vue.config.js

module.exports = {
  devServer:{
    //设置代理
    proxy: { //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
      '/api': { //axios访问 /api ==  target + /api
        target: 'http://localhost:3001',
        changeOrigin: true, //创建虚拟服务器 
        ws: true, //websocket代理
      },
      '/douban': { // axios 访问 /douban == target + '/v2/movie/in_theaters?start=0&count=10'
        target: 'https://douban.uieee.com',
        changeOrigin: true,
        pathRewrite: { //路径替换
          '^/douban': '', // axios 访问/douban/v2 == target + /v2
        }
      }
    }
  }
}
```

**axios封装**

```ts
import axios from 'axios';
import router from './router'
import { TUser } from '@/types';

// 添加一个请求的拦截
axios.interceptors.request.use((config:AxiosRequestConfig) => {

  //1抓取本地token，携带在请求头里
  let user:TUser = window.localStorage.getItem('user');
  user = user ? JSON.parse(user) : '';
  config.headers={'token': user?.token}
  
	//显示loading...

  return config;

}, function(error) {
  return Promise.reject(error);
});

//添加一个响应拦截
axios.interceptors.response.use(function(response:AxiosResponse<any>) {
  //token过期: 返回值2,当前路由不是login时跳转 
  if (response.data.err == 2 && !router.currentRoute.fullPath.includes('/login')) {
    router.push({
      path: '/login',
      query: {
        path: router.currentRoute.fullPath
      }
    })
  }
  return response;
}, function(error) {
  return Promise.reject(error);
});

window.axios = axios;  //希望全局使用axios 需要declare global
export default axios;

```

```ts
// src/types/index.ts
interface IUser {//通用，可在外部定义，或外部使用
  err:number;
  data:{
    _id:string;
    nikename:string;
    fans:number;
    follow:number;
    time:number;
    icon:string;
  };
  token:string;
  msg:string;
}

type TUser = Partial<IUser> & string | null //映射 联合

declare global { //定义到全局
  interface Window {//给window接口添加axios方法函数
    axios(config: AxiosRequestConfig): AxiosPromise<any>
  }
}

export {TUser}
```

**登录时种token**

```ts
login():void{
  window.axios({
    url:'/api/login',
    method:'post',
    data:{username:'chenghao',password:'chenghao123'}
  }).then(
    res=>{
      if(res.data.err==0){
        window.localStorage.setItem('user',JSON.stringify(res.data));
        this.$router.replace(this.$route.query.path as string)
      }
    }
  )
}
```

```ts
// src/types/index.ts
interface HomeItem{
  _id:string;
  title:string;
  des:string;
  time:string;
}
```



### vuex

源包自带类型检查文件 xx.d.ts，无需安装types，需要使用装饰器需下载第三方包vuex-class

**state**

```ts
import { IStoreState } from '@/types'

let state:IStoreState={
  home: [{a:1}],
  bLoading: true,
}

export default state

interface IStoreState {
  home:object[],
  bLoading:Boolean
}
```

**actions**

```ts
import {IStoreState} from '../types'

type TAction={
  commit:Function;
  state:IStoreState
}

export default {
  UPDATE_HOME: ({ commit, state }:TAction, payload:object) => {
    window.axios({
      url:'/api/goods/home',
      params:payload
    }).then(
      res=>{
        if(res.data.err==0){
          console.log(res.data.data)
          commit('UPDATE_HOME',res.data.data)
        }
      }
    )
  }
}
```

**mutations**

```ts
import { IStoreState } from '@/types';

export default {
  UPDATE_HOME: (state:IStoreState, payload:object[]) => state.home = payload,
  UPDATE_LOADING: (state:IStoreState, payload:boolean) => state.bLoading = payload
}
```

**getters**

```ts
import { IStoreState } from '@/types';

export default {
  bLoading: (state:IStoreState) => state.bLoading ? '加载中' : '加载完成'
}
```

**组件内使用**

```ts
//类式
import {
  State,
  Getter,
  Action,
  Mutation
} from 'vuex-class'

//装饰实例属性，状态来自公共state
@State bLoading:boolean|undefined//装饰一个实例属性bNav引用到state.bNav
@State('home') stateHome!:object[];//外部state.home 做 组件内的stateHome使用
@State(state=>state.home[0]) h1?:object;//回调形式返回state的某个值


//把getters的key装饰到组件实例属性
@Getter('bLoading') getterLoading!:string;;//抓取getters的key，作为getterLoading使用
@Getter bLoading!:string;//抓取getters的key，作为组件实例属性使用

//装饰actions的type，作为组件实例属性
@Action('UPDATE_HOME') udpateHome!:(payload:object)=>void; // this.updateHome(..)调用
@Action UPDATE_HOME!:(payload:object)=>void;//this.UPDATE_HOME(..) 调用

//装饰mutations的type，作为组件实例属性
@Mutation('UPDATE_LOADING') upLoading!:(payload:boolean)=>void;//this.upLoading(true) 调用
@Mutation UPDATE_LOADING!:(payload:boolean)=>void;//this.UPDATE_NAV(true) 调用

//template内调用
<button @click="UPDATE_LOADING(true)">按钮</button>
```

改装登录后写入localStorage并同步vuex，拦截器读取vuex，强刷后读取localStorage并同步vuex，注销时，删除vuex和localStorage







## 服务端渲染Nuxt

### 服务端渲染 vs 客户端渲染

### 什么是 CSR ?

CSR => client-side-render，即客户端渲染。具体过程如下：

- 用户请求页面，返回页面。此时页面只是模版页面
- 浏览器解析页面代码，读到js代码时，会根据我们所写的接口去请求数据
- 得到返回数据后使用模版（vue/react/ng/art-template）进行渲染
- [网站举例](https://main.m.taobao.com/?sprefer=sypc00)

### 什么是 SSR ?

SSR => server-side-render，即服务器端渲染。具体过程如下：

- 用户请求页面
- 后端取到准备好的数据，渲染到我们自己写的服务器模版（next/nuxt/ejs）中，准备好html结构与相应数据后返回给浏览器

### CSR & SSR 优缺点对比

|      | 优点                       | 缺点                                     |
| :--- | :------------------------- | :--------------------------------------- |
| CSR  | 减轻服务器压力，前后端分离 | 对seo不友好（不利于爬虫爬取）            |
| SSR  | 对seo友好                  | 对服务器性能有一定要求，不利于前后端分离 |

其实在真正开发中通常是 csr 与 ssr 相结合使用，前端使用cdn缓存，后端使用nginx缓存。这样是最优的解决方案。上两张图大家对比理解：



![img](https:////upload-images.jianshu.io/upload_images/2763803-03e5b46f84f14a54.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)



![img](https:////upload-images.jianshu.io/upload_images/2763803-670c1d0afadc4ce1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)

### Vue.js 服务器端渲染

#### 安装

```bash
npm init -y
npm install vue vue-server-renderer --save
```

#### 渲染一个 Vue 实例

```js
// 第 1 步：创建一个 Vue 实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

// 第 2 步：创建一个 renderer
const renderer = require('vue-server-renderer').createRenderer()

// 第 3 步：将 Vue 实例渲染为 HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-rendered="true">Hello World</div>
})

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})
```

#### 与服务器集成

在 Node.js 服务器中使用时相当简单直接，例如 [Express](https://expressjs.com/)：

```bash
npm install express --save
```

------

```js
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(3000)
```

### Nuxt 框架

[官方文档](https://zh.nuxtjs.org/guide)

简单来说，**Nuxt**就是基于**Vue**的一个应用框架，采用**服务端渲染**，让你的**SPA应用(Vue)**也可以拥有**SEO**

Vue 开发一个单页面应用，相信很多前端工程师都已经学会了，但是单页面应用有一个致命的缺点，就是 SEO 极不友好。除非，vue 能在服务端渲染（ssr）并直接返回已经渲染好的页面，而并非只是一个单纯的 `<div id="app"></div>`。

[Nuxt.js](https://zh.nuxtjs.org/) 就是一个极简的 vue 版的 ssr 框架。基于它，我们可以快速开发一个基于 vue 的 ssr 单页面应用。

#### 安装

Nuxt.js 官方提供了一个模板，可以使用 vue-cli 直接安装。

```
$ vue init nuxt-community/starter-template project-name
```

或者通过

```
npm install npx
npx create-nuxt-app xxx
Project name nuxttest

? Project description My laudable Nuxt.js project
? Author name uncle9
? Choose the package manager Npm
? Choose UI framework None
? Choose custom server framework Express
? Choose Nuxt.js modules Axios
? Choose linting tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Choose test framework None
? Choose rendering mode Universal (SSR)
? Choose development tools jsconfig.json (Recommended for VS Code)
```

> 注意： mode 选择 同构 universal

#### 目录结构

```
.
├── README.md
├── assets
├── components
├── layouts
├── middleware
├── node_modules
├── nuxt.config.js
├── package.json
├── pages
├── plugins
├── static
├── store
└── yarn.lock
```

其中：

1. **assets**: 资源文件。放置需要经过 webpack 打包处理的资源文件，如 scss，图片，字体等。

2. **components**: vue组件。这里存放在页面中，可以复用的组件,不支持服务器端的钩子。

3. **layouts**: 布局。页面都需要有一个布局，默认为 default。它规定了一个页面如何布局页面。所有页面都会加载在布局页面中的 `<nuxt />` 标签中。如果需要在普通页面中使用下级路由，则需要在页面中添加 `<nuxt-child />`。该目录名为Nuxt.js保留的，不可更改。在 layout 中我们可以放入一些每个页面都会以用到的组件，比如 header & footer。当然如果你不想使用已生成的 layout 组件，你可以重新创建一个，比如 blank.vue 一般不需要引入 header&footer 的页面可以使用 blank.vue 这个 layout 组件。代码如下：

   ```
   layout: 'blank'
   ```

4. **middleware**: 中间件。存放中间件。可以在页面中调用： `middleware: 'middlewareName'` 。

5. **pages**: 页面。一个 vue 文件即为一个页面。index.vue 为根页面。

   1. 若需要二级页面，则添加文件夹即可。
   2. 如果页面的名称类似于 `_id.vue` （以 `_` 开头），则为动态路由页面，`_` 后为匹配的变量（params）。

   3. 若变量是必须的，则在文件夹下建立空文件 `index.vue`。更多的配置请移步至 [官网](https://zh.nuxtjs.org/guide/routing) 。

7. **plugin**: 插件。用于组织和配置，那些需要在 `根vue.js应用` 实例化之前需要运行的 Javascript 插件，需要配合nuxt.config.js

8. **static**: 静态文件。放置不需要经过 webpack 打包的静态资源。如一些 js, css 库。

9. **store**: Nuxt.js 框架集成了 [Vuex 状态树](http://vuex.vuejs.org/) 的相关功能配置，在 `store` 目录下创建一个 `index.js` 文件可激活这些配置。

10. **nuxt.config.js**: `nuxt.config.js` 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。具体配置请移步至 [官网](https://zh.nuxtjs.org/guide/configuration)。



#### 生命周期

**Vue**的生命周期全都跑在**客户端(浏览器)**，而**Nuxt**的生命周期在**服务端(Node)，客户端，甚至两边都在:**





![img](https:////upload-images.jianshu.io/upload_images/5531211-d1a3e5b36ee03f08.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/460/format/webp)

红框内的是Nuxt的生命周期首次运行在服务端，之后运行在vue组件创建之前，黄框内同时运行在服务端&&客户端上，绿框内则运行在客户端

##### nuxtServerInit

请求先到达 nuxtServerInit 方法，图中也表明了适用场景是对 store 操作，函数仅在每个服务器端渲染中运行 且运行一次，只能定义在store的主模板当中

```
// store/index.js

export const actions = {
  nuxtServerInit(store, {app:{$cookies},route,$axios,req,res,redirect}) {

    let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'未登录',token:''};
    // store.dispatch('user/A_UPDATE_USER',user)  user== store/user.js
    store.commit('user/M_UPDATE_USER',user)
  }
}

```

##### middleware

下来请求到达 middleware ，允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。可以运行在全局，或者某个页面组件之前，不会在components组件内部运行

```js
//middleware/auth.js
export default ({app:{$cookies},store,redirect,route,$axios,params,query,req,res})=>{
  
}

//nuxt.conig.js
router: {
  middleware: 'auth' //全局守卫 运行一组页面渲染之前
}

//layouts/a.vue  运行在一个布局之前
middleware(){..}, //定义在内部
middleware:'auth', //定义在外部
  
//pages/a.vue  运行在一个页面之前
middleware(){..}, //定义在内部
middleware:'auth', //定义在外部
  
//中间件执行流程顺序：
//nuxt.config.js->匹配布局->匹配页面
```



##### validate

下来请求到达 validate 方法，在这里可以对 page 组件 component 组件 进行动态路参数的有效性。返回 `true` 说明路由有效，则进入路由页面。返回不是 `true` 则显示 404 页面。

只能在页面组件使用(pages/xx.vue)

```js
validate({ params, query }) {//参数校验，校验失败，则自动跳转到错误页面
  // return /^d+$/.test(params.id) // must be number
  return true;//true、false跳转方向
}
```



##### asyncData & fetch

接下来达到 asyncData & fetch 方法，asyncData() 适用于在渲染组件前获取异步数据,返回数据后合并到data选项内部，fetch() 适用于在渲染页面前填充 vuex 中维护的数据。会在组件每次加载前被调用（在服务端或切换至目标路由之前）,由于是在组件 **初始化** 前被调用的，所以在方法内是没有办法通过 `this` 来引用组件的实例对象。

只能在页面组件使用

```js
//pages/a.vue
async asyncData(context){//页面组件数据预载 需要return 之后会和页面data合并
  let res = await context.$axios({url:'/api/goods/home'})
  return {msg2:'oo',data:res.data}//组件数据 异步的，初始的都在这里生成
}

asyncData ({ params }) {
  return axios.get(`https://my-api/posts/${params.id}`)
    .then((res) => {
      return { title: res.data.title }
    })
}

async fetch(context){
  let res = await context.$axios({url:'/api/goods/home'})
  context.store.commit('XXX',res.data);//状态操作
}
```

##### render

最后进行渲染。将渲染后的页面返回给浏览器，用户在页面进行操作，如果再次请求新的页面，此时只会回到生命周期中的 middlerware 中，而非 nuxtServerInit ，所以如果不同页面间需要操作相同的数据请用 vuex 来维护，render钩子只能定义渲染时的配置，render内部不可以有业务逻辑，也不执行

##### beforeCreate & created

运行在服务端 & 客户端，可以获取到组件this，

##### mounted & updated

运行在客户端，没有keep-alive 那自然activated、deactivated这两个生命周期也没了

##### **没有keep-alive**

由于是服务端渲染，所以不支持组件的**keep-alive**，那自然**activated、deactivated**这两个生命周期**也没了**

##### **不存在Window**

```
<script>
export default {
  asyncData() {
    console.log(window) // 服务端报错
  },
  fetch() {
    console.log(window) // 服务端报错
  },
  created () {
    console.log(window) // undefined
  },
  mounted () {
    console.log(window) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  }
}
</script>
```

#### 路由

##### **跳转**

```
<nuxt-link to="/product/1?a=1&b=2">商品001</nuxt-link>
<nuxt-link to="/product/2?a=11&b=22">商品02</nuxt-link>
<nuxt-link :to="{name:'product-id',params:{id:3},query:{a:111,b:222}}">商品03</nuxt-link>

属性对等router-link
product-id 子集 product-目录名-id
```

##### **展示**

```
<nuxt>  一级
<nuxt-child /> 子级

属性对象router-view
```

##### **配置**

```
pages/
--| goods/ 二级
-----| index.vue 默认页 可以整个文件留空，goods就无默认页，
								一级的goods.vue替换这里的index会二级展示区替换一级展示区
-----| _id.vue 详情页 {{$route.params.id}}/{{$route.query.a}}/{{$route.query.b}}
-----| comment.vue   <nuxt-link :to="{name:'goods-comment-uid'
-----| comment
--------| index.vue 默认页 ~~ comment.vue
--------| _uid.vue
--| index.vue 一级
--| goods.vue 一级  显示在一级展示区

```

##### **请求**

| PATH             | FILE                                            |
| :--------------- | :---------------------------------------------- |
| `/`              | `index.vue`                                     |
| `/goods`         | `goods/index.vue`  | `goods.vue`                |
| `/goods/123`     | `goods/_id.vue`                                 |
| `/goods/comment` | `goods/comment.vue` | `goods/comment/index.vue` |



##### **公共组件**

大家都知道，**vue-cli**入口文件是**app.vue**，在**nuxt**开发当中则是**./layout/default.vue**

```
<template>
  <div id="app">
    <!-- 公共头部组件 -->
    <xxx-header></xxx-header>
    <!-- 路由视图，相当于router-view -->
    <nuxt/>
    <!-- 公共底部组件 -->
    <xxx-footer></xxx-footer>
  </div>
</template>
```

##### 扩展路由

```js
//nuxt.config.js
 router: {
  extendRoutes(routes, resolve) {
    console.log('nuxtconfig',routes);
    routes.push({
      name: 'root',
      path: '/index',
      component: resolve(__dirname, 'pages/index.vue')
    });
  }
}
```



##### 校验参数

如果校验失败，则自动跳转到错误页面

```
<script>
export default {
  validate({ params, query }) {
    return /^d+$/.test(params.id) // must be number
  }
}
</script>
```

##### **配置错误页面**

你可以通过编辑 layouts/error.vue 文件来定制化错误页面.

```
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  //layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>
```

##### 路由统一动效

```css
/*  assets/main.css 全局通用样式 */

/*  路由统一动效 */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-active {
  opacity: 0;
}

/* 单独路由 -> 组件内部 transition: 'test'*/
.test-enter-active, .test-leave-active {
  transition: .5s ease all ;
}
.test-enter, .test-leave-active {
  margin-left: -1000px;
}
```

```js
//nuxt.config.js
module.exports = {
  css: [
    'assets/main.css'
  ]
}
```

##### 守卫

前置依赖中间件middleware，后置使用vue的 beforeRouteLeave钩子

```js
//middleware/auth.js
export default ({app:{$cookies},store,redirect,route,$axios,params,query,req,res})=>{
  
}

//nuxt.conig.js
router: {
  middleware: 'auth' //全局守卫 运行一组页面渲染之前
}

//layouts/a.vue  运行在一个布局之前
middleware(){..}, //定义在内部
middleware:'auth', //定义在外部
  
//pages/a.vue  运行在一个页面之前
middleware(){..}, //定义在内部
middleware:'auth', //定义在外部
  
//中间件执行流程顺序：
//nuxt.config.js->匹配布局->匹配页面
  

//插件定义 的 全局前后置
// plugins/router.js
export default ({ app }) => {
  app.router.afterEach(() => {
    console.log('全局后置');
  })
  app.router.beforeEach((to,from,next) => {
    console.log('全局前置');
    next()
  })
}
//nuxt.config.js
plugins: [
    '~/plugins/router']
```



#### 数据交互

##### Axios

推荐使用**@nuxtjs/axios、@nuxtjs/proxy**，不需要在plugins配置

安装依赖

```
npm install @nuxtjs/axios @nuxtjs/proxy --save
modules: [ '@nuxtjs/axios' ], // 不需要加入@nuxtjs/proxy

读取json
```

使用、处理跨域

```
// nuxt.config.js
module.exports = {
  modules: [ '@nuxtjs/axios' ], // 不需要加入@nuxtjs/proxy
  axios: {
    proxy: true,//开启axios跨域
    //prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:3001', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        //'^/api': ''
      },
    },
  }
}
```

组件中使用

```
<script>
export default {
  fetch ({store,redirect,route,params,query,$axios,from,error}) {
  	//error 通过调用该方法来显示错误信息页面。
  	//  error({ statusCode: 404, message: 'Post not found' })
    console.log($axios)
  },
  asyncData ({store,redirect,route,params,query,$axios,from,error}) {
    console.log($axios)
  },
  created () {
    console.log(this.$axios)
  }
}
</script>
```

到此为止，我们并不需要在plugins配置axios，但是如果要设置全局拦截器，那么就要新建一个/plugins/axios.js

```
export default function ({
	app:{$cookies},store,redirect,route,
	$axios,params,query,req,res,...rest
}) {
	//nuxt.config配置ssr后，第一次服务端运行，之后的路由跳转在客户端运行
	// 基本配置
  $axios.defaults.timeout = 10000
  
  // 请求回调
  $axios.onRequest(config => {
    config.headers.token = '假token'
    return config;
  })

  // 返回回调
  $axios.onResponse(res => {
    if(res.data.err==2 && route.fullPath!=='/login'){
      redirect('/login?path='+route.fullPath)
    }
    return res;
  })

  // 错误回调
  $axios.onError(error => {
    //..
    return error;
  })
}
```

然后在nuxt.config.js > plugins配置它

```
module.exports = {
  plugins = [
    {
      src: "~/plugins/axios",
      ssr: true
    },
  ]
}
```

##### **自定义Loading页面**

nuxt.config.js

```
module.exports = {
	loading: { //设置默认loading条
    color: '#399',
    height: '3px'
  }
  loading: '~/components/loading.vue'//自定义loading组件
}
```

loading.vue

```vue
<template lang="html">
  <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>
<style scoped>
.loading-page {
		/*https://www.cnblogs.com/lhb25/p/loading-spinners-animated-with-css3.html*/
 }
}
</style>
```

#### vuex

##### 定义

**nuxt**自己集成了**vuex**，也可后期自己安装**，**支持两种使用 `store` 的方式，你可以择一使用，无论使用那种模式，您的`state`的值应该**始终是**`function`

- **模块方式：** `store` 目录下的每个 `.js` 文件会被转换成为状态树[指定命名的子模块](http://vuex.vuejs.org/en/modules.html) （当然，`index` 是根模块）
- **Classic(不建议使用)：** `store/index.js`返回创建Vuex.Store实例的方法。

```js
//store/index 主模块
export const state = () => ({
  bNav: false,
  bLoading:false
})

export const mutations = {
  M_UPDATE_NAV(state, payload) {
    state.bNav = payload;
  },
  M_UPDATE_LOADING(state, payload) {
    state.bLoading = payload;
  }
}

export const getters = {
  getNav(state) {
    return state.bNav ? '显示' : '隐藏'
  }
}

export const actions = {
  nuxtServerInit(store, {
    route,
    req,
    res,
    redirect,
    app:{$cookies}
  }) {
    // console.log('nuxtServerInit');
    let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'为登录',token:''};
    store.commit('user/M_UPDATE_USER',user)
  }
}


//store/home.js 模块方式
export const state = () => ({
  err: 1,
  data: {}
})

export const mutations = {
  M_UPDATE_HOME(state, payload) {
    state.err = payload.err;
    state.data = payload.data;
  }
}

export const actions = {
  async A_UPDATE_HOME({commit,state},payload) {
    let {store,redirect,route,next,params,query,error,$axios} = window.$nuxt.context
    // error({message:'asdfasdf',errorCode:404})
    let res = await window.$nuxt.context.$axios({url:'/api/goods/home',params:payload,headers:{token:''}})
    // console.log(res);
    commit('M_UPDATE_HOME',res.data)
  }
}


//store/user模块
export const state = () => ({
  err: 1,
  msg:'未登录',
  token: ''
})

export const mutations = {
  M_UPDATE_USER(state, payload) {
    // console.log('M_UPDATE_USER');
    state.err = payload.err;
    state.msg = payload.msg;
    state.data = payload.data;
    state.token = payload.token;
  }
}

export const actions = {
  A_UPDATE_USER({
    commit,
    state
  }, payload) {
    // console.log('A_UPDATE_USER');
    commit('M_UPDATE_USER', payload)
  }
}

```

##### 使用

```vue
<template>
	<div>
    <el-button 
    	@click="A_UPDATE_USER({err:0,msg:'heheda',token:'',data:{}})"
  	>跨域axios数据</el-button>
    {{getUser}} {{msg}} {{$store.user.msg}}
  </div>
</template>
<script>
	import {mapActions,mapGetters,mapState,mapMutations} from 'vuex'
  export default {
    methods:{
      get(){//方法或钩子函数 里面调用
        this.$store.dispatch('A_UPDATE_USER',{数据})
        this.$store.commit('M_UPDATE_USER',{数据})
        this.M_UPDATE_USER({数据})
        this.A_UPDATE_USER({数据})
      },
      ...mapActions('user',['A_UPDATE_USER']), // user == store/user.js
    	...mapMutations('user',['M_UPDATE_USER']),
    },
    computed:{
      ...mapGetters('user',['getUser']),
      ...mapState('user',['msg']),
    }
  }
</script>
```

##### window上的context 

在一个普通js模块里面，运行在客户端时，需要抓取nuxt上下文

```js
//actions 使用axios时，需要触发nuxt配置的拦截器
let {store,redirect,route,next,params,query,error,$axios} = window.$nuxt.context
//$axios() 这样方可触发

//没有loading效果，需要改装loading组件
export default {
  computed:{
    ...mapState(['bLoading'])
  },
  methods: {
    start() {
      this.$store.commit('M_UPDATE_LOADING',true)
    },
    finish() {
       this.$store.commit('M_UPDATE_LOADING',false)
    }
  }
}
//拦截器修改bLoading
$axios.onRequest(config => {
  //...
  store.commit('M_UPDATE_LOADING',true)
  //...
})
```



##### 状态持久&token校验

浏览器在强刷时，localStorage是不会随请求发到浏览器，cookie会

安装：[cookie-universal-nuxt](https://www.npmjs.com/package/cookie-universal-nuxt)

nuxt.config.js

```js
modules: [
    'cookie-universal-nuxt', // cookie-universal-nuxt 给浏览器cookie种token
  ],
```



登录时，存vuex和cookie，nuxtServerInit取出cookies，存vuex，axios拦截找vuex拿，不强刷，不读本地

```js
//login.vue
this.$cookies.set('user',res.data) //种token到浏览器的cookie里

//store/index.js
export const actions = {
  nuxtServerInit(store, {app:{$cookies},route,$axios,req,res,redirect}) {

    let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'未登录',token:''};
    // store.dispatch('user/A_UPDATE_USER',user)
    store.commit('user/M_UPDATE_USER',user)
  }
}

//plugins/axios.js
export default function ({
  app:{$cookies},store,redirect,route,$axios,params,query,req,res,...rest
}) {
  //设置拦截器 -> nuxt.config.js
 // 基本配置
  $axios.defaults.timeout = 10000
  
  // 请求回调
  $axios.onRequest(config => {
    config.headers.token = store.state.user.token
    return config;
  })

  // 返回回调
  $axios.onResponse(res => {
    if(res.data.err==2 && route.fullPath!=='/login'){
      redirect('/login?path='+route.fullPath)
    }
    return res;
  })

  // 错误回调
  $axios.onError(error => {
    return error;
  })
}

```

#### **element-ui**

**所有插件**都写在**/plugins目录**下，这里以**element-ui**为例

```
//plugins/element-ui.js

// 整体引入全局使用
import Vue from 'vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 按需引入全局使用
import { Button, Loading, MessageBox } from 'element-ui'
Vue.use(Button)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
```

nuxt.config.js

```
module.exports = {
  css: ['element-ui/lib/theme-chalk/index.css'],
  plugins: [
    {
      src: "~/plugins/element",
      ssr: true//不支持ssr的插件只会在客户端运行不要给true。
      mode:'client|server' //v2.4+ 会代替ssr
    }
  ]
  
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
```

#### 全局定义

##### **全局方法**

```js
//plugins/mixins.js
import Vue from 'vue'
let show=()=>{console.log('show')}
Vue.prototype.$show=show;//服务器钩子内部不可用

//nuxt.config.js
plugins: [
  '@/plugins/mixins',
],
```

组件调用

```
<script>
export default {
  created() {
    this.$show()
  }
}
</script>
```

##### 全局过滤器

在plugins新建一个mixins.js，过滤器可以这样玩：

```
//plugins/mixins.js
import Vue from 'vue'

//全局过滤器
import * as filters from '../assets/script/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import {date} from './date.js'
import {fillzero} from './fillzero.js'
export {date,fillzero}
```

然后在nuxt.config.js中注册一下：

```
  plugins: [
    ‘~plugins/mixins.js‘
  ]
```

在组件中就可以这样happy的用起来了：

```
<!-- 时间格式化 -->
<div>
 <span>{{234243 | date</span>
</div>
```

##### 全局指令

在plugins新建一个mixins.js，可以这样玩：

```
//plugins/mixins.js
import Vue from 'vue'
import direc1 from '../assets/script/directives/direc1.js'
Vue.directive('direc1',direc1)

//direc1.js
function direc1(el,binding,vnode){
  console.log('指令');
}

export default {
  bind(el,binding,vnode){
    direc1(el,binding,vnode)
  },
  inserted(el,binding,vnode){
    direc1(el,binding,vnode)
  }
}
```

然后在nuxt.config.js中注册一下：

```
  plugins: [
    ‘~plugins/mixins.js‘
  ]
```

在组件中就可以这样happy的用起来了：

```
<div>
 <span v-direc1></span>
</div>
```

##### 全局组件

```js
//全局组件 //plugins/mixins.js
import Confirm from '../components/global/Confirm.vue'
Vue.component('Confirm',Confirm)
```



##### **全局样式**

nuxt.config.js

```
module.exports = {
  css: ['~/assets/stylesheets/main.min.css']
}
```



#### Meta

##### 默认Meta标签

nuxt.config.js

```
module.exports = {

//为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为meta标签配一个唯一的标识编号,所有页面使用同一个hid

  head: {
    title: 'nuxt-test1',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
```

##### **页面组件Meta标签**

```
<script>
export default {
  head () {
    return {
      meta: 
      [
        {
          name: 'keywords',
          content: '最强王者,今晚吃鸡' + this.data属性 //data属性来自asyncData
        },
      ]
    }
  }
}
</script>
```

作为一个社区，seo 尤为重要，倘若每个页面都需要写一大堆的 head 对象，就会显得尤其的繁琐。所以可以借助 nuxt 的 plugin 机制，将其封装成一个函数，并注入到每一个页面当中：

```
// plugins/global.js
import Vue from 'vue'

Vue.mixin({
  methods: {
    // 必传 标题，描述。其他的 meta 标签通过 payload 注入，其中，每个 meta 的 hid 需要是唯一的。
    $seo(title, content, payload = []) {
      return {
        title,
        meta: [{
          hid: 'description',
          name: 'keywords',
          content
        }].concat(payload)
      }
    }
  }
})
```

在 nuxt.config.js 中加上：

```
export default {
  plugins: [
    '~plugins/global.js'
  ]
}
```

这样，只需要在页面的 `head` 的函数中，返回该函数即可：

```
head() {
    return this.$seo('xxxx', 'oooo')
}
```

##### 动态路由的Meta

游戏详情页面举例子，由于数据是异步获取的，我们需要把数据获取写在asyncData钩子，待数据获取成功才会渲染该页面组件

```
<script>
export default {
  async asyncData ({ app, params }) {
    let data = await app.$axios.get(`/appinfo/${params.id}`);
    return {
      appname: data.appinfo.appname
    }
  },
  head () {
    return {
      meta: 
      [
        {
          name: 'keywords',
          content: `${this.appname},无限宝石,无限元宝`
        },
      ]
    }
  }
}
</script>
```





#### sass/scss 

安装依赖

```
npm install node-sass sass-loader --save
```

组件中使用(不需要其他的配置了)

```
<style lang="scss" scoped>

</style>
```

全局使用某个 scss 文件（如 mixins, vars 等），需要借助 @nuxtjs/style-resources : `yarn add @nuxtjs/style-resources —dev`， 还需要在 nuxt.config.js  配置：

```
export default {
  ...
  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      './assets/base.scss',
      // './assets/*.scss' // use underscore "_" & also file extension ".scss"
      ]
  },
  ...
}
```

#### 定制化 html 模板 

定制化默认的 html 模板，只需要在应用根目录下创建一个 `app.html` 的文件。

默认模板为：

```
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

#### 资源指向

##### 内部资源

```vue
<!-- 引用 static 目录下的图片 -->
<img src="/my-image.png"/>

<!-- 引用 assets 目录下经过 webpack 构建处理后的图片 -->
<img src="~assets/my-image-2.png"/>

<style>
  .box{background: url(~assets/a.png);}
</style>
```

##### 外部资源

在 nuxt.config.js 中配置你想引用的资源文件：

```
module.exports = {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
```

局部配置

可在 `pages` 目录内的 `.vue` 文件中引用外部资源，如下所示：

```
<template>
  <h1>使用 jQuery 和 Roboto 字体的关于页</h1>
</template>

<script>
export default {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  }
}
</script>
```

#### nuxt for ts

[资料](https://typescript.nuxtjs.org/zh-hant/)

##### 新项目

安装

```jsx
npx create-nuxt-app 目录 

//选择typescript
```

tsconfig.json

```js
"skipLibCheck":true" //避免NuxtApp错误
"experimentalDecorators":true, //避免 class 类名 错误 保证项目排在工作区第一位
```

##### 已有项目

`typescript-build`提供了ts支持

```js
npm install --save-dev @nuxt/typescript-build
```

在 **`nuxt.config.js`** 中的 **`buildModules`** 中加入 **`@nuxt/typescript-build`**

```js
// nuxt.config.js
export default {
  buildModules: ['@nuxt/typescript-build']
}
```

再建立 **`tsconfig.json`** 

```js
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "esnext",
    "moduleResolution": "node",
    "lib": [
      "esnext",
      "esnext.asynciterable",
      "dom"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
  "exclude": [
    "node_modules"
  ]
}
```

项目types目录下添加vue类型声明文件 `vue-shim.d.ts`

```js
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}
```

tsconfig.json

```js
"skipLibCheck":true" //避免NuxtApp错误
"experimentalDecorators":true, //避免 class 类名 错误 保证项目排在工作区第一位
```

##### 类式组件

通过类定义vue组件，需要安装vue-property-decorator和vue-class-component来支持

```js
npm i vue-property-decorator vue-class-component --save-dev
```

**用法**同VUE+TS

##### 实例上$axios和$cookies支持

```ts
//types/vue.d.ts 重写vue类型接口影响实例，而非Context

import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    $axios: any;//context上下文的 $axios 可以 去context.app.$axios上取
    $cookies: any; 
  }
}
```

##### 服务端构子

写在Component装饰器内部，类内不运行，实际上后置守卫的钩子也需要写入装饰器

##### 装饰器内访问实例

```ts
//vue.d.ts 

import Vue from 'vue';
declare module 'vue/types/vue' {
  interface Vue {
    username: string;
		...
  }
}
```

组件名字与类名一致

#### 部署

nuxt有自己的node服务器server目录，通过nuxt.config配置代理，转发到api服务器

```
npm run build 

我们需要复制到服务器的是
.nuxt
package-lock.json // 如果有的话
package.json
nuxt.config.json
static
server 

远端： npm i

//远端 修改端口 nuxt.config.js
server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }

远端: npm start
```

##### **pm2部署**

保持应用**程序活跃**

```
 pm2 --name=nuxt3000 start npm -- run start --watch
```

#### 

## Vue 3



V3中，新出的语法，可以不用，直接使用V2中的语法是可行的，vue3.0 侧重于解决代码组织与逻辑复用问题

[组合api](https://vue-composition-api-rfc.netlify.app/api.html#setup)  [todolist](https://segmentfault.com/a/1190000020205747?utm_source=tag-newest)  [官档](https://v3.cn.vuejs.org/)

### 2 vs 3

TODO LIST 应用非常简单，仅有一个输入框、一个状态切换器、以及 TODO 列表构成：

![image](https://segmentfault.com/img/remote/1460000020205751)

大家也可以在[这里](https://jrainlau.github.io/vue-composition-api-demo/)体验。

借助 `vue-cli` 初始化项目以后，我们的项目结构如下（仅讨论 `/src` 目录）：

```
.
├── App.vue
├── components
│   ├── Inputer.vue
│   ├── Status.vue
│   └── TodoList.vue
└── main.js
```

从 `/components` 里文件的命名不难发现，三个组件对应了 TODO LIST 应用的输入框、状态切换器，以及 TODO 列表。这三个组件的代码都非常简单就不展开讨论了，此处只讨论核心的 `App.vue` 的逻辑。

- `App.vue`

```html
<template>
  <div class="main">
    <Inputer @submit="submit" />
    <Status @change="onStatusChanged" />
    <TodoList
      :list="onShowList"
      @toggle="toggleStatus"
      @delete="onItemDelete"
    />
  </div>
</template>

<script>
import Inputer from './components/Inputer'
import TodoList from './components/TodoList'
import Status from './components/Status'

export default {
  components: {
    Status,
    Inputer,
    TodoList
  },

  data () {
    return {
      todoList: [],
      showingStatus: 'all'
    }
  },
  computed: {
    onShowList () {
      if (this.showingStatus === 'all') {
        return this.todoList
      } else if (this.showingStatus === 'completed') {
        return this.todoList.filter(({ completed }) => completed)
      } else if (this.showingStatus === 'uncompleted') {
        return this.todoList.filter(({ completed }) => !completed)
      }
    }
  },
  methods: {
    submit (content) {
      this.todoList.push({
        completed: false,
        content,
        id: parseInt(Math.random(0, 1) * 100000)
      })
    },
    onStatusChanged (status) {
      this.showingStatus = status
    },
    toggleStatus ({ isChecked, id }) {
      this.todoList.forEach(item => {
        if (item.id === id) {
          item.completed = isChecked
        }
      })
    },
    onItemDelete (id) {
      let index = 0
      this.todoList.forEach((item, i) => {
        if (item.id === id) {
          index = i
        }
      })
      this.todoList.splice(index, 1)
    }
  }
}
</script>
```

在上述的代码逻辑中，我们使用 `todoList` 数组存放列表数据，用 `onShowList` 根据状态条件 `showingStatus` 的不同而展示不同的列表。在 `methods` 对象中定义了添加项目、切换项目状态、删除项目的方法。总体来说还是非常直观简单的。

2.x 的写法属于 Options-API 风格，是基于配置的方式声明逻辑的。而接下来我们将使用 Composition-API 风格重构上面的逻辑。

**使用 Composition-API 风格重构逻辑**

仅保留 `components: { ... }` 选项，删除其他的，然后写入 `setup()` 函数：

```js
export default {
  components: { ... },
  setup () {}
}
```

接下来，我们将会在 `setup()` 函数里面重写之前的逻辑。

首先定义**数据**。

在 `setup()` 函数里，我们定义一个响应式的 `data` 对象，类似于 2.x 风格下的 `data()` 配置项。

```js
setup () {
    const data = reactive({
      todoList: [],
      showingStatus: 'all',
      onShowList: computed(() => {
        if (data.showingStatus === 'all') {
          return data.todoList
        } else if (data.showingStatus === 'completed') {
          return data.todoList.filter(({ completed }) => completed)
        } else if (data.showingStatus === 'uncompleted') {
          return data.todoList.filter(({ completed }) => !completed)
        }
      })
    })
}
```

其中计算属性 `onShowList` 经过了 `computed()` 函数的包装，使得它可以根据其依赖的数据的变化而变化。

接下来定义**方法**。

在 `setup()` 函数里面，对之前的几个操作选项的方法稍加修改即可直接使用：

```js
    function submit (content) {
      data.todoList.push({
        completed: false,
        content,
        id: parseInt(Math.random(0, 1) * 100000)
      })
    }
    function onStatusChanged (status) {
      data.showingStatus = status
    }
    function toggleStatus ({ isChecked, id }) {
      data.todoList.forEach(item => {
        if (item.id === id) {
          item.completed = isChecked
        }
      })
    }
    function onItemDelete (id) {
      let index = 0
      data.todoList.forEach((item, i) => {
        if (item.id === id) {
          index = i
        }
      })
      data.todoList.splice(index, 1)
    }
```

与在 `methods: {}` 对象中定义的形式所不同的地方是，在 `setup()` 里的方法不能通过 `this` 来访问实例上的数据，而是通过直接读取 `data` 来访问。

最后，把刚刚定义好的数据和方法都返回出去即可：

```js
    return {
      ...toRefs(data),
      submit,
      onStatusChanged,
      toggleStatus,
      onItemDelete,
    }
```

重构完成后，发现其运行的结果和之前的完全一致，证明 Composition API 是可以正确运行的

```js
export default {
  components: { ... },
  setup () {
     const data = reactive({
      todoList: [],
      showingStatus: 'all',
      onShowList: computed(() => {
        if (data.showingStatus === 'all') {
          return data.todoList
        } else if (data.showingStatus === 'completed') {
          return data.todoList.filter(({ completed }) => completed)
        } else if (data.showingStatus === 'uncompleted') {
          return data.todoList.filter(({ completed }) => !completed)
        }
      })
    })
     
     function submit (content) {
      data.todoList.push({
        completed: false,
        content,
        id: parseInt(Math.random(0, 1) * 100000)
      })
    }
    function onStatusChanged (status) {
      data.showingStatus = status
    }
    function toggleStatus ({ isChecked, id }) {
      data.todoList.forEach(item => {
        if (item.id === id) {
          item.completed = isChecked
        }
      })
    }
    function onItemDelete (id) {
      let index = 0
      data.todoList.forEach((item, i) => {
        if (item.id === id) {
          index = i
        }
      })
      data.todoList.splice(index, 1)
    }
    
    return {
      ...toRefs(data),
      submit,
      onStatusChanged,
      toggleStatus,
      onItemDelete,
    }
     
  }
}
```



### 安装

**v2升v3**

```js
vue add vue-next
```

**CLI v4.5创建v3**

```js
npm i @vue-cli -g
vue create proname
select 3
```

**vite**

个是尤大开发的新工具，目的是以后替代webpack，原理是利用浏览器现在已经支持es6的import了，遇到import会发送一个http请求去加载文件，vite拦截这些请求，做一些预编译，省去了webpack冗长打包的时间，提升开发体验

```js
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```



### 新特性

#### helloworld

任何全局改变 Vue 行为的 API 现在都会移动到应用实例上（component），非全局的被exports导出重vue包中

main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
let app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app');
```

#### 组合式 API

v2被人诟病得很严重的问题就是逻辑复用，项目越发的复杂，可以抽象出来被复用的逻辑也越发的多， 2.x 阶段只能通过 mixins 来解决，v3可以通过Composition API解决

一组低侵入式的、函数式的 API，使得我们能够更灵活地「**组合**」组件的逻辑，简洁且低成本的机制来提取和重用多个组件之间的逻辑，基于选项的 API 促使我们通过 ***选项类型*** 组织代码，而组合式 API 让我们可以基于***逻辑关注点***组织代码。

组合式 API 完全可以和现有的基于选项的 API 配合使用

##### setup选项

```html
<script>
	export default {
    setup(props,context) {
      //在beforeCreate之前被调用, 主要可以封装一些可复用带状态的业务逻辑,并后期抽离出去
  		//组件从原本的选项配置变成了函数定义,也不需要使用this去指定当前组件执行的上下文
      //props 上方传递过来的属性，响应式的(proxy), 
      //Proxy响应式对象 访问通过 props.proname.value 模板中无需加value
      
      //props 解构会导致响应式失效,通过toRefs包裹
      let {msg}=toRefs(props);
    	setInterval(()=>console.log(msg.value),2000)

      let {attrs,slots,emit} = context;//都是内部组件实例上对应项的代理，可以解构
      
      //导出数据供模板使用,与data，props选项合并
      return {msg}
    }
  }
</script>
```



##### 响应式系统 API

setup里用到的api全部需要vue导入

###### reactive & ref

引入ref是为了以变量形式传递响应式的值而不再依赖访问 `this`

```html
<template>
  <div>{{ obj }}</div>
  <div>{{ count }}</div>
  <button @click="obj.count++">修改</button>
  <button @click="count++">修改1</button>
  <button @click="updateCount(2)">修改2</button>
</template>
<script>
	export default {
    setup(props,context) {
      
      // 创建不需要改变的值
    	const text = '这是不需要响应改变的固定值';
      
      //创建响应式数据 
      //ref 和 reactive 一个针对原始数据类型，而另一个用于对象
    	const obj = reactive({ count: 0 });
    	const count = ref(0);
      
      //创建所有数据到一个data里面，通过 return data 与外部data选项合并
      //解构会带来响应式丢失,toRefs来解决
      //把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
      const data = toRefs(reactive({ msg3: '数据3' }));
      
      //复杂的数据修改业务可以做成函数
    	const updateCount = val => (count.value += val);
      
      return {
        obj,count,...data,updateCount
      }
    }
  }
</script>
```

###### computed

```html
<template>
  <div>{{ cptCount }}</div>
  <div>{{ cptCount2.count10 }}</div>
  <div>{{ cptCount2.count100 }}</div>
</template>
<script>
	export default {
    setup(props,context) {
      
    //计算属性 可以返回一个值，或者对象
    const cptCount = computed(() => count.value * 2);
    const cptCount2 = computed(() => ({
      count10: count.value * 10,
      count100: count.value * 100
    }));
      
      return {
        cptCount,
      	cptCount2,
      }
    }
  }
</script>
```

###### watch & watchEfect

```html
<template>
  <div>{{ cptCount }}</div>
  <div>{{ cptCount2.count10 }}</div>
  <div>{{ cptCount2.count100 }}</div>
</template>
<script>
	export default {
    setup(props,context) {
      //数据观测
     
      //监听 ref 数据
      watch(count, (count, prevcount) => {
        console.log('watch count', count, prevcount);
      });

      //监听reactive数据
      watch(obj, (obj, prevObj) => {
        console.log('watch obj', obj, prevObj);
      });

      //监听reactive中属性
      watch(
        () => obj.count,
        (count, prevCount) => {
          console.log('watch obj.proname', count, prevCount);
        }
      );

      //使用数组监听多个值
      watch([count, obj], ([count, obj], [prevCount, prevObj]) => {
        console.log('watchs', count, prevCount, obj, prevObj);
      });

      //立即执行
      //传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。(setup后，onMounted之前)
      watchEffect(() => console.log('watchEffect', count.value));
      
      ...
    }
  }
</script>
```



##### 生命周期钩子

```js
setup(props,context) {
		//生命周期 onXxxXxx
  	//钩子注册函数只能在 setup() 期间同步使用
  	//不在当前组件下调用这些函数会抛出错误
  	//v2的钩子会与其一同调用
  	//卸载组件时，在生命周期钩子内部同步创建的侦听器和计算状态也将自动删除。
    onMounted(() => {
      console.log('mounted completed!',d1.value);
      d1.value.style.background='red'; //挂载完毕后访问dom
    });

    onUpdated(() => {
      // console.log('onUpdated completed!');
    });
  	...
}
```

激活失活钩子在router-view中时，先失活再激活 ***

##### 模板 Refs 

```html
<template>
	<div ref="d1">box</div>
</template>
<script>
	export default {
    //模板refs
    const d1 = ref(null);
  
  	onMounted(() => {
      console.log('mounted completed!',d1.value);
      d1.value.style.background='red'; //挂载完毕后访问dom
    });
  
  	return {
      d1
    };
  
  }
</script>
```

##### 抽离

```html
<template>
	<!-- customRef -->
  <input v-model="text" />
  <div>{{ x }}/{{ y }}</div>
</template>
<script>
  
  //更灵活的逻辑复用  类react hooks
  function useMousePosition() {
    const x = ref(0);
    const y = ref(0);

    //修改数据的"实例方法"
    const update = e => {
      x.value = e.pageX;
      y.value = e.pageY;
    };

    //生命周期
    onMounted(() => window.addEventListener('mousemove', update));

    onUnmounted(() => window.addEventListener('mousemove', update));

    //返回属性 供调用方使用
    return { x, y };
  }

  //使用自定义 ref 实现带防抖功能的 v-model
  function useDebouncedRef(value, delay = 200) {
    let timeout

    //customRef 用于自定义一个 ref，可以显式地控制依赖追踪和触发响应，
    //接受一个工厂函数，两个参数分别是用于追踪的 track 与用于触发响应的 trigger，并返回一个带有 get 和 set 属性的对象
    return customRef((track, trigger) => {
      return {
        get() {
          track()
          return value
        },
        set(newValue) {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            value = newValue
            trigger()
          }, delay)
        },
      }
    })
  }

	export default {
    data(){
      return {
        text: useDebouncedRef('hello'),
      }
    },
    setup(){
      const { x, y } = useMousePosition(); //使用抽离出去的"hooks"，为当前组件生成数据

      //导出数据供模板使用
      return {
        x,
        y
      };
    }
  }
</script>	
```

当我们在组件间提取并复用逻辑时，组合式 API 是十分灵活的。一个组合函数仅依赖它的参数和 Vue 全局导出的 API，而不是依赖其微妙的 `this` 上下文。你可以将组件内的任何一段逻辑导出为函数以复用它，也可以被用在其它组件中

##### 与react hooks对比

- 与 React Hooks 同等级别的逻辑组合能力

- 不需要顾虑调用顺序，也可以用在条件语句中；
- 不会在每次渲染时重复执行，以降低垃圾回收的压力；
- 不存在内联处理函数导致子组件永远更新的问题，也不需要 `useCallback`；
- 不存在忘记记录依赖的问题，也不需要“useEffect”和“useMemo”并传入依赖数组以捕获过时的变量。Vue 的自动依赖跟踪可以确保侦听器和计算值总是准确无误。

#### 异步组件

函数式组件被定义为纯函数，因此异步组件的定义需要通过将其包装在新的 `defineAsyncComponent` 助手方法中来显式地定义 [资料](https://v3.cn.vuejs.org/guide/migration/async-components.html#%E6%A6%82%E8%A7%88)

```js
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// 不带选项的异步组件
const asyncPage = defineAsyncComponent(() => import('./NextPage.vue'))

// 带选项的异步组件
const asyncPageWithOptions = defineAsyncComponent({
  loader: () => import('./NextPage.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

#### 片段

组件现在可以有多个根节点！但是，这确实要求开发者明确定义属性应该分布在哪里

```vue
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```

#### Teleport

```html
xx.vue
<template>
	<!-- Teleport其实就是React中的Portal。Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案 -->
  <Teleport to="#t1">Teleport</Teleport>
</template>

<!-- public/index.html -->
<div id=app></div>
<div id=t1></div>
```

### 差异

V2中，很多你已经了解和喜欢 Vue 的部分在V3中仍是一样的，这里说一下**变更**差异

#### 类方法转变为实例方法

| 2.x 全局 API  | 3.x 实例 API (`app`) |
| ------------- | -------------------- |
| Vue.config    | app.config           |
| Vue.component | app.component        |
| Vue.directive | app.directive        |
| Vue.mixin     | app.mixin            |
| Vue.use       | app.use              |

#### 给组件传递事件

```html
<!--myComponent.vue-->
<a v-if="isAdd" href="javascript:;"  @click="$emit('addItem')">+</a>

<myComponent @add-item="..." />
<myComponent @addItem="..." />
```



#### 生命周期

```js
destroy -> beforeUnMount
destroyed -> unmounted
```

#### v-model

追加上使用v-model时，组件上的 `v-model` 使用 `modelValue` 作为 prop 和 `update:modelValue` 作为事件

```html
<my-component v-model="bar"></my-component>

<!--my-component.vue-->
app.component('my-component', {
  props: {
    modelValue: String
  },
  template: `
    <input 
      type="text"
      :value="foo"
      @input="$emit('update:modelValue', $event.target.value)">
  `
})

<!--对于所有不带参数的 v-model，请确保分别将 prop 和 event 命名更改为 modelValue 和 update:modelValue-->
```

我们可以通过向 `v-model` 传递参数来修改这些名称

利用以特定 prop 和事件为目标的能力,可以在单个组件实例上创建多个 v-model 绑定

```html
<user-name
  v-model:first-name="firstName"
  v-model:last-name="lastName"
></user-name>
```

```html
const app = Vue.createApp({})

app.component('user-name', {
  props: {
    firstName: String,
    lastName: String
  },
  template: `
    <input 
      type="text"
      :value="firstName"
      @input="$emit('update:firstName', $event.target.value)">

    <input
      type="text"
      :value="lastName"
      @input="$emit('update:lastName', $event.target.value)">
  `
})
```

#### 自定义指令

为自定义指令创建了一个更具凝聚力的 API。正如你所看到的，它们与我们的组件生命周期方法有很大的不同，即使我们正与类似的事件钩子，我们现在把它们统一起来了：

- bind → **beforeMount**
- inserted → **mounted**·
- **beforeUpdate**：新的！这是在元素本身更新之前调用的，很像组件生命周期钩子。
- update → 移除！有太多的相似之处要更新，所以这是多余的，请改用 `updated`。
- componentUpdated → **updated**
- **beforeUnmount**：新的！与组件生命周期钩子类似，它将在卸载元素之前调用。
- unbind -> **unmounted**

最终 API 如下：

```js
const MyDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}, // 新
  unmounted() {}
}
```

生成的 API 可以这样使用，与前面的示例相同：

```html
<p v-highlight="yellow">高亮显示此文本亮黄色</p>
```

```js
const app = Vue.createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})
```

既然定制指令生命周期钩子映射了组件本身的那些，那么它们就更容易推理和记住了！

#### data选项

`data` 选项已标准化为只接受返回 `object` 的 `function`。

使用上面的示例，代码只有一个可能的实现：

```html
<script>
  import { createApp } from 'vue'

  createApp({
    data() {
      return {
        apiKey: 'a1b2c3'
      }
    }
  }).mount('#app')
</script>
```

当来自组件的 `data()` 及其 mixin 或 extends 基类被合并时，现在将*浅层次*执行合并：

```js
const Mixin = {
  data() {
    return {
      user: {
        name: 'Jack',
        id: 1
      }
    }
  }
}
const CompA = {
  mixins: [Mixin],
  data() {
    return {
      user: {
        id: 2
      }
    }
  }
}
```

在 Vue 2.x中，生成的 `$data` 是：

```json
{
  user: {
    id: 2,
    name: 'Jack'
  }
}
```

在 3.0 中，其结果将会是：

```json
{
  user: {
    id: 2
  }
}
```

#### api

我们整个从实例中移除了 `$on`，`$off` 和 `$once` 方法，`$emit` 仍然是现有 API 的一部分，因为它用于触发由父组件以声明方式附加的事件处理程序

例如，可以通过使用实现事件发射器接口的外部库来替换现有的 event hub [mitt](https://github.com/developit/mitt)。

在兼容性构建中也可以支持这些方法。

#### 过滤器

过滤器已删除，不再支持。相反地，我们建议用方法调用或计算属性替换它们

相反地，你可以通过[全局属性](https://v3.cn.vuejs.org/api/application-config.html#globalproperties)在所有组件中使用它:

```javascript
// main.js
const app = createApp(App)

app.config.globalProperties.$filters = {
  currencyUSD(value) {
    return '$' + value
  }
}
```

然后，你可以通过 `$filters` 对象修改所有的模板，像下面这样：

```html
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ $filters.currencyUSD(accountBalance) }}</p>
</template>
```

注意，这种方式只能用于方法中，不可以在计算属性中使用，因为后者只有在单个组件的上下文中定义时才有意义。

#### 按键修饰符

不再支持使用数字 (即键码) 作为 `v-on` 修饰符,不再支持 `config.keyCodes`

#### prop 默认值

生成 prop 默认值的工厂函数不再能访问 `this`

```js
props: {
  theme: {
    default (props) {
      // `props` 是传递给组件的原始值。
      // 在任何类型/默认强制转换之前
      // 也可以使用 `inject` 来访问注入的 property
      return inject('theme', 'default-theme')
    }
  }
}
```

#### transition

**组件属性**

```vue
<!--自定义类名的属性变化了 vs v2-->
<tansition
	name =  "动画名"
  mode="out-in|in-out"  前后场景进退次序

  enter-from-class = "类名"
  enter-to-class = "类名"
  leave-from-class = "类名"
  eave-to-class = "类名"
>
	...要做动画的元素...
</tansition>
```

**样式**

```css
<style>
/*vs v2 name的对应样式变了*/
.动画名-enter-from{..}  入场前(打哪来)
.动画名-enter-to{..} 入场后(来了停哪)
.动画名-leave-from{..} 离场前
.动画名-leave-to{..} 离开场后(到哪去)
</style>
```

**组件事件**

```html
<tansition
	@before-enter="方法"   方法会接收做动画的元素(原生)
  @enter="方法"
  @after-enter="方法"
  @before-leave="方法"
  @leave="方法"
  @after-leave="方法"
>
	...要做动画的元素...
</tansition>
```



### 路由4

使用方式：不使用组合api情况下与routerV3一致

变化：包的导出方式是批导，产生了一些新的api，所有导航（包括第一个导航）都是异步的

```js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import { defineAsyncComponent } from 'vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // props: true,
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: defineAsyncComponent(() => import(/* webpackChunkName: "about" */ '../views/About.vue'))
    
    //这种写法无效了
    {path:'/Column',component:(r) => { require(['../pages/Column.vue'],r)}},
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
	hash： createWebHashHistory()
  routes
})


export default router

<!--main.js-->
const app = Vue.createApp({})
app.use(router)
//app.mount('#app')
router.isReady().then(() => app.mount('#app'))
```

`setup`和Vue的[Composition API](https://v3.vuejs.org/guide/composition-api-introduction.html)的引入，开辟了新的可能性，但为了能够充分利用Vue Router的潜力，我们将需要使用一些新hooks来替换this和组件内导航守卫

无权访问的`this`内部`setup`，所以我们无法直接访问`this.$router`或`this.$route`了。相反，我们使用`useRouter`函数：

```js
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}
```

该`route`对象是反应性对象，因此可以监视其任何属性，并且应**避免监视整个`route`**对象：

```js
export default {
  setup() {
    const route = useRoute()
    const userData = ref()

    // fetch the user information when params change
    watch(
      () => route.params,
      async newParams => {
        userData.value = await fetchUser(newParams.id)
      }
    )
  },
}
```

请注意，我们仍然可以访问`$router`和`$route`在模板中，因此无需在`router`或之`route`内返回`setup`。

**组件内部守卫**

```js
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

export default {
  setup() {
    // 无法访问`this`
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      )
      // cancel the navigation and stay on the same page
      if (!answer) return false
    })

    const userData = ref()

    // same as beforeRouteUpdate option with no access to `this`
    onBeforeRouteUpdate(async (to, from) => {
      // only fetch the user if the id changed as maybe only the query or the hash changed
      if (to.params.id !== from.params.id) {
        userData.value = await fetchUser(to.params.id)
      }
    })
  },
}
```

keep-alive tansition 不能在包裹router-view 

```html
<router-view v-slot="{ Component }" style="position: absolute;left:0;top:0">
  <transition
    enter-active-class = "animated bounceInLeft"
    leave-active-class = "animated bounceOutRight"
  >
    <keep-alive><component :is="Component" /></keep-alive>
  </transition>

</router-view>
```

router-link 默认解析成a，不能使用tag指定其他元素了

```html
<!--custom 表明router-link不解析，采用内部传入的元素自定义-->
<router-link to="/home" custom v-slot="{ navigate, href, route }">
  <li @click="navigate">{{ route.fullPath }}</li>
</router-link>

<!--希望活动class应用于外部元素而不是<a>元素本身，在这种情况下，您可以将该元素包装在路由器链接中，并使用v-slot属性创建链接：-->
<router-link
  to="/foo"
  custom
  v-slot="{ href, route, navigate, isActive, isExactActive }"
>
  <li
    :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
  >
    <a :href="href" @click="navigate">{{ route.fullPath }}</a>
  </li>
</router-link>
```

- `href`: 解析的url。这将是'<a>`元素的`href`属性。如果提供了“base”，则包含“base”.
- `route`: 当前路由地址.
- `navigate`: 触发跳转的函数
- `isActive`:  判断非严格激活 布尔值
- `isExactActive`: 判断严格激活 布尔值



### 状态管理4

```js
//store/index.js
//import Vuex from 'vuex'
import { createStore } from 'vuex'

//export default new Vuex.Store({

export default createStore({
  state: {
    count:11
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--;
    }
  },
})

//home.vue
function useHomeStore(){
  
  const store = useStore();//获取store
  const count = computed(()=>store.state.count);//通过计算属性方式拿到的是响应式的
  
  function increment2(){
    store.commit('increment')
  }
  function decrement(){
    store.commit('decrement')
  }
  
  //getCurrentInstance
  ////抓取当前组件实例 {data数据,store数据,setup 后的数据,$attrs,$emit,$slots,$router} 目前抓取不到$route 
  const {ctx} = getCurrentInstance();
  console.log('home setup ctx',ctx.$router);
  return {
    count,increment2,decrement
  }
}

export default {
  setup(){
    const homeStore=useHomeStore()
    return homeStore
  }
}
```



### ts

#### 安装

```js
vue create proname 时选择ts
```

#### 追加

```
# 安装 typescript

yarn add typescript -D
```

初始化`tsconfig.json`

```
# 然后在控制台执行下面命令
npx tsc --init
```

将`main.js`修改为`main.ts`,同时将`index.html`里面的引用也修改为`main.ts`,

然后在script 里添加 lang="ts"

```
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

修改完之后，重启就可以访问项目了。虽然这样配置是可以了，但是打开`main.ts`会发现`import App from App.vue`会报错:` Cannot find module './App.vue' or its corresponding type declarations.`,这是因为现在`ts`还没有识别`vue`文件，需要进行下面的配置:

在项目根目录添加`shim.d.ts`文件

```
# powerShell终端,也可以手动创建
New-Item shim.d.ts
```

添加以下内容

```
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
```

[项目资料](https://github.com/notbucai/vue3-demo/tree/master/orderfood)

[vue3 后台管理系统](https://github.com/iamhmx/vue-next-admin)

[资料](https://blog.csdn.net/taiyi7627/article/details/106560062)

[资料2](https://gitee.com/liqiangsheng/vue3.0-antd-vue-ts-vuex--router/tree/master)