// 模块的缓存

'use strict';

function $require(id) {
  const fs = require('fs');
  const path = require('path');

  const filename = path.join(__dirname, id); // pathto/module1.js
  $require.cache = $require.cache || {};
  if ($require.cache[filename]) {
    // 
    return $require.cache[filename].exports;
  }

  // 没有缓存 第一次
  const dirname = path.dirname(filename);  // pathto
  
  let code = fs.readFileSync(filename, 'utf8');
  
  // 定义一个数据容器，用容器去装模块导出的成员
  let module = { id: filename, exports: {} };
  let exports = module.exports; // module.exports
  
  code = `
  (function($require, module, exports, __dirname, __filename) {
    ${code}
  })($require, module, exports, dirname, filename);`;
  eval(code);

  // 缓存起来
  $require.cache[filename] = module;

  return module.exports;
}

// setInterval(() => {
//   var date = $require('./module/date.js');
//   console.log(date.getTime());
// }, 1000);


// var last;

// setInterval(() => {
//   var date = require('./module/date.js');
//   console.log(last === date);
  
//   last = date;
//   console.log(date.getTime());
// }, 1000);

// 如何实现


// 如何删除缓存

setInterval(() => {
  
  // 
  // Object.keys(require.cache).forEach((key)=>{
  //   delete require.cache[key];
  // });
  
  var date = $require('./module/date.js');
  console.log(date.getTime());
}, 1000);


// console.log(require.cache);