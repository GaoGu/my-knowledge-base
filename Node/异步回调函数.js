// console.log('开始执行了');
// console.time('main'); // 代码计时器

// // 不断的循环阻塞了代码的执行
// setTimeout(() => {
//   for (var i = 0; i < 1000000000; i++) {}
//   console.log('循环完了');
// }, 0);

// console.timeEnd('main');
// console.log('完成执行了');
//
//

// console.time('main');

// // 耗费时间（阻塞情况） 1000ms
// setTimeout(()=>{
//   var data = get('http://www.baidu.com/1.jpg');
//   console.log(data);
// },0);


// console.timeEnd('main');
// console.log('完成执行了');
//
//

// console.time('main');

// get('http://www.baidu.com/1.jpg', function (data) {

// });

// console.timeEnd('main');
//
//

// 1. 如果函数需要回调参数，一定是在参数的最后出现
// function getFileAsync(path, callback){
//   if(错误){
//     callback(new Error('xxx 错误'));
//   }else{
//     callback(null, data);
//   }
// }

// 2. 错误优先的回调函数





function isEvenOrOdd(number, callback){
    if(typeof number ==='number'){
      if(number % 2){
        // 奇数
        callback(null, '当前传入的是奇数');
      } else{
        callback(null, '当前传入的是偶数');
      }
    }else{
      throw new Error('你传入的不是数字');
      callback(new Error('你传入的不是数字'));
    }
  }
  
  // 约定将错误信息作为回调的第一个参数
  isEvenOrOdd(10, (error,data)=>{
    if(error) throw error;
    console.log(data);
  });
  
  
  isEvenOrOdd(11, (error,data)=>{
    if(error) throw error;
    console.log(data);
  });
  
  isEvenOrOdd('asda', (error,data)=>{
    if(error) throw error;
    console.log(data);
  });