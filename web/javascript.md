### js组成部分
	JS  =  ECMAScript  +  DOM  +  BOM + 高级
ECMAScript（前身为欧洲计算机制造商协会）

	JavaScript的语法规范
DOM（Document Object Model 的简称）

	JavaScript操作网页上元素的API
BOM（Browser Object Model 的简称）

	JavaScript操作浏览器部分功能的API
### 弱类型脚本语言（解释型语言，解析执行与编译执行）
解析执行与编译执行
编译执行：把代码编译成CPU认识的语言(文件)，然后整体的执行。
解析执行：一行一行解析，解析一行执行一行。

弱类型脚本语言
脚本语言是：弥补编译语言的不足而存在的，作为补充语言，不用编译。
弱类型语言：简单理解定义一个变量，可以有多种数据类型。（var temp）
### js书写位置
内嵌式

	<script type="text/javascript">
		alert("hello");
	</script>	 
外链式
	
	<script src="1.js"></script>
推荐将JS代码写在html结束标签后边
将多个JS文件合成为一个JS文件
### 输出消息的几种方式
	alert("hello");// 在页面弹出一个对话框，早期JS调试使用
	confirm("hello");//在页面弹出一个对话框, 常配合if判断使用
	console.log("hello");//将信息输入到控制台，用于js调试
	prompt("请输入银行卡号");//弹出对话框，用于接收用户输入的信息
	document.write("<span>hello</span>");//在页面输出消息
转义字符

	\" 	转双引
	\'	转单引
	\n	转换行	
	\r	转回车
### js注释
	快捷键 ctrl+/
	单行注释 //
	多行注释 /*	*/
## 变量
变量是用来存储数据的容器
### 变量的命名规范

	驼峰命名规则：getElementById/matherAndFather/aaaOrBbbAndCcc
	遵从规则：
	1.变量命名必须以字母或是下标符号”_”或者”$”为开头。
	2.变量名长度不能超过255个字符。
	3.变量名中不允许使用空格，首个字不能为数字。
	4.不用使用脚本语言中保留的关键字及保留符号作为变量名。
	5.变量名区分大小写。(javascript是区分大小写的语言)
	6.汉语可以作为变量名。但是不建议使用！！！（low）
## 数据类型
### 简单数据类型
数字类型

	Number  
	包含正数  负数  小数
字符串
	
	String
	凡是用双引号或者单引号引起的都是字符串
布尔数据类型    

	Boolean
	只有2个值一个是true, 一个是false.   实际运算中true=1,false=0
undefined    

	变量未初始化
	定义了变量，没有给变量赋值

null  

	变量未引用  值为空   object
### 复杂数据类型（引用类型）
object 对象
array  数组
Object、function、Array、Date、RegExp、Error.
### 判断数据类型
typeof()
### 比较运算符
	<  >   <=  >=   ==  !=
### 算术运算符
加号 +

    两个数字类型的变量相加，得到的是一个数字类型。
    一个数字类型和一个字符串相加，得到的是一个字符串。
减号 -

	两个数字类型的变量相减，得到的是一个数字类型。
    一个数字类型和一个数字字符串相减，得到的是一个数字类型。
    一个数字类型和一个非数字字符串相减，得到的是NaN,是一个数字类型。
*
	同上
/ 除号

	 两个数字类型的变量相除，得到的是一个数字类型。
	 一个数字类型和一个数字字符串相除，得到的是一个数字类型。
	 一个数字类型和一个非数字字符串相除，得到的是NaN,是一个数字类型。    
	0做为除数的时候，得到结果	Infinity （无限大），是一个数字类型。
%  

	取余数

优先级
  
	有()先计算()里边的
### 带操作的赋值运算
	运算符	示例		等价于
	+=		a+=b	a=a+b
	-=		a-=b	a=a-b
	*=		a*=b	a=a*b
	/=		a/=b	a=a/b
### Date()对象
Date对象用于处理日期和时间

	var mydate = new Date();
	Date();返回完整当前时间
	mydate.getDay();返回当前是周几
	mydate.getMonth()+1;当前月份
	mydate.getFullYeat();当前年份
	mydate.getHours();小时
	mydate.getMinutes();分钟
	mydate.getSeconds();秒数
### Math对象
	Math.ceil(n1); //天花板函数 小数向上取整
	Math.floor(n1); //地板函数 小数向下去整
	Math.round(n1); //小数四舍五入
	Math.max(n1,n2); //去两个数的最大值
	Math.min(n1,n2); //两个数的最小值
	Math.pow(n1,n2);//返回n1的n2次方
	Math.random();//返回0-1之间的随机数
### 数据类型转换
数字类型转字符串
	
	String()
	toString()
	var n1 = 123;
	var n2 = String(n1);
	var n3 = n1.toString();
字符串转数字类型
Number
	
	var n = Number(n);
	数字类型字符串，转换后得到数字
	非数字字符串，转换后得到是NaN
	小数类型的字符串，转换后得到原数字
parseInt

	parseInt(n);
	★整数数字类型的字符串，转换之后得到的整数数字。
	★数字开头的字符串，转换之后得到的是前边的数字。
	★非数字开头的字符串，转换之后得到的是NaN。
	★小数类型的字符串，转换之后取整。
parseFloat

	★整数数字类型的字符串，转换之后得到的整数数字。
	★数字开头的字符串，转换之后得到的是前边的数字。
	★非数字开头的字符串，转换之后得到的是NaN。
	★小数类型的字符串，转换之后得到的是原数字。
转布尔类型

	var n1 = Boolean(n);
	★数字和字符串转完之后为true。
	★undefined、null、0转完之后为false.
隐式数据类型转换

	在运算过程中，程序自己进行的数据转换(程序员没有操作)
### 逻辑运算符
逻辑运算只有2个结果，一个为true,一个为false.
且&&

	★两个表达式为true的时候，结果为true.
或||

	★只要有一个表达式为true,结果为true.

非！

	★和表达式相反的结果。
		
## 等号运算符
“=”赋值运算符
“==”只判断内容是否相同，不判断数据类型。
“===”不仅判断内容，还判断数据类型是否相同。
!=  只判断内容是否不相同，不判断数据类型。
!==不全等于  不仅判断内容是否不相同，还判断数据类型是否不相同。
### 变量的集体声明
var n1=1,n2=2,n3=3;n1+=n2;
### if...else  条件判断

	if(条件表达式){
	  	如果条件表达式结果为true,执行该处代码。下边代码不执行。如果为false,执行下边代码。
	}else  if(条件表达式){
		如果条件表达式结果为true,执行该处代码。下边代码不执行。如果为false,执行下边代码。
	}else  if(条件表达式){
		如果条件表达式结果为true,执行该处代码。下边代码不执行。如果为false,执行下边代码。
	}else{
		如果上边条件表达式结果都为false,执行该处代码。
	}
### 三元表达式
	
	n1%2==0?alert("偶数"):alert("奇数")；
表达式?结果1：结果2；
如果表达式结果为true,执行结果1，如果表达式结果为false,执行结果2.
### Switch
	Switch(变量){
		case 1:
		如果变量和1的值相同，执行该处代码
		break;

		case 2:
		如果变量和2的值相同，执行该处代码
		break;

		case 3:
		如果变量和3的值相同，执行该处代码
		break;

		default:
		如果变量和以上的值都不相同，执行该处代码
		break;
	}
switch后边的变量和case后边值的数据类型必须保持一致
对变量进行集体判断：
	Switch(变量){
		case 1:case 2:case 3:
		如果变量和1、2、3的值相同，执行该处代码
		break;

		default:
		如果变量和以上的值都不相同，执行该处代码
		break;
	}
### 自增自减
i++  ++i
在不参与运算的情况下，i++和++i都是在变量的基础加1
在参与运算的情况下，i++先赋值运算再加1，++i先自增，再赋值运算
### while循环
	While(条件表达式){
	   只要条件表达式结果为true,循环一直执行，当条件表达式结果为false的时候，循环终止
	}
While循环语句需现在循环体外定义变量。
### do while
	Do{
		循环体代码；首先执行该循环体代码一次。如果while后边的表达式结果为true,该循环体会一直循环。如果结果false,该循环终止。
	}while(条件表达式)
do  while 比while循环多循环一次。
### for循环
	for(定义变量;条件表达式;自增自减){
		循环体代码
	}
执行顺序:
◆首先定义变量
◆如果条件表达式结果为true的时候，执行for循环里的代码，如果为false，循环体代码终止执行。
◆先执行变量和条件表达式循环一次，再执行自增自减。
### Break语句
在循环体内，只要代码遇到break,程序立马结束当前循环。
当前循环指的是break语句所在的循环体。
### continue
Continue语句指的是跳出本次循环，该语句continue后面的代码不再执行,整个循环体继续循环。
## 数组
数组定义

	var ary = new Array();//通过创建对象方式创建数组
	var ary1 = [];//直接创建一个数组
赋值

	//数组中通过下标的方式进行赋值。下标从0开始。
	ary1[0] = 123;
	ary1[1] = 456;
遍历

	for(var i=0;i<5;i++){
		console.info(ary[i]);
	}
通过数组名.length获取数组长度（元素个数）

	for(var i=0;i<ary.length;i++){
		console.info(ary[i]);
	}
	
数组合并concat

	var ary3 = ary1.concat(ary2);
Join方法返回一个字符串数组

	var ary2 = ary1.join("&");
## 函数
通过 function  关键字
和自定义方法名 既可定义一个函数
	function test(){
		console.info("hello");
	}
方法的调用
	test();
自调用函数
(function(){alert("hello")})();
