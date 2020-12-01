var httpRequest = new XMLHttpRequest();
httpRequest.open('POST', 'https://localhost:8080/', true);
httpRequest.setRequestHeader("Content-type", "application/json");
const obj =
{
    "studentID" : document.getElementById("studentIDValue").value,
    "studentName" : document.getElementById("studentNameValue").value,
    "vacationType" : document.getElementById("vacationTypeValue").value,
    "vacationStartingDate" : document.getElementById("vacationStartingDateValue").value,
    "vacationEndingDate" : document.getElementById("vacationEndingDateValue").value,
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