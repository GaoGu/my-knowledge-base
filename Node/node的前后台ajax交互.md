#页面ajax
    function changePasswordAjax(newPassword){
            $.ajax({
                type: 'post',//请求的URL
                url: '/changePassword',规定请求的类型（GET 或 POST）。
                async: false,//表示请求是否异步处理。默认是 true。
                data: {
                    userID:loginUser._id,
                    oldPassword:loginUser.password
					},//规定要发送到服务器的数据。
                dataType: 'json',//预期的服务器响应的数据类型。
                cache: false,//表示浏览器是否缓存被请求页面。默认是 true。
                timeout: 5000,//设置本地的请求超时时间（以毫秒计）。5秒
                success: function(result,data){
					var status = result.status;//
                    if(result.status=="success"){
                        console.info("OK");
                    }
                },//当请求成功时运行的函数。success(result,status,xhr)
                error: function(){

                }//如果请求失败要运行的函数。error(xhr,status,error)
            });
    }
## error参数详解
一般error函数返回的参数有三个： function(jqXHR jqXHR, String textStatus, String errorThrown)。

第一个参数 jqXHR jqXHR

	这里的jqXHR是一个jqXHR对象
	在Jquery1.4和1.4版本之前返回的是XMLHttpRequest对象
	1.5版本以后则开始使用jqXHR对象，该对象是一个超集，
	就是该对象不仅包括XMLHttpRequest对象，还包含其他更多的详细属性和信息。
主要有4个属性：

	readyState :当前状态,0-未初始化，1-正在载入，2-已经载入，3-数据进行交互，4-完成。
	status  ：返回的HTTP状态码，比如常见的404,500等错误代码。
	statusText ：对应状态码的错误信息，比如404错误信息是not found,500是Internal Server Error。
	responseText ：服务器响应返回的文本信息
第二个参数 String textStatus

	返回的是字符串类型，表示返回的状态，
	根据服务器不同的错误可能返回下面这些信息：
	"timeout"（超时）, "error"（错误）, "abort"(中止), "parsererror"（解析错误），
	还有可能返回空值。
第三个参数 String errorThrown

	也是字符串类型，表示服务器抛出返回的错误信息，
	如果产生的是HTTP错误，那么返回的信息就是HTTP状态码对应的错误信息，
	比如404的Not Found,500错误的Internal Server Error。
## error测试 
                error: function(xhr,textStatus,errorThrown){
                    console.info("错误提示： " + xhr.status + 
								"\n\r" + xhr.statusText+
								"\n\r"+textStatus+
								"\n\r"+errorThrown);
					//把服务端接收方法注释掉
						输出结果为
						404 
						Not Found
						error
						Not Found
                }
#node服务器代码
	app.post('/changePassword', index.changePassword);
	exports.changePassword = function (req, res) {
		//服务端通过req的body接收ajax的post数据
        var data = req.body;
		var userID = data.userID;
		var oldPassword = loginUser.password;
		//通过res的json方法向客户端发送一个 JSON 格式的响应
        res.json({status:'success'});

	}
