module.exports = {
	qStudentList: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"SELECT * \
				FROM student_info LEFT OUTER JOIN student_dormitory_info \
				ON student_info.StuID = student_dormitory_info.StuID \
				WHERE student_info.StuID LIKE '%"+ req.query.queryText +"%'";
	//		addSqlParams = [req.query.queryText];

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
	}
}