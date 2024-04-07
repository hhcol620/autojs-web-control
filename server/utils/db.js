"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbm_1 = require("@/common/dbm");
const log4js_1 = require("./log4js");
const logger = log4js_1.default('db.ts');
const orm = new dbm_1.DBM({
    connectionLimit: 100,
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PWD || 'h981109..',
    database: 'cloud_auto',
    isDebug: false,
});
orm.setLogger(logger);
exports.default = orm;
