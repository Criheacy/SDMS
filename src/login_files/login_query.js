window.onload = function () {
	$('body').particleground({
		dotColor: '#5cbdaa',
		lineColor: '#5cbdaa'
	});
	createCode();

	document.getElementById("login_info_submit").onclick = function() 
	{
		if (!validate()) return;

		var httpRequest = new XMLHttpRequest();
		httpRequest.open('POST', 'http://localhost:8080/', true);
		httpRequest.setRequestHeader("Content-type", "application/json");

		var date = new Date();

		const obj =
		{
			"type" : "login",
			"data": {
				"userName" : document.getElementById("userNameText").value,
				"userPwd" : document.getElementById("userPwdText").value,
				"timeStamp" : date.toLocaleString(),
			}
		};

		alert(obj);
		console.log(obj);

		httpRequest.send(JSON.stringify(obj));

		alert(JSON.stringify(obj));
		console.log(JSON.stringify(obj));

		httpRequest.onreadystatechange = function ()
		{
			if (httpRequest.readyState == 4 && httpRequest.status == 200)
			{
				var json = httpRequest.responseText;
				console.log(json);
			}
		};
	}
}