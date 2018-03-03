

setInterval(function () {
    console.log(1);
  }, 1000);
  
  
  
  // // 标识当前是否已经按下Control + c
  // var exiting = false;
  // // 除非
  // process.on('SIGINT', () => {
  //   if (exiting) {
  //     // 终止当前NODE的进程
  //     console.log('推出');
  //     process.exit();
  //   } else {
  //     // 第一次按下
  //     console.log('第一次按下');
  //     exiting = true;
  
  //     setTimeout(() => { exiting = false; }, 1000);
  //   }
  //   // console.log('Got SIGINT.  Press Control-D to exit.');
    
  //   // console.log('按下了^c');
  // });
  
  