window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var visitorName = document.getElementById("visitorName").value.toString();
		var purpose = document.getElementById("purpose").value.toString();
		var arriveTime = document.getElementById("arriveTime").value.toString();
		var leaveTime = document.getElementById("leaveTime").value.toString();
		var adminID = document.getElementById("adminID").value.toString();
		var visStuID = document.getElementById("visStuID").value.toString();
		var visDormID = document.getElementById("visDormID").value.toString();
		var note = document.getElementById("note").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/visitor_record?'
				+ 'visitorName=' + visitorName + '&purpose=' + purpose
				+ '&arriveTime=' + arriveTime + '&leaveTime='+ leaveTime
				+ '&adminID=' + adminID + '&visStuID=' + visStuID
				+ '&visDormID=' + visDormID + '&note='+ note;
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