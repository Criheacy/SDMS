const express = require('express');
const app = express();

const querystring = require('querystring');
const util = require('util');

var studentListHandler = require("./server/get_functions/student_list_handler.js");
var dormitoryListHandler = require("./server/get_functions/dormitory_list_handler.js");

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

var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Get Server Lising At http://localhost:%s", port);
})
