window.onload = function ()
{
	document.getElementById("submitButton").change = function ()
	{
		var stuID = document.getElementById("stuID").value.toString();

		var httpRequest = new XMLHttpRequest();

		var url = 'http://localhost:8080' + '/s/getStuNameByID?'
				+ 'stuID=' + stuID ;
		console.log(url);

		httpRequest.open('GET', url, true);
		httpRequest.send();

		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				var res = httpRequest.responseText;
				console.log(res);
				res = JSON.parse(res);
				console.log(res.code);
				document.getElementById("stuName").value = res;
			}
		};
	}
}