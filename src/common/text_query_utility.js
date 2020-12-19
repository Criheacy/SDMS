function getStuNameByStuID(stuID, updateFunc)
{
	var httpRequest = new XMLHttpRequest();

	var url = 'http://localhost:8080' + '/s/get_utility/get_student_name?'
			+ 'stuID=' + stuID;
	console.log(url);

	httpRequest.open('GET', url, true);
	httpRequest.send();
	
	httpRequest.onreadystatechange = function () {
		if (httpRequest.readyState == 4 && httpRequest.status == 200) {
			var res = httpRequest.responseText;
			res = JSON.parse(res);
			if (res.code == 1)
			{
				updateFunc((res.data[0]).StuName);
			}
			else
			{
				updateFunc("（学生姓名）");
			}
		}
	};
}