const fs = require('fs');
const path = require('path');

/**
 * 读取指定目录的 package.json
 * @param {string} path 当前工作目录相对路径
 * @return {object}
 */
export const readPkg = (path) => {

    const pkgPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(pkgPath)) {
        return JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' }));
    } else {
        return {}
    }
}

/**
 * 写入指定目录 package.json
 * @param {string} path 当前工作目录相对路径
 */
export const writePkg = (path, pkg) => {

    const pkgPath = path.join(process.cwd(), 'package.json');

    if(fs.existsSync(pkgPath)){
        fs.writeFileSync(pkgPath,JSON.stringify(pkg,null,2));
    }else{
        console.log(`${pkgPath} 文件不存在`)
    }

}