/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : egg-vue-element-admin-back

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 23/05/2022 20:54:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '主键id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '班级名称',
  `colleges_id` char(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学院外键',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `class_colleges_id_fk`(`colleges_id`) USING BTREE,
  CONSTRAINT `class_colleges_id_fk` FOREIGN KEY (`colleges_id`) REFERENCES `colleges` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '班级表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for colleges
-- ----------------------------
DROP TABLE IF EXISTS `colleges`;
CREATE TABLE `colleges`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '主键id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学院名称',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `colleges_name_uindex`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `number` int(0) NULL DEFAULT NULL COMMENT '课程编号',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '课程名称',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `course_id_uindex`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '课程表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES (1, 456858, '计算机');
INSERT INTO `course` VALUES (2, 521350, '英语');

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `parent_id` int(0) NULL DEFAULT NULL,
  `levels` int(0) NULL DEFAULT NULL,
  `for_service` int(0) NULL DEFAULT NULL,
  `deleted` int(0) NULL DEFAULT NULL,
  `sorts` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `dept_id_uindex`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dept
-- ----------------------------
INSERT INTO `dept` VALUES (2, '天津大学', 0, 0, NULL, 0, 1);
INSERT INTO `dept` VALUES (4, '计算机系', 2, 1, NULL, 0, 12);
INSERT INTO `dept` VALUES (6, '计算机科学与技术19级', 4, 2, NULL, 0, 11);
INSERT INTO `dept` VALUES (8, '计算机科学与技术18级', 4, 2, NULL, 0, 13);
INSERT INTO `dept` VALUES (10, '计算机科学与技术17级', 4, 2, NULL, 0, 15);
INSERT INTO `dept` VALUES (11, 'IT与流程', 5, 2, NULL, 0, 21);
INSERT INTO `dept` VALUES (12, '快递系统研发部', 11, 2, NULL, 0, 12);
INSERT INTO `dept` VALUES (13, '渠道系统研发部', 11, 2, NULL, 0, 13);
INSERT INTO `dept` VALUES (14, '整车业务研发部', 11, 2, NULL, 0, 13);
INSERT INTO `dept` VALUES (15, '物流系统研发部', 11, 2, NULL, 0, 14);
INSERT INTO `dept` VALUES (16, '机械工程系', 2, 1, NULL, 0, 2);
INSERT INTO `dept` VALUES (17, '研发部', 16, NULL, NULL, 0, 21);
INSERT INTO `dept` VALUES (25, '程序员鼓励师', 16, NULL, NULL, 0, NULL);
INSERT INTO `dept` VALUES (28, '财务部', 16, NULL, NULL, 0, NULL);
INSERT INTO `dept` VALUES (29, '人事部', 16, NULL, NULL, 0, NULL);

-- ----------------------------
-- Table structure for dict
-- ----------------------------
DROP TABLE IF EXISTS `dict`;
CREATE TABLE `dict`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `data_type` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `data_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `data_value` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `sorts` int unsigned NULL,
  `description` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `dict_id_uindex`(`id`) USING BTREE,
  UNIQUE INDEX `dict_data_key_uindex`(`data_key`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '数据字典' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of dict
-- ----------------------------
INSERT INTO `dict` VALUES (2, 'data_scope', '1', '全部数据权限', 1, '');
INSERT INTO `dict` VALUES (3, 'data_scope', '2', '自定义数据权限', 2, '');
INSERT INTO `dict` VALUES (4, 'data_scope', '3', '本部门及以下数据权限', 3, '');
INSERT INTO `dict` VALUES (5, 'data_scope', '4', '本部门数据权限', 4, '');
INSERT INTO `dict` VALUES (6, 'data_scope', '5', '仅本人数据权限', 5, '哈哈');

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `parent_id` int(0) NULL DEFAULT NULL,
  `types` int(0) NULL DEFAULT NULL COMMENT '类型',
  `i_frame` int(0) NULL DEFAULT NULL COMMENT '外链',
  `url` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '路由地址',
  `levels` int(0) NULL DEFAULT NULL,
  `state` int(0) NULL DEFAULT NULL,
  `sorts` int(0) NULL DEFAULT NULL,
  `description` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `component_name` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `component_path` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `icon` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `cache` int(0) NULL DEFAULT NULL,
  `hidden` int(0) NULL DEFAULT NULL,
  `permission_flag` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `t_sys_permission_id_uindex`(`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 79 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES (8, '系统权限', 0, 0, 0, '/permission', NULL, NULL, 100, NULL, '', '', 'lock', 0, 0, NULL);
INSERT INTO `permission` VALUES (9, '用户管理', 8, 1, 0, '/permission/user', NULL, NULL, 1, NULL, 'User', '/permission/user', '', 0, 0, '');
INSERT INTO `permission` VALUES (10, '角色管理', 8, 1, 0, '/permission/role', NULL, NULL, 2, NULL, 'Role', '/permission/role', NULL, 0, 0, '');
INSERT INTO `permission` VALUES (11, '权限管理', 8, 1, 0, '/permission/permission', NULL, NULL, 3, NULL, 'Permission', '/permission/permission', NULL, 0, 0, '');
INSERT INTO `permission` VALUES (13, '部门管理', 8, 1, 0, '/permission/dept', NULL, NULL, 4, NULL, 'Department', '/permission/department', NULL, 0, 0, '');
INSERT INTO `permission` VALUES (14, '图标', 0, 1, 0, '/icon', NULL, NULL, 201, NULL, 'Icons', '/icons/index', 'icon', 0, 0, NULL);
INSERT INTO `permission` VALUES (17, '新增用户', 9, 2, NULL, '/rest/user/add', NULL, NULL, 201, NULL, NULL, NULL, NULL, NULL, NULL, 'user:add');
INSERT INTO `permission` VALUES (18, '编辑用户', 9, 2, NULL, '/rest/user/update', NULL, NULL, 202, NULL, NULL, NULL, NULL, NULL, NULL, 'user:edit');
INSERT INTO `permission` VALUES (19, '删除用户', 9, 2, NULL, '/rest/user/delete', NULL, NULL, 203, NULL, NULL, NULL, NULL, NULL, NULL, 'user:del');
INSERT INTO `permission` VALUES (21, '新增角色', 10, 2, NULL, '/rest/role/add', NULL, NULL, 211, NULL, NULL, NULL, NULL, NULL, NULL, 'role:add');
INSERT INTO `permission` VALUES (22, '编辑角色', 10, 2, NULL, '/rest/role/update', NULL, NULL, 212, NULL, NULL, NULL, NULL, NULL, NULL, 'role:edit');
INSERT INTO `permission` VALUES (23, '删除角色', 10, 2, NULL, '/rest/role/delete', NULL, NULL, 213, NULL, NULL, NULL, NULL, NULL, NULL, 'role:del');
INSERT INTO `permission` VALUES (25, '新增权限', 11, 2, NULL, '/rest/permission/add', NULL, NULL, 221, NULL, NULL, NULL, NULL, NULL, NULL, 'permission:add');
INSERT INTO `permission` VALUES (26, '编辑权限', 11, 2, NULL, '/rest/permission/update', NULL, NULL, 222, NULL, NULL, NULL, NULL, NULL, NULL, 'permission:edit');
INSERT INTO `permission` VALUES (27, '删除权限', 11, 2, NULL, '/rest/permission/delete', NULL, NULL, 223, NULL, NULL, NULL, NULL, NULL, NULL, 'permission:del');
INSERT INTO `permission` VALUES (29, '新增部门', 13, 2, NULL, '/rest/department/add', NULL, NULL, 241, NULL, NULL, NULL, NULL, NULL, NULL, 'dept:add');
INSERT INTO `permission` VALUES (30, '编辑部门', 13, 2, NULL, '/rest/department/update', NULL, NULL, 242, NULL, NULL, NULL, NULL, NULL, NULL, 'dept:edit');
INSERT INTO `permission` VALUES (31, '删除部门', 13, 2, NULL, '/rest/department/delete', NULL, NULL, 243, NULL, NULL, NULL, NULL, NULL, NULL, 'dept:del');
INSERT INTO `permission` VALUES (32, '系统监控', 0, 0, 0, '/monitor', NULL, NULL, 101, NULL, '', '', 'monitor', 0, 0, NULL);
INSERT INTO `permission` VALUES (33, '错误日志', 32, 1, 0, '/monitor/error-log', NULL, NULL, 40, NULL, 'ErrorLog', '/monitor/error-log', NULL, 0, 0, NULL);
INSERT INTO `permission` VALUES (34, '业务日志', 32, 1, 0, '/monitor/blog', NULL, NULL, 41, NULL, 'Blog', '/monitor/blog', NULL, 0, 0, '');
INSERT INTO `permission` VALUES (41, '数据字典', 8, 1, 0, '/permission/dict', NULL, NULL, 6, NULL, 'Dict', '/permission/dict', NULL, 0, 0, '');
INSERT INTO `permission` VALUES (43, '数据权限', 10, 2, NULL, '/rest/role/saveDataScope', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'role:datascope');
INSERT INTO `permission` VALUES (44, '新增字典', 41, 2, NULL, '/rest/dict/add', NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, 'dict:add');
INSERT INTO `permission` VALUES (45, '编辑字典', 41, 2, NULL, '/rest/dict/update', NULL, NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, 'dict:edit');
INSERT INTO `permission` VALUES (46, '删除字典', 41, 2, NULL, '/rest/dict/delete', NULL, NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, 'dict:del');
INSERT INTO `permission` VALUES (49, '岗位管理', 8, 1, 0, '/permission/job', NULL, NULL, 5, NULL, 'Job', '/permission/job', '', 0, 0, '');
INSERT INTO `permission` VALUES (50, '添加岗位', 49, 2, 0, '/rest/job/add', NULL, NULL, 1, NULL, '', '', '', 0, 0, 'job:add');
INSERT INTO `permission` VALUES (51, '编辑岗位', 49, 2, 0, '/rest/job/update', NULL, NULL, 2, NULL, '', '', '', 0, 0, 'job:edit');
INSERT INTO `permission` VALUES (52, '删除岗位', 49, 2, 0, '/rest/job/delete', NULL, NULL, 3, NULL, '', '', '', 0, 0, 'job:del');
INSERT INTO `permission` VALUES (54, '组件', 0, 0, 0, '/component', NULL, NULL, 103, NULL, '', '', 'component', 0, 0, NULL);
INSERT INTO `permission` VALUES (55, 'pdf', 54, 1, 0, '/component/pdf', NULL, NULL, 6, NULL, 'Pdf', '/component/pdf', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (57, 'zip', 54, 1, 0, '/component/zip', NULL, NULL, 8, NULL, 'Zip', '/component/zip', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (59, 'upload', 54, 1, 0, '/component/upload', NULL, NULL, 4, NULL, 'Upload', '/component/upload', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (62, 'Markdown', 54, 1, 0, '/component/markdown', NULL, NULL, 2, NULL, 'MarkdownDemo', '/component/markdown', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (63, 'JSON 编辑器', 54, 1, 0, '/component/json-editor', NULL, NULL, 3, NULL, 'JsonEditorDemo', '/component/json-editor', '', 1, 0, NULL);
INSERT INTO `permission` VALUES (64, '键盘图表132', 54, 1, 0, '/component/keyboard', NULL, NULL, 11, NULL, 'KeyboardChart', '/component/keyboard', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (65, '折线图', 54, 1, 0, '/component/line', NULL, NULL, 12, NULL, 'LineChart', '/component/line', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (66, '混合图表', 54, 1, 0, '/component/mix-chart', NULL, NULL, 13, NULL, 'MixChart', '/component/mix-chart', '', 0, 0, NULL);
INSERT INTO `permission` VALUES (70, '城市控件', 54, 1, 0, '/component/citycontrol', NULL, NULL, 1, NULL, 'CityControlDemo', '/component/citycontrol', '', 0, 0, '');
INSERT INTO `permission` VALUES (71, '查询用户', 9, 2, 0, '', NULL, NULL, 200, NULL, '', '', '', 0, 0, 'user:list');
INSERT INTO `permission` VALUES (72, '查询角色', 10, 2, 0, '', NULL, NULL, 0, NULL, '', '', '', 0, 0, 'role:list');
INSERT INTO `permission` VALUES (73, '查询权限', 11, 2, 0, '', NULL, NULL, 0, NULL, '', '', '', 0, 0, 'permission:list');
INSERT INTO `permission` VALUES (74, '查询部门', 13, 2, 0, '', NULL, NULL, 0, NULL, '', '', '', 0, 0, 'dept:list');
INSERT INTO `permission` VALUES (75, '查询岗位', 49, 2, 0, '', NULL, NULL, 0, NULL, '', '', '', 0, 0, 'job:list');
INSERT INTO `permission` VALUES (76, '查询数据字典', 41, 2, 0, '', NULL, NULL, 0, NULL, '', '', '', 0, 0, 'dict:list');
INSERT INTO `permission` VALUES (78, '12321', 14, 1, 0, '123', NULL, NULL, NULL, NULL, '123', '123', '404', 0, 0, '');

-- ----------------------------
-- Table structure for role_dept
-- ----------------------------
DROP TABLE IF EXISTS `role_dept`;
CREATE TABLE `role_dept`  (
  `role_id` int(0) NULL DEFAULT NULL,
  `dept_id` int(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_dept
-- ----------------------------
INSERT INTO `role_dept` VALUES (1, 2);
INSERT INTO `role_dept` VALUES (1, 4);
INSERT INTO `role_dept` VALUES (1, 6);
INSERT INTO `role_dept` VALUES (1, 8);
INSERT INTO `role_dept` VALUES (1, 10);
INSERT INTO `role_dept` VALUES (1, 16);
INSERT INTO `role_dept` VALUES (1, 17);
INSERT INTO `role_dept` VALUES (1, 25);
INSERT INTO `role_dept` VALUES (1, 28);
INSERT INTO `role_dept` VALUES (1, 29);
INSERT INTO `role_dept` VALUES (2, 2);
INSERT INTO `role_dept` VALUES (2, 4);
INSERT INTO `role_dept` VALUES (2, 6);
INSERT INTO `role_dept` VALUES (2, 8);
INSERT INTO `role_dept` VALUES (2, 10);
INSERT INTO `role_dept` VALUES (2, 16);
INSERT INTO `role_dept` VALUES (2, 17);
INSERT INTO `role_dept` VALUES (2, 25);
INSERT INTO `role_dept` VALUES (2, 28);
INSERT INTO `role_dept` VALUES (2, 29);

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission`  (
  `role_id` int(0) NULL DEFAULT NULL,
  `perm_id` int(0) NULL DEFAULT NULL,
  INDEX `role_permission_roles_id_fk`(`role_id`) USING BTREE,
  INDEX `role_permission_permission_id_fk`(`perm_id`) USING BTREE,
  CONSTRAINT `role_permission_permission_id_fk` FOREIGN KEY (`perm_id`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_permission_roles_id_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES (1, 8);
INSERT INTO `role_permission` VALUES (1, 9);
INSERT INTO `role_permission` VALUES (1, 10);
INSERT INTO `role_permission` VALUES (1, 11);
INSERT INTO `role_permission` VALUES (1, 13);
INSERT INTO `role_permission` VALUES (1, 14);
INSERT INTO `role_permission` VALUES (1, 17);
INSERT INTO `role_permission` VALUES (1, 18);
INSERT INTO `role_permission` VALUES (1, 19);
INSERT INTO `role_permission` VALUES (1, 21);
INSERT INTO `role_permission` VALUES (1, 22);
INSERT INTO `role_permission` VALUES (1, 23);
INSERT INTO `role_permission` VALUES (1, 25);
INSERT INTO `role_permission` VALUES (1, 26);
INSERT INTO `role_permission` VALUES (1, 27);
INSERT INTO `role_permission` VALUES (1, 29);
INSERT INTO `role_permission` VALUES (1, 30);
INSERT INTO `role_permission` VALUES (1, 31);
INSERT INTO `role_permission` VALUES (1, 32);
INSERT INTO `role_permission` VALUES (1, 33);
INSERT INTO `role_permission` VALUES (1, 34);
INSERT INTO `role_permission` VALUES (1, 41);
INSERT INTO `role_permission` VALUES (1, 43);
INSERT INTO `role_permission` VALUES (1, 44);
INSERT INTO `role_permission` VALUES (1, 45);
INSERT INTO `role_permission` VALUES (1, 46);
INSERT INTO `role_permission` VALUES (1, 49);
INSERT INTO `role_permission` VALUES (1, 50);
INSERT INTO `role_permission` VALUES (1, 51);
INSERT INTO `role_permission` VALUES (1, 52);
INSERT INTO `role_permission` VALUES (1, 54);
INSERT INTO `role_permission` VALUES (1, 55);
INSERT INTO `role_permission` VALUES (1, 57);
INSERT INTO `role_permission` VALUES (1, 59);
INSERT INTO `role_permission` VALUES (1, 62);
INSERT INTO `role_permission` VALUES (1, 63);
INSERT INTO `role_permission` VALUES (1, 64);
INSERT INTO `role_permission` VALUES (1, 65);
INSERT INTO `role_permission` VALUES (1, 66);
INSERT INTO `role_permission` VALUES (1, 70);
INSERT INTO `role_permission` VALUES (1, 71);
INSERT INTO `role_permission` VALUES (1, 72);
INSERT INTO `role_permission` VALUES (1, 73);
INSERT INTO `role_permission` VALUES (1, 74);
INSERT INTO `role_permission` VALUES (1, 75);
INSERT INTO `role_permission` VALUES (1, 76);
INSERT INTO `role_permission` VALUES (1, 78);

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `data_scope` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `roles_id_uindex`(`id`) USING BTREE,
  UNIQUE INDEX `roles_name_uindex`(`name`) USING BTREE,
  INDEX `roles_dict_data_key_fk`(`data_scope`) USING BTREE,
  CONSTRAINT `roles_dict_data_key_fk` FOREIGN KEY (`data_scope`) REFERENCES `dict` (`data_key`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'admin', '管理员', '1');
INSERT INTO `roles` VALUES (2, 'teacher', '教师', '3');
INSERT INTO `roles` VALUES (11, 'student', '学生', '5');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20210119031333-init-users.js');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `sex` tinyint(1) NULL DEFAULT NULL COMMENT '性别',
  `number` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '学号',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  `dept_id` int(0) NULL DEFAULT NULL,
  `role_id` int(0) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `student_id_uindex`(`id`) USING BTREE,
  INDEX `student_dept_id_fk`(`dept_id`) USING BTREE,
  INDEX `student_roles_id_fk`(`role_id`) USING BTREE,
  CONSTRAINT `student_dept_id_fk` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `student_roles_id_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '学生表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, '张三', 1, '654223', NULL, NULL, NULL, '123456', 'zhangsan12');

-- ----------------------------
-- Table structure for student_course
-- ----------------------------
DROP TABLE IF EXISTS `student_course`;
CREATE TABLE `student_course`  (
  `student_id` int(0) NULL DEFAULT NULL,
  `course_id` int(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `sex` tinyint(1) NULL DEFAULT NULL COMMENT '性别',
  `number` int(0) NULL DEFAULT NULL COMMENT '教师工号',
  `dept_id` int(0) NULL DEFAULT NULL,
  `role_id` int(0) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `teacher_id_uindex`(`id`) USING BTREE,
  UNIQUE INDEX `teacher_name_uindex`(`name`) USING BTREE,
  UNIQUE INDEX `teacher_工号_uindex`(`number`) USING BTREE,
  INDEX `teacher_roles_id_fk`(`role_id`) USING BTREE,
  INDEX `teacher_dept_id_fk`(`dept_id`) USING BTREE,
  CONSTRAINT `teacher_dept_id_fk` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `teacher_roles_id_fk` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '教师表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES (1, '张老师', 1, 658456, NULL, NULL, '', NULL);

-- ----------------------------
-- Table structure for teacher_course
-- ----------------------------
DROP TABLE IF EXISTS `teacher_course`;
CREATE TABLE `teacher_course`  (
  `teacher_id` int(0) NULL DEFAULT NULL,
  `course_id` int(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_course
-- ----------------------------
DROP TABLE IF EXISTS `user_course`;
CREATE TABLE `user_course`  (
  `user_id` int(0) NULL DEFAULT NULL,
  `course_id` int(0) NULL DEFAULT NULL,
  INDEX `user_course_course_id_fk`(`course_id`) USING BTREE,
  INDEX `user_course_users_id_fk`(`user_id`) USING BTREE,
  CONSTRAINT `user_course_course_id_fk` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `user_course_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_course
-- ----------------------------
INSERT INTO `user_course` VALUES (1, 1);
INSERT INTO `user_course` VALUES (1, 2);
INSERT INTO `user_course` VALUES (4, 1);

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `user_id` int(0) NULL DEFAULT NULL,
  `role_id` int(0) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户角色关联表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (1, 1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `deleted_at` datetime(0) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `update_by` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dept_id` int(0) NULL DEFAULT NULL,
  `role_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `users_id_uindex`(`id`) USING BTREE,
  INDEX `users_dept_id_fk`(`dept_id`) USING BTREE,
  CONSTRAINT `users_dept_id_fk` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', NULL, '2021-08-11 16:47:46', NULL, '123456', NULL, NULL, '管理员', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif', '15522913627', 2, 1);
INSERT INTO `users` VALUES (2, 'edit', NULL, '2021-07-13 16:54:20', NULL, '123456', NULL, NULL, '普通编辑', NULL, '15522913629', 4, 2);
INSERT INTO `users` VALUES (3, 'liuchengjin', '2021-07-29 15:21:12', '2021-09-06 16:59:07', NULL, '123456', 'admin', NULL, '刘程锦', 'http://wmy-love.oss-cn-beijing.aliyuncs.com/avatar.png', '15522913627', 16, 11);
INSERT INTO `users` VALUES (4, 'haha', '2021-08-05 12:10:00', '2021-09-06 16:59:23', NULL, '123456', 'admin', NULL, '哈哈', 'http://wmy-love.oss-cn-beijing.aliyuncs.com/avatar.png', '15522913627', 6, 2);

SET FOREIGN_KEY_CHECKS = 1;
