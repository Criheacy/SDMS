window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var stuID = document.getElementById("stuID").value.toString();
		var vacaType = document.getElementById("vacaTypeText").value.toString();
		var vacaStartDate = document.getElementById("vacaStartDateText").value.toString();
		var vacaEndDate = document.getElementById("vacaEndDateText").value.toString();
		var note = document.getElementById("noteText").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/vacation_application?'
				+ 'stuID=' + stuID + '&vacaType=' + vacaType
				+ '&vacaStartDate=' + vacaStartDate + '&vacaEndDate=' + vacaEndDate
				+ '&note=' + note;
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