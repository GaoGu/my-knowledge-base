// 递归目录树

// 先写一层的情况
// 抽象递归参数
// 找到突破点（避免死循环）
//   自己调自己，某种情况（肯定会存在的）不调用


const fs = require('fs');
const path = require('path');

// 获取当前有没有传入目标路径
var target = path.join(__dirname, process.argv[2] || './');

function load(target, depth) {
  // depth  0 = ''
  // depth  1 = '│ '
  // depth  2 = '│ │ '
  var prefix = new Array(depth + 1).join('│ ');

  var dirinfos = fs.readdirSync(target);

  var dirs = [];
  var files = [];

  dirinfos.forEach(info=> {
    var stats = fs.statSync(path.join(target, info));
    if (stats.isFile()) {
      files.push(info);
    } else {
      dirs.push(info);
    }
  });

  dirs.forEach(dir=> {
    console.log(`${prefix}├─${dir}`); // node_modules
    // 当前是一个目录 需要深入进去
    load(path.join(target, dir), depth + 1);
  });

  var count = files.length - 1;
  files.forEach(file=> {
    var temp = count-- ? '├' : '└';
    console.log(`${prefix}${temp}─${file}`);
  });
}


load(target, 0);
//

// 无级分类


// [
//   {id:1,name:'北京',pid:0},
//   {id:2,name:'昌平',pid:1},
//   {id:3,name:'海淀',pid:1},
//   {id:4,name:'朝阳',pid:1},
//   {id:1,name:'北京',pid:0},
//   {id:2,name:'昌平',pid:1},
//   {id:3,name:'海淀',pid:1},
//   {id:4,name:'朝阳',pid:1}
// ]

// ul
//   li=北京
//     ul
//       li=昌平
//       li=海淀
//   li=