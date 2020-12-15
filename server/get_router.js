const express = require('express');
const app = express();

const querystring = require('querystring');
const util = require('util');

const mysql  = require('mysql'); 
const connection = mysql.createConnection({    
  host     : 'localhost',
  user     : 'root',
  password : '',
  port     : '3306',
  database : 'app_sdms',
});
connection.connect();
connection.query("USE APP_SDMS;");
console.log("connection = "+connection);

//解决跨域
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
	console.log(req.query);

	let [addSql,addSqlParams] = ['',[]];
	if (req.query.type == undefined) {
		addSql = 
			"SELECT * \
			 FROM student_info LEFT OUTER JOIN student_dormitory_info \
			 ON student_info.StuID = student_dormitory_info.StuID \
			 WHERE student_info.StuID = ?";
		addSqlParams = [req.query.queryText];
	}
	else {
		addSql = 
			"SELECT * \
			 FROM student_info LEFT OUTER JOIN student_dormitory_info \
			 ON student_info.StuID = student_dormitory_info.StuID \
			 WHERE student_info.StuID = ?";
		addSqlParams = [req.query.queryText];
	}

	console.log(addSql);
	console.log(addSqlParams);

	connection.query(addSql,addSqlParams,function (err, result) {
		if (err) {
			console.log('[QUERY ERROR] - ',err.message);
		return;
		}
		if (result.length) {
		let params = {
			code:1,
			message:"success",
			data:result
		};
		res.json(params);
		res.end();
		}
		else {
			let params = {
				code:0,
				message:"no data found"
			};
			res.json(params);
			res.end();
		};
	});
});

var server = app.listen(8080, function () {
	var host = server.address().address
	var port = server.address().port
	console.log("Get Server Lising At http://%s:%s", host, port)
})

// TODO: IMPLEMENT
// 获取列表

/*
app.get('/s', function (req, res) {
	let [addSql,addSqlParams] = ['',[]]
	if (req.query.type == undefined) {
		addSql = 'SELECT * FROM list WHERE StuID=?';
		addSqlParams = [req.query.userId]
	}
	else {
		addSql = 'SELECT * FROM list WHERE StuID=? and StuType=?';
		addSqlParams = [req.query.userId,req.query.type]
	}
	connection.query(addSql,addSqlParams,function (err, result) {
		if(err){
		console.log('[INSERT ERROR] - ',err.message);
		return;
		}
		if(result.length){
		let params = {
			code:1,
			message:"成功",
			data:result
		}    
		res.send(params)
		}else{
		let params = {
			code:0,
			message:"暂无数据"
		}    
		res.send(params)
		}    
	});
	console.log(req);
	console.log(res.query);
	let params = {
		"code": 1,
		"message": "成功",
	}
	res.send(params)
});

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port
	console.log("Get Server Lising At http://%s:%s", host, port)
})

/*
app.get('/list', function (req, res) {
  let [addSql,addSqlParams] = ['',[]]
  if(req.query.type == undefined){
    addSql = 'SELECT * FROM list WHERE userId=?';
    addSqlParams = [req.query.userId]
  }else{
    addSql = 'SELECT * FROM list WHERE userId=? and type=?';
    addSqlParams = [req.query.userId,req.query.type]
  }
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }
    if(result.length){
      let params = {
        code:1,
        message:"成功",
        data:result
      }    
      res.send(params)
    }else{
      let params = {
        code:0,
        message:"暂无数据"
      }    
      res.send(params)
    }    
  });
});
*/