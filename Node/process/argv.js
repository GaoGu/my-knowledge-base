// var argv = process.argv;

// console.log(argv);
//
// 参数中的前两位成员都没什么意义

var argvs = process.argv.slice(2);

switch (argvs[0]) {
  case 'init':
    console.log('你需要INIT');
    break;
  case 'install':
    var installPackageName = argvs[1];
    console.log('你在安装' + installPackageName);
    break;
  case 'uninstall':
    console.log('uninstall');
    break;
}
