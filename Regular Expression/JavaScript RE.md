## JavaScript 正则表达式
### 语法

	/正则表达式主体/修饰符(可选)
### search()
search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

使用字符串

	var str = "Visit Runoob!"; 
	var n = str.search("Runoob");\\结果为6
使用正则表达式

	var str = "Visit Runoob!"; 
	var n = str.search(/Runoob/i);\\结果为6
### replace() 
replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

使用字符串

	var str = "Visit Microsoft!"; 
	var txt = str.replace("Microsoft","Runoob");\\txt为Visit Runoob!
使用正则表达式

	var str = "Visit Microsoft!"; 
	var txt = str.replace(/microsoft/i,"Runoob");

## 正则表达式修饰符

修饰符|描述
-|-
i|执行对大小写不敏感的匹配
g|执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）
m|执行多行匹配
## 正则表达式的模式
方括号用于查找某个范围内的字符:

表达式|描述
-|-
[abc]|查找方括号之间的任何字符
[0-9]|查找任何从 0 至 9 的数字
(x竖线y)|查找任何以 竖线 分隔的选项

元字符是拥有特殊含义的字符：
元字符|描述
-|-
\d|查找数字
\s|查找空白符
\b|匹配单词边界
\uxxxx|查找以十六进制数 xxxx 规定的 Unicode 字符

量词：
量词|描述
-|-
n+|	匹配任何包含至少一个 n 的字符串。
n*|	匹配任何包含零个或多个 n 的字符串。
n?|	匹配任何包含零个或一个 n 的字符串。

### RegExp 对象
在 JavaScript 中，RegExp 对象是一个预定义了属性和方法的正则表达式对象。
### test()
test() 方法是一个正则表达式方法。
test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。

	var patt = /e/;
	patt.test("The best things in life are free!");//输出true
### exec()
exec() 方法是一个正则表达式方法。
exec() 方法用于检索字符串中的正则表达式的匹配。
该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
