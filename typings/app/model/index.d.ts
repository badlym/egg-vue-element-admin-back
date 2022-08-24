// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClass = require('../../../app/model/class');
import ExportCollege = require('../../../app/model/college');
import ExportCourse = require('../../../app/model/course');
import ExportDept = require('../../../app/model/dept');
import ExportDict = require('../../../app/model/dict');
import ExportPermission = require('../../../app/model/permission');
import ExportRole = require('../../../app/model/role');
import ExportRoleDept = require('../../../app/model/role_dept');
import ExportRolePermission = require('../../../app/model/role_permission');
import ExportStudent = require('../../../app/model/student');
import ExportStudentCourse = require('../../../app/model/student_course');
import ExportTeacher = require('../../../app/model/teacher');
import ExportTeacherCourse = require('../../../app/model/teacher_course');
import ExportUser = require('../../../app/model/user');
import ExportUserCourse = require('../../../app/model/user_course');
import ExportUserRole = require('../../../app/model/user_role');

declare module 'egg' {
  interface IModel {
    Class: ReturnType<typeof ExportClass>;
    College: ReturnType<typeof ExportCollege>;
    Course: ReturnType<typeof ExportCourse>;
    Dept: ReturnType<typeof ExportDept>;
    Dict: ReturnType<typeof ExportDict>;
    Permission: ReturnType<typeof ExportPermission>;
    Role: ReturnType<typeof ExportRole>;
    RoleDept: ReturnType<typeof ExportRoleDept>;
    RolePermission: ReturnType<typeof ExportRolePermission>;
    Student: ReturnType<typeof ExportStudent>;
    StudentCourse: ReturnType<typeof ExportStudentCourse>;
    Teacher: ReturnType<typeof ExportTeacher>;
    TeacherCourse: ReturnType<typeof ExportTeacherCourse>;
    User: ReturnType<typeof ExportUser>;
    UserCourse: ReturnType<typeof ExportUserCourse>;
    UserRole: ReturnType<typeof ExportUserRole>;
  }
}
