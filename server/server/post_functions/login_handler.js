module.exports = {
	qLogin = function (params, res, connection) {
		var userName = params.data.userName.toString();
		var userPwd = params.data.userPwd.toString();

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"SELECT AccountID, UserType, Banned, Locked, UserAttribute \
				FROM Account_Info \
				WHERE UserName = " + userName+ " and UserPwd = " + userPwd;

		console.log(addSql);

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