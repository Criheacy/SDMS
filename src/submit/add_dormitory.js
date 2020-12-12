document.getElementById("add_dormitory_submit").onclick = function()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://localhost:8080/', true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    const obj =
    {
        "StuID" : document.getElementById("studentIDValue").value,
        "DormID" : document.getElementById("dormitoryIDValue").value,
        "BedID" : document.getElementById("bedIDValue").value,
        "IsHeader" : document.getElementById("isHeaderValue").value,
    };
    alert(obj);
    console.log(obj);

    httpRequest.send(JSON.stringify(obj));

    alert(JSON.stringify(obj));
    console.log(JSON.stringify(obj));

    httpRequest.onreadystatechange = function ()
    {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
        {
            var json = httpRequest.responseText;
            console.log(json);
        }
    };
}