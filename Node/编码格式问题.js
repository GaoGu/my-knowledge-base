// 文件流的方式读取文件内容

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

// 创建一个文件读取流
var stream = fs.createReadStream(path.join(__dirname, './../lyrics/血染的风采.lrc'));
// 让文件流通过iconv过滤编码
stream = stream.pipe(iconv.decodeStream('gbk'));
// 流到输出控制台
// stream.pipe(process.stdout);

var data = '';
stream.on('data', (trunk) => {
  console.log(trunk);
});
stream.on('end', () => {
  console.log('end');
});


