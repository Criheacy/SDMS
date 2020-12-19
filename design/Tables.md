### 一．数据表

0. 账号信息（ACCOUNT_INFO）





















| 属性名            | 类型     | 长度（字节） | 能否为NULL | 主键         |
| ----------------- | -------- | ------------ | ---------- | ------------ |
| AccountID         | Int      |              | NO         | ✔（AutoInc） |
| UserName          | Varchar  | 20           | NO         |              |
| UserType          | Varchar  | 10           | NO         |              |
| EditStuInfoPriv   | Char     | 1            | NO         |              |
| EditAdminInfoPriv | Char     | 1            | NO         |              |
| EditSelfInfoPriv  | Char     | 1            | NO         |              |
| UserPwd           | Varchar  | 30           | NO         |              |
| PwdLastChanged    | DateTime |              | YES        |              |
| Banned            | Char     | 1            | NO         |              |
| Locked            | Char     | 1            | NO         |              |
| LastTimeLogin     | DateTime |              | YES        |              |
| UserAttribute     | Json     |              | YES        |              |

1. 学生信息（STUDENT_INFO）

| 属性名   | 类型    | 长度（字节） | 能否为NULL | 主键 |
| -------- | ------- | ------------ | ---------- | ---- |
| StuID    | Varchar | 20           | NO         | ✔    |
| StuName  | Varchar | 20           | NO         |      |
| StuMajor | Varchar | 20           | NO         |      |
| StuClass | Varchar | 20           | NO         |      |
| StuGrade | Varchar | 20           | NO         |      |

2. 学生宿舍信息（STUDENT_DORMITORY_INFO）

| 属性名   | 类型    | 长度（字节） | 能否为NULL | 主键 |
| -------- | ------- | ------------ | ---------- | ---- |
| StuID    | Varchar | 20           | NO         | ✔    |
| DormID   | Varchar | 20           | NO         |      |
| BedID    | Int     |              | NO         |      |
| IsHeader | Char    | 1            | NO         |      |

3. 宿舍表（DORMITORY_INFO）

| 属性名     | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ---------- | ------- | ------------ | ---------- | ---- |
| DormID     | Varchar | 20           | NO         | ✔    |
| BuildingID | Varchar | 20           | NO         |      |
| FloorID    | Int     |              | NO         |      |
| RoomID     | Varchar | 20           | NO         |      |

4. 宿舍配套房间/设施（FACILITY_INFO）

| 属性名     | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ---------- | ------- | ------------ | ---------- | ---- |
| FaciRoomID | Varchar | 20           | NO         | ✔    |
| BuildingID | Varchar | 20           | YES        |      |
| FaciType   | Varchar | 10           | NO         |      |
| FloorID    | Int     |              | YES        |      |
| Note       | Varchar | 100          | YES        |      |

5. 学生离校/入校登记（DEPARTURE_ENROLLMENT_REC）

| 属性名 | 类型     | 长度（字节） | 能否为NULL | 主键 |
| ------ | -------- | ------------ | ---------- | ---- |
| RecID  | INT      |              | NO         | ✔（AutoInc） |
| StuID  | Varchar  | 20           | NO         |     |
| InOutType | Varchar  | 10         | NO         |      |
| RecTime | DateTime |              | NO         |      |
| Issue  | Varchar  | 100        | NO         |      |
| Note   | varchar  | 100          | YES        |      |

6. 学生临时请假登记表（LEAVE_REC）

| 属性名  | 类型     | 长度（字节） | 能否为NULL | 主键         |
| ------- | -------- | ------------ | ---------- | ------------ |
| RecID   | Int      |              | NO         | ✔（AutoInc） |
| StuID   | Varchar  | 20           | NO         |              |
| RecTime | DateTime |              | NO         |              |
| During  | Time     |              | NO         |              |
| Issue   | Varchar  | 100          | NO         |              |
| Note    | Varchar  | 100          | YES        |              |

7. 学生更换宿舍登记表 （CHANGE_DORMITORY_REC）

| 属性名    | 类型     | 长度（节） | 能否为NULL | 主键         |
| --------- | -------- | ---------- | ---------- | ------------ |
| RecID     | Int      |            | NO         | ✔（AutoInc） |
| StuID     | Varchar  | 20         | NO         |              |
| RecTime   | DateTime |            | NO         |              |
| PreDormID | Varchar  | 20         | NO         |              |
| AftDormID | Varchar  | 20         | NO         |              |
| Note      | Varchar  | 20         | YES        |              |

8. 外来到访人员登记表(VISTOR_REC)

| 属性名      | 类型     | 长度（字节） | 能否为NULL | 主键         |
| ----------- | -------- | ------------ | ---------- | ------------ |
| RecID       | Int      |              | NO         | ✔（AutoInc） |
| VisitorName | Varchar  | 20           | NO         |              |
| Purpose     | Varchar  | 100          | NO         |              |
| Arrivetime  | DateTime |              | NO         |              |
| Leavetime   | DateTime |              | NO         |              |
| AdminID     | Varchar  | 20           | NO         |              |
| VisStuID    | Varchar  | 20           | YES        |              |
| VisDormID   | Varchar  | 20           | YES        |              |
| Note        | Varchar  | 100          | YES        |

9. 宿舍检查表（INSPECTION_REC）

| 属性名   | 类型     | 长度（字节） | 能否为NULL | 主键         |
| -------- | -------- | ------------ | ---------- | ------------ |
| InspID   | Int      |              | NO         | ✔（AutoInc） |
| AdminID  | Varchar  | 20           | NO         |              |
| InspTime | DateTime |              | NO         |              |
| InspType | Varchar  | 10           | NO         |              |
| Note     | Varchar  | 20           | YES        |              |

10. 宿舍检查打分记录表（INSPECTION_SCORE_REC）

| 属性名 | 类型    | 长度（字节） | 能否为NULL | 主键         |
| ------ | ------- | ------------ | ---------- | ------------ |
| RecID  | Int     |              | NO         | ✔（AutoInc） |
| InspID | Varchar | 20           | NO         |              |
| Score  | Varchar | 8            | NO         |              |
| Note   | Varchar | 20           | NO         |              |
| DormID | varchar | 20           | NO         |              |


11. 宿舍奖惩记录表（REWARD_PUNISHMENT_REC）

| 属性名     | 类型     | 长度（字节） | 能否为NULL | 主键         |
| ---------- | -------- | ------------ | ---------- | ------------ |
| RecID      | Int      |              | NO         | ✔（AutoInc） |
| DormID     | Varchar  | 20           | NO         |              |
| RecTime    | DateTime |              | NO         |              |
| RecType    | Varchar  | 10           | NO         |              |
| Issue      | Varchar  | 100          | NO         |              |
| Importance | Int      |              | NO         |              |
| Note       | Varchar  | 100          | YES        |              |

12. 宿舍报修记录表（REWARD_PUNISHMENT_REC）

| 属性名      | 类型     | 长度（字节） | 能否为NULL | 主键         |
| ----------- | -------- | ------------ | ---------- | ------------ |
| RecID       | Int      |              | NO         | ✔（AutoInc） |
| DormID      | Varchar  | 20           | NO         |              |
| SubmitTime  | DateTime |              | NO         |              |
| SubmitIssue | Varchar  | 100          | NO         |              |
| RespTime    | DateTime |              | YES        |              |
| RespIssue   | Varchar  | 100          | YES        |              |
| IsSolved    | Char     | 1            | NO         |              |
| Note        | Varchar  | 20           | YES        |              |

 

### 二．数据库物理设计 [Obsolete]

> Obsolete

1.索引：

|      | 表名                                                       | 主键               | 外键                      |
| ---- | ---------------------------------------------------------- | ------------------ | ------------------------- |
| 1    | Student information                                        | StudentID          | StudentID                 |
| 2    | Student dormitory information                              | StudentID          | StudentID、dormitoryID    |
| 3    | Dormitory table                                            | DormitoryID        | dormitoryID、buildingID   |
| 4    | Dormitory supporting rooms/facilities                      | RoomID、buildingID | BuildingID                |
| 5    | Student departure/enrollment  registration                 | StudentID          | StudentID                 |
| 6    | Student temporary leave registration form                  | StudentID          | StudentID                 |
| 7    | Registration form for students to change their dormitories | StudentID          | StudentID                 |
| 8    | Registration form of  foreign visitors                     | Name               |                           |
| 9    | Account management table                                   | UserID             |                           |
| 10   | Dormitory inspection and  scoring record                   | InspectionID       | DormitoryID、inspectionID |
| 11   | Dormitory checklist                                        | DormitoryID        | InspectionID              |
| 12   | Dormitory reward and  punishment record                    | DormitoryID        | DormitoryID               |
| 13   | Dormitory repair record                                    | DormitoryID        | DormitoryID先             |