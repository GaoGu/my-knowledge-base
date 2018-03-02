//var argv = process.argv;
//console.info(argv);
//运行文件
//E:\workspace\test>node 2
//[ 'D:\\nvm\\nodejs\\node.exe', 'E:\\workspace\\test\\2' ]

// E:\workspace\test>node 2 3 4 5
// [ 'D:\\nvm\\nodejs\\node.exe',
//   'E:\\workspace\\test\\2',
//   '3',
//   '4',
//   '5' ]
//参数中的前两位成员没什么意义

//模拟npm
var argv = process.argv.slice(2);

switch(argv[0]){
    case 'init':
        console.log('你需要inti');
        break;
    case 'install':
        var installPackageName = argvs[1];
        console.log('你在安装');
        break;
    case ''


}