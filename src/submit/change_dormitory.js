document.getElementById("vacation_application_submit").onclick = function() 
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://localhost:8080/', true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    const obj =
    {
        "StuID" : document.getElementById("studentIDValue").value,
        "RecTime" : document.getElementById("dateValue").value,
        "PreDormID" : document.getElementById("preDormTypeValue").value,
        "AftDormID" : document.getElementById("aftDormValue").value,
        "Note" : document.getElementById("noteValue").value,
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