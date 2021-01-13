window.onload = function()
{
    document.getElementById("submitButton").onclick = function()
    {
        var stuID = document.getElementById("stuID").value.toString();
		var stuName = document.getElementById("stuName").value.toString();
		var stuMajor = document.getElementById("stuMajor").value.toString();
		var stuGrade = document.getElementById("stuGrade").value.toString();
		var stuClass = document.getElementById("stuClass").value.toString();
        
        var url = 'http://localhost:8080' + '/s/add_student?'
				+ 'stuID=' + stuID + '&stuName=' + stuName
                + '&stuMajor=' + stuMajor + '&stuGrade=' + stuGrade
                + '&stuClass=' + stuClass;
        
		console.log(url);

        var httpRequest = new XMLHttpRequest();
        httpRequest.setRequestHeader("Content-type", "application/json");
        
		httpRequest.open('GET', url, true);
		httpRequest.send();
		
		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState == 4 && httpRequest.status == 200) {
				var res = httpRequest.responseText;
				console.log(res);
				res = JSON.parse(res);
				console.log(res.code);
				if (res.code == 1)
					alert("新学生信息添加成功！");
			}
		};
    }
}