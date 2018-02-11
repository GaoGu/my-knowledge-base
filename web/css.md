### css概念
css指层叠样式表(Cascading Style Sheets)(级联样式表)
### 书写位置
内嵌式
★内嵌式写法，样式只作用于当前文件，没有真正实现结构表现分离。

	<head>
		<style type="text/css">
	
		</style>
	</head>
外链式
★外链式写法，作用范围是当前站点，谁调用谁生效，范围广，真正实现结构表现分离。

	<link rel=”stylesheet” href=”1.css”>
行内样式表
★行内样式表，作用范围仅限于当前标签，范围小，结构表现混在一起。

	<div style="color:red"></div>

## 基础选择器
### 标签选择器

	div {
		color:red;
	}

### 颜色
-  直接写颜色的名字
-  十六进制
 \#000000 前两位代表红色 中间两位绿色，后面两位蓝色
- rgb
	
		color:rgb(120,120,120);
- rgba
A代表alpha，不透明度 值0-1

		color:rgba(102,217,239,0.5);
### 类选择器

	.自定义类名{属性：值;}
类选择器命名规则
- 不能用纯数字或者数字开头来定义类名
- 不能使用特殊符号或者特殊符号开头（_）来定义类名
- 不建议使用汉字来定义类名
- 不推荐使用属性或者属性的值来定义类名
### ID选择器

		#自定义id名｛属性：值;｝
特点： 一个ID选择器在一个页面只能调用一次。如果使用2次或者2次以上，不符合w3c规范，JS调用会出问题。
一个标签只能调用一个ID选择器。
一个标签可以同时调用类选择器和ID选择器。
### 通配符选择器

		*{属性：值;}
特点：给所有的标签都使用相同的样式。
不推荐使用，增加浏览器和服务器负担。
## 复合选择器
概念：两个或者两个以上的基础选择器通过不同的方式连接在一起。
### 交集选择器

		标签+类（ID）选择器{属性：值；}
		div.box{}
		div#box{}
### 后代选择器
		选择器+空格+选择器{属性：值;}
特点：无限制隔代。
只要能代表标签，标签、类选择器、ID选择器自由组合。
### 子选择器

	选择器>选择器{属性:值;}
	div>span{}
### 并集选择器

	选择器，选择器，选择器{属性:值;}
	.box,#box,span,div{}
## 文本

### 属性

	div{
		font-size:16px; //文字大小
		font-weight:700; //值从100-900，文字粗细
		font-family:微软雅黑; //字体
		font-style:normal|italic; n默认值，it斜体
		line-height;//行高
	}
### 字体的表达方式
![](https://i.imgur.com/vKlZfEa.png)
- 直接写中文
 
		font-family:微软雅黑;
- 英文名称
 
		font-family:microsoft yahei;
- unicode 编码
 
		font-family:\u5FAE\u8F6F\u96C5\u9ED1;
escape("微软雅黑")
能得到
"%u5FAE%u8F6F%u96C5%u9ED1"
![](https://i.imgur.com/x6DrWfe.png)
### 连写
	font: font-style font-weight  font-size/line-height  font-family;
注意：font:后边写属性的值。一定按照书写顺序。
文本属性连写文字大小和字体为必写项。

	Font:italic 700 16px/40px  微软雅黑;

## 元素显示方式
### 块元素
典型：`div,h1-h6,p,ul,li`
特点: 
	1. 独占一行
	2. 可以设置宽高
	2. 嵌套（包含）下，子块元素宽度（没有定义情况下）和父块元素宽度默认一致
### 行内元素
典型:`span,a,strong,em,del,ins`
特点：
	1. 在一行上显示
	2. 不能直接设置宽高
	3. 元素的宽和高就是内容撑开的宽高
### 行内块元素
典型：`input img`
特点:
	1. 在一行显示
	2. 可以设置宽高
### 块元素、行内元素

	//块转行
	div,p{
		display:inline;
	}
	//行转块
	span{
		display:block;
	}
	//块和行内转行内块
	div,a,span{
		display:inline-block;
	}
	//行内块转块元素
	input{
		display:block;
	}
	行内块转行内元素，经我测试不生效	
## css三大特性
### 层叠性
当多个样式作用于同一个（同一类）标签时，样式发生了冲突，总是执行后边的代码(后边代码层叠前边的代码)。
### 继承性
	继承性发生的前提是包含（嵌套关系）

	文字的所有属性都可以继承。

	特殊情况：
	h系列不能继承文字大小。
	a标签不能继承文字颜色。
### 优先级
	
	默认样式
	0
	标签选择器
	1
	类选择器
	10
	id选择器
	100
	行内样式
	1000
	!important
	1000以上
特点

	继承的权重为0
	权重会叠加
### 链接伪类
	/*未访问的*/
	a:link{
		color:red;
	}
	/*访问后的*/
	a:visited{
		color:green;
	}
	/*鼠标滑过*/
	a:hover{
		color:yellow;
	}
	/*选中的链接，正在点击的*/
	a:active{
		color:pink;
	}
注意： 在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。
注意： 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。

	/*获取焦点时的样式*/
	input:focus{ 
	background-color:yellow;
	}
### 文本修饰
	
	text-decoration: 
	none  默认样式  
	underline 下划线   
    line-through 穿过文本的线
### 背景属性

background-color 背景颜色
background-image 背景图片
background-repeat :	背景平铺

	repeat 背景图像将向垂直和水平方向重复。这是默认
	no-repeat 不重复|repeat-x 水平重复|repeat-y 垂直重复
background-position: 背景定位

	left  |  right  |  center  |  top  | bottom 
	方位值只写一个的时候，另外一个值默认居中。
	20px 30px;
	写2个具体值的时候，第一个值代表水平方向，第二个值代表垂直方向。
	只写一个另一个默认50%，可以混合使用
background-attachment:背景是否滚动
	
	scroll 背景图片随页面的其余部分滚动。这是默认
	fixed 背景图像是固定的

背景属性连写
	
	background:red url("1.png") no-repeat 30px 40px scroll;
连写的时候没有顺序要求，url为必写项。

## 行高

	浏览器默认文字大小：16px
	行高=文字高度+上下边距
	行高=基线与基线之间的距离
![](https://i.imgur.com/MfRBzrL.png)
一行文字行高和父元素一致时，垂直居中显示
### 行高的单位
行高

	line-height
	单位 2	2em	150%	40px

文字大小

	font-size

只有一个元素

	行高单位除了像素以外，行高都是与文字大小乘积。

父元素和子元素时

	不带单位时，子元素行高是和子元素文字大小相乘，em和%的子元素行高是和父元素文字大小相乘。
	子元素行高以像素为单位，就是定义的行高值。
◆推荐行高使用像素为单位。
## 盒子模型

