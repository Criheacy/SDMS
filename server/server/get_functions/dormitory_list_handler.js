module.exports = {
	qDormitoryList: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"SELECT * \
				FROM dormitory_info \
				WHERE DormID LIKE '%" + req.query.queryText + "%'";
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