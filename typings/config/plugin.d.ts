// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-sequelize';
import 'egg-mysql';
import 'egg-jwt';
import 'egg-oss';
import 'egg-validate';
import 'egg-cors';
import 'egg-validate-plus-next';
import 'egg-socket.io';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    sequelize?: EggPluginItem;
    mysql?: EggPluginItem;
    jwt?: EggPluginItem;
    oss?: EggPluginItem;
    validate?: EggPluginItem;
    cors?: EggPluginItem;
    validatePlusNext?: EggPluginItem;
    io?: EggPluginItem;
  }
}