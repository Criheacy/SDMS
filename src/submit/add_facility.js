window.onload = function ()
{
	document.getElementById("submitButton").onclick = function ()
	{
		var FaciRoomID = document.getElementById("faciRoomIDValue").value.toString();
		var BuildingID = document.getElementById("buildingIDValue").value.toString();
		var FaciType = document.getElementById("faciTypeValueD").value.toString();
		var FloorID = document.getElementById("floorValue").value.toString();
		var Note = document.getElementById("noteValue").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/add_facility?'
				+ 'FaciRoomID=' + FaciRoomID + '&BuildingID=' + BuildingID
				+ '&FaciType=' + FaciType
				+ '&FloorID=' + FloorID + '&Note=' + Note;
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