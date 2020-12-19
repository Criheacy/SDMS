module.exports = {
	aVacationApplication: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO departure_enrollment_rec ( \
				StuID, InOutType, RecTime, Issue, Note\
			) VALUES ('"
			+ req.query.stuID + "', '"
			+ req.query.vacaType + "', '"
			+ req.query.vacaStartDate + "', '"
			+ req.query.note + "', '"
			+ req.query.note + "');";

	//		addSqlParams = [req.query.queryText];

		console.log(addSql);
		console.log(addSqlParams);

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

	aLeaveApplication: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO leave_rec ( \
				StuID, RecTime, EndTime, Issue, Note\
			) VALUES ('"
			+ req.query.stuID + "', '"
			+ req.query.leaveStartingDate + "', '"
			+ req.query.leaveEndingDate + "', '"
			+ req.query.issue + "', '"
			+ req.query.note + "');";

	//		addSqlParams = [req.query.queryText];

		console.log(addSql);
		console.log(addSqlParams);

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

	aChangeDormitory: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO change_dormitory_rec ( \
				StuID, RecTime, PreDormID, AftDormID, Note\
			) VALUES ('"
			+ req.query.stuID + "', '"
			+ req.query.recTime + "', '"
			+ req.query.preDormID + "', '"
			+ req.query.aftDormID + "', '"
			+ req.query.note + "');";

	//		addSqlParams = [req.query.queryText];

		console.log(addSql);
		console.log(addSqlParams);

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