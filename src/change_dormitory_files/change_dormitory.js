window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var vistorName = document.getElementById("stuID").value.toString();
		var purpose = document.getElementById("recDate").value.toString();
		var arriveTime = document.getElementById("preDormID").value.toString();
		var leaveTime = document.getElementById("aftDormID").value.toString();
		var admin = document.getElementById("aftDormID").value.toString();
		var note = document.getElementById("note").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/change_dormitory?'
				+ 'stuID=' + stuID + '&recTime=' + recTime
				+ '&preDormID=' + preDormID
				+ '&aftDormID=' + aftDormID + '&note=' + note;
		console.log(url);

		httpRequest.open('GET', url, true);
		httpRequest.send();
		
		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				var res = httpRequest.responseText;
				console.log(res);
				res = JSON.parse(res);
				console.log(res.code);
				if (res.code == 1)
					alert("请假申请添加成功！");
			}
		};
	}
}