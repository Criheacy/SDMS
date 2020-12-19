document.getElementById("add_facility_submit").onclick = function()
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'http://localhost:8080/', true);
    httpRequest.setRequestHeader("Content-type", "application/json");
    const obj =
    {
        "FaciRoomID" : document.getElementById("faciRoomIDValue").value,
        "BuildingID" : document.getElementById("buildingIDValue").value,
        "FaciType" : document.getElementById("faciTypeValue").value,
        "FloorID" : document.getElementById("floorIDValue").value,
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