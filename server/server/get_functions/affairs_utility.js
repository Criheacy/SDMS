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
	},
	aAddStudent: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO STUDENT_INFO ( \
				StuID, Stuname, StuMajor, StuClass, StuGrade\
			) VALUES ('"
			+ req.query.stuID + "', '"
			+ req.query.stuName+ "', '"
			+ req.query.stuMajor + "', '"
			+ req.query.stuClass + "', '"
			+ req.query.stuGrade + "');";

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
	aAddDormitory: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO DORMITORY_INFO ( \
				 DormID, BuildingID,FloorID,RoomID\
			) VALUES ('"
			+ req.query.dormID + "', '"
			+ req.query.buildingID+ "', '"
			+ req.query.floorID + "', '"
			+ req.query.roomID + "');";

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
	aAddStudentDormitory: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO STUDENT_DORMITORY_INFO ( \
				StuID, DormID, BedID, IsHeader\
			) VALUES ('"
			+ req.query.stuID + "', '"
			+ req.query.dormID+ "', '"
			+ req.query.bedID + "', '"
			+ req.query.isHeader + "');";

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
	aAddFacility: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO FACILITY_INFO ( \
				FaciRoomID, BuildingID, FaciType, FloorID,Note\
			) VALUES ('"
			+ req.query.faciRoomID + "', '"
			+ req.query.buildingID+ "', '"
			+ req.query.faciType + "', '"
			+ req.query.floorID + "','"
			+ req.query.note + "');"

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

	aVisitorRecord: function(req, res, connection) {
		console.log(req.query);

		let [addSql,addSqlParams] = ['',[]];
		addSql = 
			"INSERT INTO visitor_rec ( \
				VisitorName, Purpose, ArriveTime, LeaveTime, AdminID, VisStuID, VisDormID, Note\
			) VALUES ('"
			+ req.query.visitorName + "', '"
			+ req.query.purpose + "', '"
			+ req.query.arriveTime + "', '"
			+ req.query.leaveTime + "', '"
			+ req.query.adminID + "', '"
			+ req.query.visStuID + "', '"
			+ req.query.visDormID + "', '"
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