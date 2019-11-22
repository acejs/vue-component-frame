## **description**

> Vue 组件开发框架

## attention (将所有的 test 换成具体的功能组件名)

### 文件存放目录

> - package 文件夹开发对应的组件
> - example 文件夹写对应的测试
> - lib 文件夹放置打包后的文件

### 修改 package.json 配置 ( 按需修改, 其中 name 必须修改 )

> - --target: 构建目标，默认为应用模式，这里修改为 lib 启用库模式。
> - --dest : 输出目录，默认 dist，这里改成 lib。
> - --name 构建后的组件名。
> - [entry]: 最后一个参数为入口文件，默认为 src/App.vue。这里我们指定编译 package/ 组件库目录。

### 以上确认完毕后，请修改 package.json 中的版本号，并执行 npm publish 到库中
