var token;

function login(userName, userPwd)
{	
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
    httpRequest.send(JSON.stringify(obj));

    httpRequest.onreadystatechange = Response();
}


function Response ()
{
	var json = httpRequest.responseText;
	if (json.code != 200)
		;
	
	var data = json.data;
	if (data.userType == 'Student')
	{
		location.herf = "StudentIndex.html";
	}
	
	token = json.token;
};