window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var stuID = document.getElementById("stuIDText").value.toString();
		var stuName = document.getElementById("stuNameText").value.toString();
		var leaveType = document.getElementById("leaveTypeText").value.toString();
		var leaveStartingDate = document.getElementById("startingDateText").value.toString();
		var leaveEndingDate = document.getElementById("endingDateText").value.toString();
		var issue = document.getElementById("issueText").value.toString();
		var note = document.getElementById("noteText").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/leave_application?'
				+ 'stuID=' + stuID + '&leaveStartingDate=' + leaveStartingDate
				+ '&leaveEndingDate=' + leaveEndingDate
				+ '&issue=' + issue + '&note=' + note;
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