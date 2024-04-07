/**
 * @Author: kun
 */

import { DBM } from '@/common/dbm';
import getLogger from './log4js';

const logger = getLogger('db.ts');


const orm = new DBM({
  connectionLimit: 100,
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PWD || 'h981109..',
  database: 'cloud_auto',
  isDebug: false,
});

orm.setLogger(logger as any);

export default orm;
