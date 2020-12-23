window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var StuID = document.getElementById("studentIDValue").value.toString();
		var StuName = document.getElementById("studentNameValue").value.toString();
		var StuMajor = document.getElementById("majorValueD").value.toString();
		var StuClass = document.getElementById("classValue").value.toString();
		var StuGrade = document.getElementById("gradeValue").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/add_student?'
				+ 'StuID=' + StuID + '&StuName=' + StuName
				+ '&StuMajor=' + StuMajor
				+ '&StuClass=' + StuClass + '&StuGrade=' + StuGrade;
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