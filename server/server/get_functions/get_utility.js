module.exports = {
	getStuNameByStuID : function(req, res, connection) {
		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"SELECT StuName \
			 FROM student_info \
			 WHERE StuID = '" + req.query.stuID + "'";
			 
		connection.query(addSql,addSqlParams,function (err, result) {
			if (err) {
				console.log('[QUERY ERROR] - ',err.message);
				return;
			}
			console.log(result);
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
	},

	getBuildIDByDormID : function(req, res, connection) {
		let [addSql,addSqlParams] = ['',[]];
		addSql =
			"SELECT BuildingID \
			 FROM dormitory_info \
			 WHERE DormID = '" + req.query.dormID + "'";

		connection.query(addSql,addSqlParams,function (err, result) {
			if (err) {
				console.log('[QUERY ERROR] - ',err.message);
				return;
			}
			console.log(result);
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
	},

	getRoomIDByDormID : function(req, res, connection) {
		let [addSql,addSqlParams] = ['',[]];
		addSql =
			"SELECT RoomID \
			 FROM dormitory_info \
			 WHERE DormID = '" + req.query.dormID + "'";

		connection.query(addSql,addSqlParams,function (err, result) {
			if (err) {
				console.log('[QUERY ERROR] - ',err.message);
				return;
			}
			console.log(result);
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
	}

}