CREATE TABLE ACCOUNT_INFO (
	AccountID INT NOT NULL AUTO_INCREMENT,
	UserName VARCHAR(20) NOT NULL,
	UserType VARCHAR(20) NOT NULL,
	EditStuInfoPriv CHAR NOT NULL,
	EditAdminInfoPriv CHAR NOT NULL,
	EditSelfInfoPriv CHAR NOT NULL,
	UserPwd VARCHAR(30) NOT NULL,
	PwdLastChange DATETIME,
	Banned CHAR NOT NULL,
	Locked CHAR NOT NULL,
	LastTimeLogin DATETIME,
	UserAttribute JSON,
	PRIMARY KEY (AccountID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE STUDENT_INFO (
	StuID VARCHAR(20) NOT NULL,
	StuName VARCHAR(20) NOT NULL,
	StuMajor VARCHAR(20) NOT NULL,
	StuClass VARCHAR(20) NOT NULL,
	StuGrade VARCHAR(20) NOT NULL,
	PRIMARY KEY (StuID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE STUDENT_DORMITORY_INFO (
	StuID VARCHAR(20) NOT NULL,
	DormID VARCHAR(20) NOT NULL,
	BedID INT NOT NULL,
	IsHeader CHAR NOT NULL,
	PRIMARY KEY (StuID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE DORMITORY_INFO (
	DormID VARCHAR(20) NOT NULL,
	BuildingID VARCHAR(20) NOT NULL,
	FloorID INT NOT NULL,
	RoomID VARCHAR(20) NOT NULL,
	PRIMARY KEY (DormID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE FACILITY_INFO (
	FaciRoomID VARCHAR(20) NOT NULL,
	BuildingID VARCHAR(20) NOT NULL,
	FaciType VARCHAR(10) NOT NULL,
	FloorID INT NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (FaciRoomID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE DEPARTURE_ENROLLMENT_REC (
	RecID INT NOT NULL AUTO_INCREMENT,
	InOutType VARCHAR(10) NOT NULL,
	RecTime DATETIME NOT NULL,
	Issue VARCHAR(100) NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE LEAVE_REG (
	RecID INT NOT NULL AUTO_INCREMENT,
	RecTime DATETIME NOT NULL,
	During TIME NOT NULL,
	Issue VARCHAR(100) NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE CHANGE_DORMITORY_REG (
	RecID INT NOT NULL AUTO_INCREMENT,
	StuID VARCHAR(20) NOT NULL,
	RecTime DATETIME NOT NULL,
	PreDormID VARCHAR(20) NOT NULL,
	AftDormID VARCHAR(20) NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE VISITOR_REG (
	RecID INT NOT NULL AUTO_INCREMENT,
	VisitorName VARCHAR(20) NOT NULL,
	Purpose VARCHAR(100) NOT NULL,
	ArriveTime DATETIME NOT NULL,
	LeaveTime DATETIME NOT NULL,
	AdmimID VARCHAR(20) NOT NULL,
	VisStuID VARCHAR(20),
	VisDormID VARCHAR(20),
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE INSPECTION_REG (
	InspID INT NOT NULL AUTO_INCREMENT,
	AdminID VARCHAR(20) NOT NULL,
	InspTime DATETIME NOT NULL,
	InspType VARCHAR(10) NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (InspID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE INSPECTION_SCORE_REG (
	RecID INT NOT NULL AUTO_INCREMENT,
	InspID INT NOT NULL,
	DormID VARCHAR(20) NOT NULL,
	Score INT NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE REWARD_PUNISHMENT_REC (
	RecID INT NOT NULL AUTO_INCREMENT,
	DormID VARCHAR(20) NOT NULL,
	RecTime DATETIME NOT NULL,
	RecType VARCHAR(10) NOT NULL,
	Issue VARCHAR(100) NOT NULL,
	Importance INT NOT NULL,
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE REPAIRMENT_REC (
	RecID INT NOT NULL AUTO_INCREMENT,
	DormID VARCHAR(20) NOT NULL,
	SubmitTime DATETIME NOT NULL,
	SubmitIssue VARCHAR(100) NOT NULL,
	RespTime DATETIME,
	RespIssue VARCAHR(100),
	IsSolved CHAR,
	Note VARCHAR(100),
	PRIMARY KEY (RecID)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;