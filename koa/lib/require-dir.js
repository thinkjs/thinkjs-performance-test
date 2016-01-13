/**
 * Created by Rekey on 15/12/18.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const dict = {
  '.js': true,
  '.json': true
};
module.exports = function (dirName, resolveDirName) {
  let requireDir = path.resolve(resolveDirName, dirName);
  let files = fs.readdirSync(requireDir);
  let imports = {};
  files.forEach(function (file) {
    let extname = path.extname(file);
    let importName = file.replace(extname, '');
    if (dict[extname]) {
      imports[importName] = require(path.resolve(requireDir, file));
    }
  });
  return imports;
};