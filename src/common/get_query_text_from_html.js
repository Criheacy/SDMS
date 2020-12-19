document.onreadystatechange = function()
{
	console.log("FLAG");
	document.getElementById("stuID").onchange = function() {
		var stuIDText = document.getElementById("stuID").value.toString();
		var stuNameText = getStuNameByStuID(stuIDText, function (stuNameText) {
			document.getElementById("_stuName").value = stuNameText;
			document.getElementById("_stuName").setAttribute("disabled", "disabled");
		});
	};
}