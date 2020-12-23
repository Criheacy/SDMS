window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var StuID = document.getElementById("studentIDValue").value.toString();
		var DormID = document.getElementById("dormitoryIDValue").value.toString();
		var BedID = document.getElementById("bedIDValueD").value.toString();
		var IsHeader = document.getElementById("isHeaderValue").value.toString();
		

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/add_dormitory_student?'
				+ 'StuID=' + StuID + '&DormID=' + DormID
				+ '&BedID=' + BedID
				+ '&IsHeader=' + IsHeader ;
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