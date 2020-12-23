window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var DormID = document.getElementById("dormitoryIDValue").value.toString();
		var BuildingID = document.getElementById("buildingIDValue").value.toString();
		var FloorID = document.getElementById("floorValueD").value.toString();
		var RoomID = document.getElementById("roomValue").value.toString();
		

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/add_dormitory?'
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