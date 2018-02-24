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
### 边框 border
border-top-style

	solid 实线 dotted 点线 dashed 虚线
border-top-color 边框颜色
border-top-width 边框粗细
### 边框属性连写
没有顺序，style为必写项
### 边框合并 border-collapse
### 表单控件边框

	outline-style:none   
取消轮廓线

	:focus 
获取鼠标光标焦点
	
	input:focus{}
取消表单边框

	border:0 none; 兼容性好
label标签

	<label for="ID名"> 友好性好
### 内边距

	padding-left|right|top|bottom
#### padding连写
padding:20px; 上下左右内边距都是20px
padding:20px 30px; 上下20px 左右30px
padding：20px 30px 40px; 上内边距为20px 左右内边距为30px 下内边距为40px
padding：20px 30px 40px 50px

#### 盒子的宽度=定义的宽度+边框宽度+左右内边距
#### 继承的盒子一般不会被撑大
包含（嵌套）的盒子，如果子盒子没有定义宽度，给子盒子设置左右内边距，一般不会撑大盒子。
#### 外边距
	margin-left|right|top|bottom
#### 外边距连写
margin:20px; 上下左右20
margin:20px 30px; 上下20 左右30
margin:20px 30px 40px; 上20 左右30 下40 
margin:20px 30px 40px 50px; 上20 右30 下40 左50
#### 垂直方向外边距合并
两个盒子垂直一个设置上外边距，一个设置下外边距，取的设置较大的值。
#### 嵌套的盒子外边距塌陷
解决方法:
  
		1 给父盒子设置边框
        2 给父盒子overflow:hidden;
#### 行内元素
行内元素可以定义左右的内外边距，上下会被忽略掉
行内块可以定义内外边距
#### 文档流（标准流）
元素自上而下，自左而右，块元素独占一行，行内元素在一行上显示，碰到父集元素的边框换行。
#### 浮动布局
	float:  left   |   right
特点：
★元素浮动之后不占据原来的位置（脱标）
★浮动的盒子在一行上显示
★行内元素浮动之后转换为行内块元素。（不推荐使用，转行内元素最好使用display: inline-block;）
浮动的作用:
◆文本绕图
◆制作导航
◆网页布局
#### 清除浮动
当父盒子没有定义高度，嵌套的盒子浮动之后，下边的元素发生位置错误。
◆清除浮动不是不用浮动，清除浮动产生的不利影响。
◆清除浮动的方法
clear: left  |  right  | both
工作里用的最多的是clear:both;
★额外标签法
 在最后一个浮动元素后添加标签

	<div>
		<div></div>
		<div style="clear:both;"></div>
	</div>
★给父集元素使用overflow:hidden;    bfc
  如果有内容出了盒子，不能使用这个方法。

	<div style="overflow:hideen">
		<div></div>
		<div></div>
	</div>
★伪元素清除浮动  推荐使用

	.clearfix:after{
		content:".";
		display:block;
		height: 0;
		line-height:0;
		visbility:hidden;
		clear:both;
	}
	/*兼容ie浏览器*/
	.clearfix{
		zoom:1;
	}
	<div class="clearfix">
		<div></div>
		<div></div>
	</div>
### CSS初始化
腾讯：

	body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
	body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;} 
	a{color:#2d374b;text-decoration:none} 
	a:hover{color:#cd0200;text-decoration:underline} 
	em{font-style:normal} 
	li{list-style:none} 
	img{border:0;vertical-align:middle} 
	table{border-collapse:collapse;border-spacing:0} 
	p{word-wrap:break-word} 


新浪：

	body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;} 
	body{background:#fff;color:#333;font-size:12px; margin-top:5px;font-family:"SimSun","宋体","Arial Narrow";}
	ul,ol{list-style-type:none;} 
	select,input,img,select{vertical-align:middle;} 
	a{text-decoration:none;} 
	a:link{color:#009;} 
	a:visited{color:#800080;} 
	a:hover,a:active,a:focus{color:#c00;text-decoration:underline;} 
淘宝：
	
	body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; } 
	body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; } 
	h1, h2, h3, h4, h5, h6{ font-size:100%; } 
	address, cite, dfn, em, var { font-style:normal; } 
	code, kbd, pre, samp { font-family:couriernew, courier, monospace; } 
	small{ font-size:12px; } 
	ul, ol { list-style:none; } 
	a { text-decoration:none; } 
	a:hover { text-decoration:underline; } 
	sup { vertical-align:text-top; } 
	sub{ vertical-align:text-bottom; } 
	legend { color:#000; } 
	fieldset, img { border:0; }
	button, input, select, textarea { font-size:100%; } 
	table { border-collapse:collapse; border-spacing:0; } 
#### overflow

	overflow:visible;
默认值，内容不会被修剪，会呈现在元素框外
	overflow:hidden;
内容会被修剪，并且其余内容是不可见的
	overflow:scorll
内容会被修剪，但是浏览器会显示滚动条以便查看其余内容
	overflow:auto
如果内容被修剪，则浏览器会显示滚动条以便查看其余内容
### 定位
定位方向: left  | right  | top  | bottom
#### 静态定位
position:static;  默认值，就是文档流。
#### 绝对定位
Position:absolute;
特点：
★元素使用绝对定位之后不占据原来的位置（脱标）
★元素使用绝对定位，位置是从浏览器出发。
★嵌套的盒子，父盒子没有使用定位，子盒子绝对定位，子盒子位置是从浏览器出发。
★嵌套的盒子，父盒子使用定位，子盒子绝对定位，子盒子位置是从父元素位置出发。
★给行内元素使用绝对定位之后，转换为行内块。（不推荐使用，推荐使用display:inline-block;）
#### 相对定位
Position: relative;
特点：
★位置从自身出发。
★还占据原来的位置。
★子绝父相（父元素相对定位，子元素绝对定位）
◆嵌套的盒子，父元素相对定位，子元素绝对定位，子元素从父元素出发设置自身位置。
★行内元素使用相对定位不能转行内块
#### 固定定位
Position:fixed;
特点：
★不占据原来的位置（脱标）
★位置从浏览器出发。
★会转化为行内块（不推荐，推荐使用display:inline-block;）
#### 定位中的盒子居中显示
让标准流的盒子居中对齐：

	margin:0 auto; 
定位的盒子居中：先左右走父元素盒子的一半50%，在向左走子盒子的一半(margin-left:负值。)
	left: 50%;
	margin-left:-480px;
### 标签包含规范
1. div可以包含所有的标签。
2. p标签不能包含div h1等标签。
3. h1可以包含p，div等标签。
4. 行内元素尽量包含行内元素，行内元素不要包含块元素。

### 规避脱标流
1. 尽量使用标准流。
2. 标准流解决不了的使用浮动。
3. 浮动解决不了的使用定位。


	/*设置盒子左外边距为auto，将盒子冲到右边*/
	margin-left:auto;

### 图片和文字垂直居中对齐

	img{
		/*图片与文字垂直居中对齐*/
		vertical-align:middle;
	}
vertical-align对inline-block最敏感。默认属性是:vertical-align:baseline;
### Css可见性

	overflow:hidden;   溢出隐藏    
	visibility:hidden;   隐藏元素    隐藏之后还占据原来的位置。
	display:none;      隐藏元素    隐藏之后不占据原来的位置。
	Display:block;     元素可见
	Display:none  和display:block  常配合js使用。
### css之内容移除（网页优化）
text-indent

	a{
		display:inline-block;
		text-indent:-5000em
	}
将元素高度设置为0,使用内边距将盒子撑开，给盒子使用overflow:hidden;将文字隐藏。
	
	.box{
		height:0;
		padding-top:100px;
		overflow:hidden;
	}
### Css精灵图
### 属性选择器
	input[type=text][class]{}
### emmet快捷键：
emmet是我们在sublime中的一个插件在这个插件中集成很多的快捷键。
html:
####生成结构的快捷键：
！+ tab,可以生成html5的结构代码。
####生成id名和类名
标签名.类名#id名+tab
没有标签名.类名+tab ==>div
####生成同级元素：
标签名+标签名+标签名 “+”tab
####生成子类标签
标签名>子标签名>子标签名>子标签名+tab
标签名>子标签名>子标签名>子标签名^^子标签名+tab
####带固定数量的标签:
			ul>li*5+tab
####带有序号名称	
ul>li.abc$*3 + tab
####生成带有内容的标签：
ul>li>a{item}*5
####css
		width:30px==>w30+tab
  Height:30px==>h30+tab
  Margin:30px==>mg30+tab
Padding:30px==> pd30+tab
Line-height:12px==>lh12px+tab
Background==>bg+tab
