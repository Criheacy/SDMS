var token;

document.getElementById("login_submit").onclick = function()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://localhost:8080/', true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    const obj =
    {
        "UserPwd" : document.getElementById("passwordValue").value,
        "UserName" : document.getElementById("userNameValue").value,
        "timeStamp" : nowDate.toLocalString(),
    };
    alert(obj);
    console.log(obj);

    httpRequest.send(JSON.stringify(obj));

    alert(JSON.stringify(obj));
    console.log(JSON.stringify(obj));

    httpRequest.onreadystatechange = function ()<!--收到数据时-->
    {
        var json=httpRequest.responseText;
        if (json.code != 200)
        {
           alert("ErrorPage");
        }
       
        var data = json.data
        if(data.userType == 'Student')
        {
            location.href="./student/index.html"
        }
        if(data.userType == 'Admin')
        {
            location.href="./index.html"
        }
        token = json.token;
    };
}