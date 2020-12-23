const express = require('express');
const app = express();

const querystring = require('querystring');
const util = require('util');

var studentListHandler = require("./server/get_functions/student_list_handler.js");
var dormitoryListHandler = require("./server/get_functions/dormitory_list_handler.js");
var loginHandler = require("./server/post_functions/login_handler.js");
var affairsUtility = require("./server/get_functions/affairs_utility.js");

var getUtility = require("./server/get_functions/get_utility.js");

const mysql  = require('mysql'); 
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : '3306',
  database : 'app_sdms',
});
connection.connect();

app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	if (req.method == 'OPTIONS') {
		res.send(200);
	}
	else {
		next();
	}
});

app.get('/s/get_utility/get_student_name', function(req, res) {
	getUtility.getStuNameByStuID(req, res, connection);
})

app.get('/s/student_list', function (req, res) {
	console.log("QUERY of student list received.");
	console.log(" >  Handle by studentListHandler.js");
	studentListHandler.qStudentList(req, res, connection);
});

app.get('/s/dormitory_list', function (req, res) {
	console.log("QUERY of dormitory list received.");
	console.log(" >  Handle by dormitoryListHandler.js");
	dormitoryListHandler.qDormitoryList(req, res, connection);
});

app.get('/s/vacation_application', function (req, res) {
	console.log("INSERT of vacation application received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aVacationApplication(req, res, connection);
});

app.get('/s/leave_application', function (req, res) {
	console.log("INSERT of leave application received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aLeaveApplication(req, res, connection);
});

app.get('/s/change_dormitory', function (req, res) {
	console.log("INSERT of change dormitory received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aChangeDormitory(req, res, connection);
});

app.get('/s/visitor_record', function (req, res) {
	console.log("INSERT of visitor record received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aVisitorRecord(req, res, connection);
});
app.get('/s/add_student', function (req, res) {
	console.log("INSERT of visitor record received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aAddStudent(req, res, connection);
});
app.get('/s/add_student_dormitory', function (req, res) {
	console.log("INSERT of visitor record received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aAddDormitoryStudent(req, res, connection);
});
app.get('/s/add_dormitory', function (req, res) {
	console.log("INSERT of visitor record received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aAddDormitoryStudent(req, res, connection);
});
app.get('/s/add_facility', function (req, res) {
	console.log("INSERT of visitor record received.");
	console.log(" >  Handle by affairsUtility.js");
	affairsUtility.aAddDormitoryStudent(req, res, connection);
});
app.post('', function (req, res) {
    var params;
    req.on('data', function(data) {
        params = JSON.parse(data);
    })
    req.on('end', function() {
		if (params.hasOwnProperty("type")) {
			if (params.type == "login")
				loginHandler.qLogin(params, res, connection);
		}
		else {
			console.error("router: null type of POST\n" + params.toString());
			res.end();
		}
    })
});

var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Get Server Lising At http://localhost:%s", port);
})
