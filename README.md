# koa2-multipage-boilerplate

koa2多页面模板，搭配[webpack4-boilerplate](https://github.com/deepred5/webpack4-boilerplate)使用。

实现了前后端分离：`webpack4-boilerplate`是前端项目，`koa2-multipage-boilerplate`是后端项目。

### 前端项目
克隆`webpack4-boilerplate`的`feature/backend`分支
```
git clone -b feature/backend git@github.com:deepred5/webpack4-boilerplate.git
```
安装
```
cd webpack4-boilerplate
npm i
```
启动
```
npm run dev:backend
```
打开浏览器localhost:9001/trade-index即可看见前端效果。


### 后端项目
克隆当前项目
```
git clone git@github.com:deepred5/koa2-multipage-boilerplate.git
```
安装
```
cd koa2-multipage-boilerplate
npm i
```
启动
```
npm run dev
```
打开浏览器localhost:8012/即可看见后端渲染的页面。该页面由后端渲染，但是引用的js文件为`webpack4-boilerplate`项目。


### 部署
部署参考本地`dockerfile`和`start.sh`