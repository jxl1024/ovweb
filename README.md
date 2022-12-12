## React 项目

### Day1
1. 使用脚手架搭建项目
create-react-app reactproject
注意：项目名称中不能有大写字母
2. 进入项目目录
cd reactproject
3. 启动项目
npm start 
4. 精简项目
删除一些脚手架自带的东西:
    * 4.1 public文件夹下面只保留index.html文件，其余都删掉，同时删除index.html中多余的引用。
    * 4.2、src文件夹下面的样式文件都删掉，只保留App.js和index.js即可
    * 4.3、修改App.js和index.js文件，把里面一些已经删除的css和logo都删除
5. 引入Ant Design
npm install antd
引入antd测试
注意：不能直接在App.js中引入antd.css，要在App.cs中引入antd.css，然后在App.js中引入App.css
6. 按需引入antd.css。全部引入antd.css导致编译后的文件太大，需要按需引入。参考官方文档。

### 引入路由
1. npm install react-router-dom
2. 添加路由组件 login.jsx和admin.jsx
注意：使用rcc自动创建组件内容
3. 注册路由
在App.js中引入定义的login和admin路由组件
