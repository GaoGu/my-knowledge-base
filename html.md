## 常用快捷键

	Windows+e 我的电脑
	Windows+r 打开运行
	Alt+tab   切换软件
	Ctrl+tab  软件文档之间的切换
	F2		  重命名

### Web标准
W3C组织（万维网联盟）

	HTML	结构标准	 相当于人的身体
	CSS	 	表现标准  相当于给人化妆，更漂亮
	Js		行为标准	 相当于人在唱歌，更灵动

### 浏览器内核

	IE			Chrome（谷歌）	  Firefox（火狐）   Safari（苹果）
	Trident		Blink			  Gecko			   Webkit
浏览器的内核是分为两个部分的，一是渲染引擎，另一个是JS引擎。
现在JS引擎比较独立，内核更加倾向于说渲染引擎。
渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息
兼容性出现问题的根本原因就是渲染引擎的不同

### 浏览器和服务器
1. 浏览器向服务器建发送请求（通过http协议），服务器返回响应报文
2. http协议：超文本传输协议，也就是浏览器和服务器端的网页传输数据的约束和规范
3. url协议：平时我们写的网址就是url协议，规定url地址的格式
协议规定格式：

	scheme://host.domain:port/path/filename
	scheme		因特网服务类型。如http
	host		域主机（http默认主机是www）
	domain		因特网域名 如w3school.com.cn
	:port 		定义端口号（网页默认端口是：80）
	path 		网页所在服务器上的路径
	filename 	文件名称

## Html
超文本标记语言
### Html结构标准

	< !doctype html>	声明文档类型那个
	<html>				根标签
	<head>				头标签
	<title></title>		标题标签
	</head>
	<body>				主体标签
	</body>
	</html>
	
sublime快捷键使用： http://blog.csdn.netdetails/11530751

## 标签
### 单标签
注释标签 `<!-- 注释 -->`
换行标签 `<br/>`
水平线标签 `<hr/>`
### 双标签
段落标签 
	
	<p>这是一个段落</p>
特点：上下自动生成空白行，<br/>换行不会生成空白行

标题标签
h1-h6 
h1在一个页面只能出现一次

	<h1>这是个h1</h1>

文本标签

	<font size="6" color="red">这是个文本</font>
### 文本格式化标签

文本加粗标签
	
	<strong>粗大</strong>
	<b></b>

文本倾斜标签

	<em></em>
	<i></i>

删除线标签

	<del></del>
	<s></s>
下划线标签

	<ins></ins>
	<u></u>
尽量使用`strong``em``del``ins`,因为更有语义化

### 图片标签

	<img src="图片来源（必写属性）"	alt="替换文本（图片不显示时显示的文本）"	
	title="提示文本"	 width="图片宽度"  height="图片高度">
图片没有定义宽高的时候，图片按照百分之百比例显示，如果只更改图片的宽度或者高度，图片等比例缩放。

	相对路径
	src = "../img.jpg"
	绝对路径
	src = "F:/imgs/img.jpg"
### 超链接
	
	<a  href = "去往路径（必写属性）"
		title = "提示文本 鼠标放在链接上提示的文字"
		target = "_self">
		"_self" 默认值 在自身页面打开（关闭自身页面，打开链接页面）
		"_blank" 打开新页面（自身页面不关闭，打开一个新的链接页面）
	</a>
锚链接
1. 先定义一个锚点

	<p id = "md">
2. 超链接到锚点

	<a href="#md">回到顶部</a>
空链接 
	<a href="#">空链</a>
压缩文件下载 不推荐使用

	<a href = "../../ppt.rar">压缩包</a>
超链接优化写法

	<base target="_blank"> 让所有的超链接都在新窗口打开
## 特殊字符

	特殊字符 | 描述 | 字符代码
	 - | :-: | -: 	
	| 空格符 | &nbsp;
	< | 小于号 | &lt;
	>	大于号	&gt;
	&	和号	&amp;
	¥	人民币/日元	&yen;
	©	版权	&copy;	
	®	注册商标	&reg;
	×	乘号	&times;	
	÷	除号	&divide;	

## 列表
### 无序列表
	<ul>
		<li>
		</li>
	</ul>
type = "square"	小方块	"disc"  实心小圆圈	"circle" 空心小圆圈

### 有序列表
	<ol>
		<li></li>
	</ol>	
type=”1,a,A,i,I” type的值可以为1,a,A,i,I
start=”3”  决定了开始的位置。
### 自定义列表
	
	<dl>
		<dt>小标题</dt>
		<dd>解释标题</dd>
		<dd>解释标题</dd>
	</dl>

## 音乐标签
	
	<embed src="1.mp3" hidden="true">
src 设置音乐路径 hidden 隐藏播放按钮 true隐藏 false显示
## 滚动
	
	


	
