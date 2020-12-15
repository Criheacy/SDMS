/* PARAMS tableColumns
type : json
{
	"htmlColumnNames" : [name1, name2, name3, name4 ...],
	"jsonObjectNames" : [name1, name2, name3, name4 ...], (correspond)
}
*/

console.log("json2table initializing...\n");

function json2table(srcJson, tableColumns)
{
	console.log("json2table called\n");

	var result = "";
	result += "<table class='table'>";

	result += "<tr>";
	tableColumns.htmlColumnNames.forEach(function (item, index) {
		result += "<th>" + item.toString() + "</th>";
	});
	result += "</tr>";

	srcJson.forEach(function(item, index) {
		result += "<tr>";
		tableColumns.htmlColumnNames.forEach(function (it, id) {
			result += "<td class='center'>"
			if (item.hasOwnProperty(tableColumns.jsonObjectNames[id]))
				result += item[tableColumns.jsonObjectNames[id]].toString();
			result += "</td>";
		});
		result += "</tr>";
	});

	result += "</table>";
	return result;
}
console.log("json2table initialize complete\n");