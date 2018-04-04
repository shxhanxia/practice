'use static'
const fs = require('fs');
const path = require('path');
//解析需要遍历的文件夹，我这以F盘为例
var filePath = path.resolve('F:/WWW');

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
 function fileDisplay (filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, (err, files) => {
        if (err) {
            console.warn(err);
        } else {
            //遍历读取到的文件列表
            files.forEach((filename) => {
                //获取当前文件的绝对路径
                let filedir = path.join(filePath, filename);
                console.log(filedir);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir, (err, stats) => {
                    if (err) {
                        console.warn(err);
                    } else {
                        if (stats.isDirectory()) {
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                });
            });
        }
    });
}