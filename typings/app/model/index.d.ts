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
import ExportHahaClass = require('../../../app/model/haha/class');
import ExportHahaColleges = require('../../../app/model/haha/colleges');
import ExportHahaCourse = require('../../../app/model/haha/course');
import ExportHahaDept = require('../../../app/model/haha/dept');
import ExportHahaDict = require('../../../app/model/haha/dict');
import ExportHahaPermission = require('../../../app/model/haha/permission');
import ExportHahaRoles = require('../../../app/model/haha/roles');
import ExportHahaRoleDept = require('../../../app/model/haha/role_dept');
import ExportHahaRolePermission = require('../../../app/model/haha/role_permission');
import ExportHahaSequelizemeta = require('../../../app/model/haha/sequelizemeta');
import ExportHahaStudent = require('../../../app/model/haha/student');
import ExportHahaStudents = require('../../../app/model/haha/students');
import ExportHahaStudentCourse = require('../../../app/model/haha/student_course');
import ExportHahaTeacher = require('../../../app/model/haha/teacher');
import ExportHahaTeacherCourse = require('../../../app/model/haha/teacher_course');
import ExportHahaUsers = require('../../../app/model/haha/users');
import ExportHahaUserCourse = require('../../../app/model/haha/user_course');
import ExportHahaUserRole = require('../../../app/model/haha/user_role');

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
    Haha: {
      Class: ReturnType<typeof ExportHahaClass>;
      Colleges: ReturnType<typeof ExportHahaColleges>;
      Course: ReturnType<typeof ExportHahaCourse>;
      Dept: ReturnType<typeof ExportHahaDept>;
      Dict: ReturnType<typeof ExportHahaDict>;
      Permission: ReturnType<typeof ExportHahaPermission>;
      Roles: ReturnType<typeof ExportHahaRoles>;
      RoleDept: ReturnType<typeof ExportHahaRoleDept>;
      RolePermission: ReturnType<typeof ExportHahaRolePermission>;
      Sequelizemeta: ReturnType<typeof ExportHahaSequelizemeta>;
      Student: ReturnType<typeof ExportHahaStudent>;
      Students: ReturnType<typeof ExportHahaStudents>;
      StudentCourse: ReturnType<typeof ExportHahaStudentCourse>;
      Teacher: ReturnType<typeof ExportHahaTeacher>;
      TeacherCourse: ReturnType<typeof ExportHahaTeacherCourse>;
      Users: ReturnType<typeof ExportHahaUsers>;
      UserCourse: ReturnType<typeof ExportHahaUserCourse>;
      UserRole: ReturnType<typeof ExportHahaUserRole>;
    }
  }
}
