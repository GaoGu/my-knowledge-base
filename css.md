### css概念
css指层叠样式表(Cascading Style Sheets)(级联样式表)

	<style type="text/css">

	</style>

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


