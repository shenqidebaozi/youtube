/*
 * @作者: Baozi 
 * @日期: 2018-01-13 18:50:44 
 * @最后修改者:   Baozi 
 * @最后修改时间: 2018-01-13 18:50:44 
 */


var readline = require('readline');
var shell = require("shelljs");
var url = "";
//创建readline接口实例
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// question方法
rl.question("请输入url:", function (answer) {
    shell.exec("sudo youtube-dl -F " + answer);
    url = answer;
    rl.question('请输入要下载的编号:', function (answer) {

        shell.exec('sudo youtube-dl -f ' + answer + ' ' + url);
        rl.close();
    });
    // 不加close，则不会结束

});

// close事件监听
rl.on("close", function () {
    // 结束程序
    process.exit(0);
});