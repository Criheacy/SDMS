window.onload = function ()
{
	document.getElementById("queryButton").onclick = function ()
	{
		var queryText = document.getElementById("queryText").value.toString();
		alert("Querying "+typeof(queryText)+" "+queryText);

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
			}
		};
	}
}