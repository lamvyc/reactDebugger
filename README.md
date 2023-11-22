## git 
git update-index --assume-unchanged .gitignore    让 Git 完全忽略 .gitignore 文件的更改（只对本地有效）
git update-index --no-assume-unchanged .gitignore   恢复上述操作
git branch --set-upstream-to=origin/sandbox sandbox
git push origin HEAD:refs/for/master                      

## mac
sudo chmod -R 777 p0_xiangshe    -----  「p0_xiangshe是自己指定的文件夹」释放文件编辑权限（mac系统专有）

## npm
-g    全局安装
--save    表示将模块添加到 package.json 文件中的 dependencies 属性。
-D. 只在本地开发安装依赖，打包的时候不进去   ====   npm install eslint --save-dev

## vscode
在 VS Code 中进行文件搜索时，使用 > 符号可以进行高级搜索。
//比如:搜索setting.json文件  =>  >users


## vim编辑器
 保存并退出 => :wq
 退出vim => :q
 撤销操作 => u 或 Ctrl + r
 
//插入模式：
i：在当前光标处插入
a：在当前光标后插入
o：在当前行下方插入一个新行并进入插入模式
O：在当前行上方插入一个新行并进入插入模式

//复制、粘贴：
yy：复制当前行
p：粘贴

重复操作：.

------------------------------------------------------------------------------------
## webpack

### contenthash 与 hash区别
**hash 是基于整个构建过程生成的唯一哈希值，而 contenthash 是基于文件内容生成的哈希值。**

contenthash: 当文件内容发生变化时，contenthash 会生成一个新的唯一哈希值。
使用 contenthash 作为文件名的一部分时，可以实现在文件内容变化时进行缓存失效，而对于未更改的文件，仍然可以从缓存中加载。

hash: 只要构建过程中有任何变化，无论是源代码的修改、配置的更改还是构建工具的更新，都会导致生成的哈希值发生变化。

### infrastructureLogging
日志记录

### cache
缓存

### babel-runtime是做什么的


### creat-react-app默认支持sass不支持less


### IgnorePlugin
`javascript`
 new webpack.IgnorePlugin({
    resourceRegExp: /^\.\/locale$/,
    contextRegExp: /moment$/,
 }),

### 性能优化的点

- cache.type
string:'memory'|'filesystem'
内存肯定比文件系统快

- module.rules.oneOf

- babel-preset-react-app/webpack-overrides
- 解决babel缓存bug
- https://github.com/babel/babel/issues/8497
