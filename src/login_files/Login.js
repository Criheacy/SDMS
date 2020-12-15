function login()
{
	var httpRequest = new XMLHttpRequest();//第一步：新建对象

	var url = 'http://localhost:8080' + '/s?'
			+ 'userName=' + userName + '&'
			+ 'userPwd=' + userPwd;
	console.log(url);

	httpRequest.open('GET', url, true);//第二步：打开连接  将请求参数写在url中 
	httpRequest.send();//第三步：发送请求  将请求参数写在URL中
	/*
	 * 获取数据后的处理程序
	 */
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			var res = httpRequest.responseText;//获取到json字符串，解析
			console.log(res);
		}
	};
}