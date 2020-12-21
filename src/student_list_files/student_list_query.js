window.onload = function ()
{
	document.getElementById("queryButton").onclick = function ()
	{
		var queryText = document.getElementById("queryText").value.toString();
//		alert("Querying "+typeof(queryText)+" "+queryText);

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/student_list?'
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
						"htmlColumnNames" : ["学号","姓名","学院","年级","班级","宿舍号","床位"],
						"jsonObjectNames" : ["StuID","StuName","StuMajor","StuGrade","StuClass","DormID","BedID"],
					};
					console.log(tableColumns);
					var htmlTable = json2table(res.data, tableColumns);
					console.log(htmlTable);
					document.getElementById("student_list_table").innerHTML = htmlTable;
				}
			}
		};
	}
}