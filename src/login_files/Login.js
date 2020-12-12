function login()
{
	var userName = ($(".userNameText"));
	var userPwd = ($(".userPwdText"));
	var httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', 'http://localhost:8080/a/login/', true);
	httpRequest.setRequestHeader("Content-type", "application/json");
	
	var nowDate = new Date();
    const obj =
    {
        "userName" : userName,
        "userPwd" : userPwd,
        "timeStamp" : nowDate.toLocaleString(),
        "userAttribute" : null
	};
	alert(JSON.stringify(obj));
    httpRequest.send(JSON.stringify(obj));
    httpRequest.onreadystatechange = Response();
}

function Response ()
{
	var json = httpRequest.responseText;
	console.log(json);
	alert(json);
};