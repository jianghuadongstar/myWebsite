# 工作中遇到的问题与资料的整理
@ 我的主https://jianghuadongstar.github.io/jiangHD/index.html

我的百度脑图: https://naotu.baidu.com/file/305056f765ec890c6e2b2314de8f54d5

变量命名网址(在线)： http://unbug.github.io/codelf/

sprite 小图标合成：https://www.toptal.com/developers/css/sprite-generator

## ajax 参数带有%20 的时候的坑
$.ajax()中参数中字符串带有’%20‘的时候，contentType默认值为：contentType: "application/x-www-form-urlencoded",
这时候参数中的%20会被解析为‘ ’ 导致出现问题

解决方案
contentType: "application/json",


## ?.  !.
?. 链判断运算符:(es6)

?. 安全导航操作符: 是在属性路径中保护空值的更加流畅、便利的方式。 表达式会在它遇到第一个空值的时候跳出。 显示是空的，但应用正常工作，而没有发生错误。(angular)

!. 非空断言运算符(typescript)

## 浏览器cookie问题
不同浏览器  对cookie的存储过程处理不同  
存的时候$.cookie("key", val, {path: "/monitoring/"});
删除的时候$.cookie("key", null, {path: "/monitoring/"});

必须指定完全相同path，不然会出现兼容问题 

## js全局错误监听

    // 在index.html
    window.onerror = function(errorMessage, scriptURI, lineNo, columnNo, error) {
      console.log('errorMessage: ' + errorMessage); // 异常信息
      console.log('scriptURI: ' + scriptURI); // 异常文件路径
      console.log('lineNo: ' + lineNo); // 异常行号
      console.log('columnNo: ' + columnNo); // 异常列号
      console.log('error: ' + error); // 异常堆栈信息
      // ...
      // 异常上报
    };

作者：counterxing
链接：https://juejin.im/post/5b5dcfb46fb9a04f8f37afbb
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


## @ 资料 & 总结

Ionic  创建webapp：https://www.w3cplus.com/mobile/building-simple-app-using-ionic-advanced-html5-mobile-app-framework.html

移动端适配 手淘方案：https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html

大漠 w3cplus  https://www.w3cplus.com/

神奇的setTimeout https://www.w3cplus.com/blog/2103.html

跨域不止有jsonp  http://www.haorooms.com/post/js_kuayu_service

jquery事件名称和命名空间 http://www.haorooms.com/post/jquery_namespaces_eventname

键盘对应的key值  http://www.haorooms.com/post/js_yinghangkahao

实用的web图标库    http://www.bootcss.com/p/font-awesome/

## @ 问题 & 解决方案：

定位 fixed  滑动时候出现闪动 http://www.haorooms.com/post/webapp_slide_sd

echarts 导致内存泄露  http://www.haorooms.com/post/javascript_neicun_use

a标签嵌套   http://www.haorooms.com/post/a_qiantaofangan

a:active加动画ios点击无效  http://www.haorooms.com/post/ablank_nojump_nohistory


## javascript

### @ 难点资料

ES6 http://es6.ruanyifeng.com/ 入门教程

闭包的理解  http://www.haorooms.com/post/js_bbtwo

javascript  廖雪峰 http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/

### @ 3D  VS  数据可视化

d3.js官网： http://d3js.org/ 
d3.js入门：http://www.jianshu.com/p/c3800c61d2fb
d3.js中文api：http://blog.mn886.net/chenjianhua/show/773c07b3abce/index.html
d3.js git：https://github.com/d3/d3/wiki/API-中文手册

#### ECharts-X api：  http://echarts.baidu.com/echarts2/x/doc/cn/article/getting_started.html

webgl      入门教程  http://blog.csdn.net/column/details/webgl.html
           极客学院  http://wiki.jikexueyuan.com/project/webgl/webgL-shaders-and-glsl.html

Three.js  中文文档 https://segmentfault.com/a/1190000004354129

### @ canvas相关

canvas    慕课网   http://www.imooc.com/learn/185

### @ Angular相关

AngularJS 菜鸟教程 http://www.runoob.com/angularjs/angularjs-scopes.html
	      实战课程简介-慕课网 http://www.imooc.com/video/4285

### @ vue相关

vue       菜鸟教程  http://www.runoob.com/vue2/vue-tutorial.html
          一些总结  http://mrzhang123.github.io/2016/07/14/summarize-vue/

### @ Node相关

Node.js   API 中文版 http://nodejs.cn/api/
	  新方法yarn的使用：http://www.haorooms.com/post/yarn_npm	

### @ React相关

React     入门实例教程 - 阮一峰  http://www.ruanyifeng.com/blog/2015/03/react.html
          菜鸟教程   http://www.runoob.com/react/react-tutorial.html
	  react小书  http://huziketang.com/books/react/lesson1

### @ 统计图相关

Chart.js  统计图   http://www.bootcss.com/p/chart.js/docs/

echarts   首页     http://echarts.baidu.com/index.html 


## webpack


webpack  使用小结  http://www.haorooms.com/post/webpack


## css


jqueryui   http://www.jqueryui.org.cn/

Bootstrap  http://www.bootcss.com/

swiper     http://www.swiper.com.cn/

transform透视效果实现/perspective动画透视效果  http://www.haorooms.com/post/h5_animation_zj


## Webgl   


webgl      入门教程  http://blog.csdn.net/column/details/webgl.html
           极客学院  http://wiki.jikexueyuan.com/project/webgl/webgL-shaders-and-glsl.html


## OpenLayers 


OpenLayers3 入门指南  http://anzhihun.coding.me/ol3-primer/
