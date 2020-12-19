window.onload = function ()
{
	document.getElementById("queryButton").onclick = function ()
	{
		var queryText = document.getElementById("queryText").value.toString();
//		alert("Querying "+typeof(queryText)+" "+queryText);

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/dormitory_list?'
				+ 'queryText=' + queryText;
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
				{
					var tableColumns = {
						"htmlColumnNames" : ["宿舍号","宿舍楼","楼层","门牌号"],
						"jsonObjectNames" : ["DormID","BuildingID","FloorID","RoomID"],
					};
					console.log(tableColumns);
					var htmlTable = json2table(res.data, tableColumns);
					console.log(htmlTable);
					document.getElementById("dormitory_list_table").innerHTML = htmlTable;
				}
			}
		};
	}
}