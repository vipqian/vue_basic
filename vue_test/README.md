<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [笔记](#%E7%AC%94%E8%AE%B0)
  - [脚手架文件结构分析](#%E8%84%9A%E6%89%8B%E6%9E%B6%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84%E5%88%86%E6%9E%90)
  - [不同版本的vue说明](#%E4%B8%8D%E5%90%8C%E7%89%88%E6%9C%AC%E7%9A%84vue%E8%AF%B4%E6%98%8E)
  - [vue.config.js配置文件](#vueconfigjs%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)
  - [ref属性](#ref%E5%B1%9E%E6%80%A7)
  - [配置项props](#%E9%85%8D%E7%BD%AE%E9%A1%B9props)
  - [mixin（混入）配置](#mixin%E6%B7%B7%E5%85%A5%E9%85%8D%E7%BD%AE)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 笔记

## 脚手架文件结构分析
```
├── node_modules
├── public 
│   ├── favicon.ico : 页面标签
│   └── index.html : 主页面
├── src
│   ├── App.vue : 汇总所有组件
│   ├── assets : 存放静态资源
│   │   └── logo.png
│   ├── components : 存放所有组件
│   │   └── HelloWorld.vue
│   └── main.js : 入口文件
├── .gitignore : git管理忽略的配置文件
├── babel.config.js : babel的配置文件
├── package-lock.json 包版本管理文件
├── package.json : 应用包配置文件
└── vue.config.js : 自定义脚手架配置文件 
```
## 不同版本的vue说明
- 1、vue.js 与 vue.runtime.xxx.js的区别:
      vue.js是完整版的vue，包括 核心功能+模板解析器
      vue.runtime.xxx.js 是vue精简版的，只包括了核心功能，没有模板解析器

- 2、因为vue.runtime.xxx.js是没有模板解析器的，所以不能使用template配置项，需要使用render接收到的createElement去指定具体内容

## vue.config.js配置文件
> 使用vue inspect > output.js可以查看vue脚手架的默认配置
> 使用vue.config.js可以对脚手架进行个性化的配置，详见：https://cli.vuejs.org/zh/config/



## ref属性
 1、被用来给元素或子组件注册引用信息（id替换者  
 2、应用在真是的html上获取的是DOM元素，应用在组件标签上获取的是子组件的实例对象（vc）  
 3、使用方式：
  ```
  <!-- 打标识 -->
  <h1 ref="xxx">....</h1>或者 <School ref="xxx"></School>
  <!-- 获取方式： -->
  this.$ref.xxx
  ```

## 配置项props
  功能：让组件接收外部传入的数据  
  1、传递数据

      <Demo name='xxx'>


  2、接收数据

    <!-- 第一种方式（只接收）： -->
    props: ['name']
    <!-- 第二种方式（限制类型） -->
    props: {
      name: String
    }
    <!-- 第三种接送方式（限制类型、限制必要性、制定默认值） -->
    props:{
      name: {
        type: String, //指令类型值
        required: true  //是否为必填项
      },
      age: {
        type: Number,  //指令类型值
        default: 80    //默认值
      },
      sex: {
        tyep: String,
        required: false
      }
    }
  
  备注： props是只读的，vue底层会对你的props进行监视，如果你进行了修改，就好提示警告，如业务需要进行修改，那么请复制一份props中的内容到data中，修改data中的数据


## mixin（混入）配置
  功能，可以把多个组件的共用项配置成一个混入对象
  使用方式：
    第一步定义混合：
      {
        data(){...},
        methods:{....}
      }
    第二步使用混合
      全局混入： Vue.mixin(xxx)
      局部混入：mixins:[xxx]

