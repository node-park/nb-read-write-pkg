# nb-read-write-pkg

1. 读取相对工作目录路径 package.json
``` javascript
const {readPkg} = require('nbt-read-write-pkg');

readPkg('./')
```

2. 向当前工作目录的相对路径写入 package.json

``` javascript
const {writePkg} = require('nbt-read-write-pkg');

writePkg('./',{config:{port:8080}})
```
