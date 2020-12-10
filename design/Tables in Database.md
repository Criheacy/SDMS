### 一．数据表

0. 账号信息（account information）

| 属性名              | 类型           | 长度（字节） | 能否为NULL | 主键 |
| ------------------- | -------------- | ------------ | ---------- | ---- |
| AccountID           | Varchar        | 20           | NO         | ✔    |
| UserName            | Varchar        | 20           | NO         |      |
| UserType            | Varchar        | 10           | NO         |      |
| EditStuInfoPriv     | Enum('Y', 'N') |              | NO         |      |
| EditTeacInfoPriv    | Enum('Y', 'N') |              | NO         |      |
| EditAdminInfoPriv   | Enum('Y', 'N') |              | NO         |      |
| EditSelfInfoPriv    | Enum('Y', 'N') |              | NO         |      |
| Password            | Varchar        | 20           | NO         |      |
| PasswordLastChanged | DateTime       |              | YES        |      |
| Banned              | Enum('Y', 'N') |              | NO         |      |
| Locked              | Enum('Y', 'N') |              | NO         |      |
| LastTimeLogin       | DateTime       |              | YES        |      |
| UserAttribute       | Json           |              | YES        |      |

1. 学生信息（student information）

| 属性名    | 类型    | 长度（字节） | 能否为NULL | 主键 |
| --------- | ------- | ------------ | ---------- | ---- |
| StudentID | Varchar | 20           | NO         | ✔    |
| Name      | Varchar | 20           | NO         |      |
| Major     | Varchar | 20           | NO         |      |
| Class     | Varchar | 20           | NO         |      |
| Grade     | Varchar | 20           | NO         |      |

2. 学生宿舍信息（student dormitory information）

| 属性名      | 类型           | 长度（字节） | 能否为NULL | 主键 |
| ----------- | -------------- | ------------ | ---------- | ---- |
| StudentID   | Varchar        | 20           | NO         | ✔    |
| Bed         | Int            | 4            | NO         |      |
| DormitoryID | Varchar        | 8            | NO         |      |
| Isheader    | Enum('Y', 'N') | 2            | NO         |      |

3. 宿舍表（dormitory table）

| 属性名      | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ----------- | ------- | ------------ | ---------- | ---- |
| DormitoryID | Varchar | 8            | NO         | ✔    |
| BuildingID  | Varchar | 4            | NO         |      |
| Floor       | Varchar | 2            | NO         |      |
| DoorID      | int     | 4            | NO         |      |

4. 宿舍配套房间/设施（Dormitory supporting rooms / facilities）

| 属性名     | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ---------- | ------- | ------------ | ---------- | ---- |
| RoomID     | Varchar | 4            | NO         | ✔    |
| BuildingID | Varchar | 4            | NO         | ✔    |
| Attribute  | Varchar | 8            | NO         |      |
| Floor      | Varchar | 4            | NO         |      |

5. 学生离校/入校登记（Student departure / enrollment registration）

| 属性名    | 类型    | 长度（字节） | 能否为NULL | 主键 |
| --------- | ------- | ------------ | ---------- | ---- |
| StudentID | Varchar | 20           | NO         | ✔    |
| Type      | Varchar | 20           | NO         |      |
| Time      | Time    | 4            | NO         |      |
| Issue     | Varchar | 20           | NO         |      |
| Note      | varchar | 20           | YES        |      |

6. 学生临时请假登记表（Student temporary leave registration form）

| 属性名    | 类型    | 长度（字节） | 能否为NULL | 主键 |
| --------- | ------- | ------------ | ---------- | ---- |
| StudentID | Varchar | 20           | NO         | ✔    |
| Time      | Time    | 4            | NO         |      |
| During    | Date    | 4            | NO         |      |
| Issue     | Varchar | 20           | NO         |      |
| Note      | Varchar | 20           | YES        |      |

7. 学生更换宿舍登记表 （Registration form for students to change their dormitories）

| 属性名         | 类型    | 长度（节） | 能否为NULL | 主键 |
| -------------- | ------- | ---------- | ---------- | ---- |
| StudentID      | Varchar | 20         | NO         | ✔    |
| Time           | Time    | 4          | NO         |      |
| PreDormitoryID | Varchar | 20         | NO         |      |
| AftDormitoryID | Varchar | 20         | NO         |      |
| Note           | Varchar | 20         | YES        |      |

8. 外来到访人员登记表(Registration form of foreign visitors )

| 属性名          | 类型    | 长度（字节） | 能否为NULL | 主键 |
| --------------- | ------- | ------------ | ---------- | ---- |
| Name            | Varchar | 4            | NO         | ✔    |
| Purpose         | Varchar | 20           | NO         |      |
| Arrivetime      | Time    | 4            | NO         |      |
| Leavetime       | Time    | 4            | NO         |      |
| AdministratorID | Varchar | 20           | NO         |      |
| DormitoryID     | Varchar | 20           | NO         |      |
| Note            | Varchar | 20           | YES        |      |

9. 宿舍检查打分记录表（Dormitory inspection and scoring record）

| 属性名       | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ------------ | ------- | ------------ | ---------- | ---- |
| InspectionID | Varchar | 20           | NO         | ✔    |
| Score        | Varchar | 8            | NO         |      |
| Note         | Varchar | 20           | NO         |      |
| dormitoryID  | varchar | 20           | NO         |      |

10. 宿舍检查表（Dormitory checklist）

| 属性名          | 类型    | 长度（字节） | 能否为NULL | 主键 |
| --------------- | ------- | ------------ | ---------- | ---- |
| InspectionID    | Varchar | 20           | NO         | ✔    |
| Time            | Time    | 4            | NO         |      |
| Attribute       | Varchar | 8            | NO         |      |
| AdministratorID | Varchar | 20           | NO         |      |
| Note            | Varchar | 20           | YES        |      |

11. 宿舍奖惩记录表（Dormitory reward and punishment record form）

| 属性名      | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ----------- | ------- | ------------ | ---------- | ---- |
| DormitoryID | Varchar | 20           | NO         | ✔    |
| Time        | Time    | 4            | NO         |      |
| Attribute   | Varchar | 8            | NO         |      |
| Importance  | Varchar | 8            | NO         |      |
| Note        | varchar | 20           | YES        |      |

12. 宿舍报修记录表（Dormitory repair record）

| 属性名      | 类型    | 长度（字节） | 能否为NULL | 主键 |
| ----------- | ------- | ------------ | ---------- | ---- |
| DormitoryID | Varchar | 20           | NO         | ✔    |
| Time        | Time    | 4            | NO         |      |
| IsSolved    | Varchar | 8            | NO         |      |
| Response    | Varchar | 20           | NO         |      |
| Note        | Varchar | 20           | YES        |      |

 

### 二．数据库物理设计

1.索引：

|      | 表名                                                        | 主键               | 外键                      |
| ---- | ----------------------------------------------------------- | ------------------ | ------------------------- |
| 1    | Student information                                         | StudentID          | StudentID                 |
| 2    | Student dormitory information                               | StudentID          | StudentID、dormitoryID    |
| 3    | Dormitory table                                             | DormitoryID        | dormitoryID、buildingID   |
| 4    | Dormitory supporting rooms/facilities                       | RoomID、buildingID | BuildingID                |
| 5    | Student departure/enrollment  registration                  | StudentID          | StudentID                 |
| 6    | Student temporary leave registration form                   | StudentID          | StudentID                 |
| 7    | Registration form for  students to change their dormitories | StudentID          | StudentID                 |
| 8    | Registration form of  foreign visitors                      | Name               |                           |
| 9    | Account management table                                    | UserID             |                           |
| 10   | Dormitory inspection and  scoring record                    | InspectionID       | DormitoryID、inspectionID |
| 11   | Dormitory checklist                                         | DormitoryID        | InspectionID              |
| 12   | Dormitory reward and  punishment record                     | DormitoryID        | DormitoryID               |
| 13   | Dormitory repair record                                     | DormitoryID        | DormitoryID               |