# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> 该系统为某公司个人绩效考评系统

> 两个人完成所有前端开发，采用vue—axios，从零开始

### 规范
1. 每个页面的大表格用getData()请求。其他需要子啊初始化就要请求的东西，都用get+名字  来请求（大部分post请求不在此列），以上这些请求，写在created里面
2. 翻页组件里面，当前页用currentPage，总条数用total
3. 表格渲染
    - 表格的表头用以下这种形式

    ```
    // 在 js 文件里面，初始化表格头
    tableThead:[
        {name:'指标名称',value:'Indicator_name'},
        {name:'指标定义',value:'Indicator_define'},
        {name:'统计方式',value:'Indicator_count_method'},
        {name:'启用状态',value:'statue'},
    ]
    ```
    - 在 vue 文件里面循环表头

    ```
    <el-table-column
        v-for="item in tableThead"
        :key="item.value"
        :prop="item.value"
        :label="item.name">
    </el-table-column>
    ```
4. 请求错误提示统一采用可关闭的 [this.$message](http://element-cn.eleme.io/?#/zh-CN/component/message#ke-guan-bi "this.$message") (在core模块封装，不需要再各个页面处理错误数据)

5. 搜索栏的搜索表单对象都为 tableSearch

6. 分页规范

```
<el-pagination
	@size-change="sizeChange"
	@current-change="currentChange"
	:current-page="currentPage"
	:page-sizes="pageNumber"
	:page-size="10"
	layout="total, sizes, prev, pager, next, jumper"
	:total="total">
</el-pagination>
```
```
page:{
	start_index:1,
	total:100
},
currentPage:1,
total:1000,
timeOut:null,
pageNumber:[10,25,50,100]
// page -> 需要传给后台的
// currentPage -> 当前页码
// total -> 总数据条数，需从后台取
// timeOut -> 定时器，用来清除翻页导致的重复请求
// pageNumber -> 可选的 每页展示多少条数据
```
```
sizeChange(total){
	this.page.total = total
	this.getData()
},
currentChange(currentPage){
	this.page.start_index = currentPage
	this.getData()
}
```