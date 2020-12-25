const fs = require('fs-extra');
const childProcess = require('child_process');


try {
    // 移除dist
    fs.removeSync('./dist/');
    // 复制文件夹
    fs.copySync('./src/public', './dist/src/public');
    // 执行编译
    childProcess.exec('tsc --build tsconfig.prod.json');
} catch (err) {
    console.log(err);
}
