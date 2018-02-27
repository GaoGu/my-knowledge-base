##1.问题
###1.前端、后端都是干什么的？ 
前端 做静态资源的
后端 操控服务器的硬件的
###2.为什么学习node.js？
1.就业有市场
2.有商业用途
国内一些创业公司用用的比较多，功夫熊（做上门保健的，美甲、按摩）
国外的一些大公司都有使用：Facebook、Twitter、Google
国内的一些大公司：Alibaba（天猫所有的页面都是通过Node提供的服务）、Tencent、Baidu
3.本身技术是有价值
4.js开发
###3.什么是JavaScript？
一门脚步语言 需要嵌入html执行

###4.浏览器中的JavaScript可以做什么？
校验表单 操作dom 等等

###5.浏览器中的JavaScript不可以做什么？
操作服务器硬件

###6.浏览器与JavaScript是什么关系？
浏览器解析js，目的是为了让计算机能看懂js，看懂01010101，机器码、字节码
编译

内核-->js引擎

引擎 1.转化  汽油柴油等等->转化->成动能
             模板+数据--->页面
              js代码--->机器码\字节码
     2.移植性
     js引擎套一个壳子，写js代码传给js引擎，操作硬件
     node.js  v8引擎去解析js

###7.JavaScript只可以运行在浏览器中吗？

##2.什么是 Node?

###1.[https://nodejs.org/en/]()
###2.node是js运行环境基于v8引擎
特点用事件驱动、无阻塞的io模型
优势轻量、高效
 Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
 Node.js 是一个 构建于 谷歌的 Chrome 浏览器的 V8 引擎之上的一个 `JavaScript运行时` 环境

	  JavaScript runtime  JavaScript 运行时
	  Chrome's V8 JavaScript engine Chrome 浏览器 V8 引擎
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
Node.js的 事件驱动和非阻塞IO模型使得Node.js本身非常的轻量和高效

	event-driven  事件驱动模型
	non-blocking I/O model  非阻塞IO模型  
	IO（input/output）输入与输出
	lightweight[ˈlaɪtweɪt]  轻量级
		在软件开发行业中，轻量级标识褒义词
		轻量级也就意味着 运行速度快
		轻量级也就意味着有更好的 跨平台 特性（平台的差异性，兼容性）
	efficient[ɪˈfɪʃnt] 高效的

Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
Node.js 的npm包生态系统，是世界上 最大的 开源库 生态系统

	package ecosystem npm  包生态系统 npm
	largest  最大的
	open source libraries 开源库
		理论意义上 开源就表示有成熟的社区，开放源代码
	以前的 客户端中 JavaScript 库 散列在互联网的各个地方
	npm 就是 把大家经常使用的一些开源库 给 组织到了一起

Node 是一个可以解析和执行 JavaScript 代码的 运行时环境

Node.js 的作者

	瑞恩.达尔
###3.Node 的实现结构
1.V8 JavaScript 解析执行引擎   ECMAScript

2.中间层 （提供了文件操作、网络操作登陆接口）更加接近操作系统的接口供开发人员使用

3.硬件层

##4.安装与配置
###3m安装法 nvm npm nrm
###nvm 安装和管理我们的 Node.js版本

nvm的安装方式，node.js version manager 是一个node的版本管理工具
为了解决node版本切换问题
右键在此电脑上点击一下--》属性---》系统---》高级系统设置---》环境变量
控制面板---》系统---》高级系统设置---》环境变量
NVM_HOME---C:\dev\nvm
NVM_SYMLINK--C:\dev\nodejs
新建一个path     %NVM_HOME%;%NVM_SYMLINK%
	
nvm 用法

	查看版本号
	nvm list
	用哪个版本（已经下载过的版本）
	nvm use 版本号 
	nvm use 版本号 32
	下载相对应版本
	nvm install 版本号 
	nvm install 版本号 32
	
nvm下载的是二进制版本

##5.cmd控制台基本使用
允许用户可以在终端命令台中与操作系统交互，其实就是输入与输出

### 如何打开cmd

1. 通过 按 window 键，输入 `cmd` 打开cmd程序
2. 通过 `win+r`  输入 `cmd`，敲回车就可以进入

### 基本命令

- `dir` directory 列出当前目录下所有的条目
  + 别名 `ls` 在 powershell 中可以使用
- `cd` change directory 切换目录

```
切换到当前目录下的 Desktop 目录
当想切换到当前目录的时候，最好使用 cd ./ 相对路径的形式
C:\Users\iroc>cd Desktop
C:\Users\iroc\Desktop>

在Windows 上切换盘符：
`d:`

切换绝对路径之后再同一个盘符下才有效

切换到上一级目录
C:\Users\iroc\Desktop\code\seajs>cd ../
C:\Users\iroc\Desktop\code>

连续进入多级目录
C:\Users\iroc\Desktop\code>cd seajs/a
C:\Users\iroc\Desktop\code\seajs\a>
```

- `cls` clear screen 清屏
  + 别名 clear 在widnows中的 `powershell` 中可以使用

 windows下的寻址用\反斜杠 
### path 环境变量

目的是为了在控制台中的任何目录都可以快速打开或者使用该可执行文件

环境变量就是用来存储系统级别的变量

- 添加环境变量
  + 我的电脑 -> 右键选择属性 -> 高级系统设置 -> 切换到`高级`面板 -> 环境变量
  + 第一种方式：直接把可执行文件所属的目录 放到 PATH 环境变量中（如果没有PATH环境变量，自己新建）
  + 第二种方式：新建一个环境变量，变量名规范：逻辑名_HOME 变量值：该可执行文件所属的目录
  + 注意：无论是直接添加的路径还是引用的变量名，一定要用 英文的分号 区分开
  + 引用变量名的时候，变量名两边都是 `%`

`> feiq`
当你在控制台中输入一个程序的名字的时候，cmd 默认把它当成一个可执行文件去执行了，
优先找当前目录下是否有没有一个叫做feiq.exe 的可执行文件，如果有，直接执行打开
如果没有，cmd会进入 path 环境变量中 一个目录一个目录的挨着查找里面是否有该可执行文件

## REPL(Read-eval-print-loop) 运行环境

用来测试一下代码的，repl和chrome的控制台很像

- 通过在控制台中输入 `node` 敲回车就可以计入 REPL 运行环境
- 通过在REPL运行环境中 连续按两次 `Ctrl+C` 就可以退出 REPL 运行环境

## 执行js文件
 用node执行js文件，文件在当前目录下---->node +文件名
 如果不在当前目录下，node +文件路径的形式执行
 相对路径
 ./当前路径
 ../上级目录
 绝对路径执行js的方式
 node c:\Users\cena\Desktop\code\01helloworld.js
## Global
global和window很像，都是全局对象
## CONSOLE
```
断言 是用来测试用的
断言就是假定一个条件，如果条件成立则不输出任何内容，如果条件不成立则报错还要输出想要输出的内容。
console.assert(条件,条件不成立输出的内容);
var foo=3;
console.assert(foo==3,"失败");
time() timeEnd()成对出现，计算在两个方法中间的代码的运行时间，传入的参数要一致
console.time('test');


console.timeEnd('test1');
```

### __dirname 和 __filename
__dirnamee 用来找到当前文件夹的路径
__filename 用来去到当前文件的路径
不知道代码要才哪使用的时候，用于灵活的写代码取路径的时候。
它们属于模块作用域，可以直接使用
它们两个用来获取路径的，一般用于操作文件路径的时候，才会用到

## process

process 是一个全局可用对象，用来和我们现在启动中的node进行交互的
process.version取版本号
在控制台做标准输出
process.stdout.write(`123123`);
process.pid：当前进程的进程号。
process.version：Node的版本，比如v0.10.18。
process.platform：当前系统平台，比如Linux。
process.env：指向当前shell的环境变量，比如process.env.HOME。
process.stdout：指向标准输出。
process.stdin：指向标准输入。
process.stderr：指向标准错误。
## 模块系统
## node.js模块化
```
一个js文件在node里面我们就理解为一个模块
require用来加载模块
module.exports用来曝露属性和方法的，因为模块有封装性，需要打破封装性曝露方法和属性来
exports是module.exports的别名，exports可以做的事情，module.exports都可以做，exports只能用.的形式曝露属性和方法
```


