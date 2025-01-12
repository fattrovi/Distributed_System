const sqlite = require('better-sqlite3');
const path = require('path');
//const db = new sqlite(path.resolve('relation.db'), {fileMustExist: true});
const db = new sqlite('../relation.db', {fileMustExist: true});
function query(sql, params) {
  return db.prepare(sql).all(params);
}

function run(sql, params) {
  return db.prepare(sql).run(params);
}

module.exports = {
  query,
  run
}
