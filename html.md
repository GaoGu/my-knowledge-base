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

## HTML5标签结构

	!+tab 可以写成html5结构

## 字符编码

	Ascll Ansi Unicode Gbk GB2321 Big5 utf-8（通用编码）
## meta 

	<!-- 指定网页关键字 - 用于告诉搜索引擎网页内容相关关键词。 -->
	<meta name = "keyworks" content = "HTML, HTML DOM, JavaScript">
	<!-- 指定页面描述。搜索索引擎可以使用这个描述作为搜索结果。 -->
	<meta name = "description" content = "免费编程入门教程">
	<!--重定向-->
	<meta http-equiv="refresh" content="1;http://www.baidu.com">

## link

	<!-- 链接外部样式表 -->
	<link rel="stylesheet" href="1.css">
	<!--设置icon图标-->
	<link rel="icon" href="favicon.ico">

## 表格

	<table cellspacing="2" cellpadding="2">
		<tr>
			<td></td>
		</tr>
	</table>		
	属性 
	cellspacing="2" 单元格与单元格的距离
	cellpadding="2" 单元格边距 内容距边框的距离
	align="left | center | right"
	如果直接给表格用align=”center”  表格居中
	如果给tr或者td使用   ，tr或者td内容居中。

### 表格标准结构
	
	<table>
		<thead>
			<tr>
				<td></td>
				<td></td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td></td>
				<td></td>
			</tr>
		</tfoot>
	</table>

### 表头与单元格合并
	
	<table border="1">
		<caption>表头</caption>
			<tr>
				<td colspan="2">111</td>
				<!--<td>222</td>-->
			</tr>
			<tr>
				<td>111</td>
				<td rowspan="2">222</td>
			</tr>
			<tr>
				<td>111</td>
				<!--<td>222</td>-->
			</tr>
		</tfoot>
	</table>
colspan="2"  跨列数
rowspan="2"  跨行数
	
<th>标题</th>
用法和td一样，文字自动加粗水平居中对齐
td垂直对齐方式

	<td valign="bottom">111</td>
valign="top |middle| bottom"

## 表单
	
### 表单域
	
	<form action="1.php" method="get">
属性action处理信息
method="get|post"
get 通过地址栏提供信息，安全性差
post 通过1.php处理信息，安全性高

### 文本输入框

	用户名：<input type="text" maxlength="6" readonly="readonly" disabled="disabled" name ="username" value="大前端">
	
### 密码输入框

	密码: <input type="password" name=pwd>
### 单选框
	
	<input type = "radio" name = "gender" checked="checked">男
	<input type = "radio" name = "gender">女
下拉列表

	<select multiple="multiple">
		<option selected="selected">1</option>
		<option>2</option>
		<option>3</option>
	</select>

	<optgroup label="分组名">
		<option selected="selected">1</option>
		<option>2</option>
		<option>3</option>
	</optgroup>
多选款

	<input type="checkbox" checked="checked">喝酒
	<input type="checkbox" checked="checked">喝酒
	<input type="checkbox" checked="checked">喝酒
多行文本
	<textarea cols="130" rows="10">
	cols字符长度
	rows输入行数
	</textarea>
文件上传控件
	<input type="file">
文件提交按钮
	<input type="submit">
普通按钮
	<input type="button" value="普通按钮">
不能提交信息，配合js使用
图片按钮
	<input type="image" src="按钮.jpg">
图片按钮可实现信息提交功能
### 重置按钮

	<input type="reset">
将信息重置到默认状态
### 表单信息分组
	
	<from action="1.php" method="post">
		<fieldset>对表单信息分组
			<legend>表单信息分组名称</legend>
		</fieldset>
	</form>

### hmlt5 补充表单控件

	<input type ="url">网址控件
	<input type="date">日期控件
	<input type="time">时间控件
	<input type="email">邮箱控件
	<input type="number" step="5">数字控件
	<input type="range">滑块控件

标签语义化
	好的语义化的网站标准就是去掉样式表文件之后，结构依然很清晰。
标签语义化概念：根据内容的结构化（内容语义化），选择合适的标签（代码语义化）

-标签语义化意义：
       1:网页结构合理
          2:有利于seo:和搜索引擎建立良好沟通，有了良好的结构和语     	                   义你的网页内容自然容易被搜索引擎抓取；
          3:方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）
          4:便于团队开发和维护

1：尽可能少的使用无语义的标签div和span；

2：在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；

3：不要使用纯样式标签，如：b、font、u等，改用css设置。

4：需要强调的文本，可以包含在strong或者em标签中strong默认样式是加粗（不要用b），em是斜体（不用i）；