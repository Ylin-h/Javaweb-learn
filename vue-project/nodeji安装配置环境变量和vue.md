#配置方法
1. windows环境下，下载node-v20.12.2-x64.msi文件，下载地址：https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
2. 解压到任意目录
3. 在nodejs安装目录下创建node_cache和node_global两个文件夹，分别用来存放缓存和全局模块,进入node_global目录，创建node_modules文件夹，用来存放全局模块所下载的各种插件
4. 在系统环境变量中添加NODE_HOME和PATH，NODE_HOME指向nodejs所在目录，PATH指向%NODE_HOME%\node_cache和%NODE_HOME%\node_global,%NODE_HOME%\node_global\node_modules，在账户环境变量中添加NODE_PATH，值为%NODE_HOME%\node_global,打开cmd,输入npm config set prefix %NODE_HOME%\node_global,输入npm config set cache %NODE_HOME%\node_cache,输入npm config set registry https://registry.npm.taobao.org(外网速度可以不改)，输入npm config list，查看配置
5. 打开cmd，输入npm -v，出现版本号即安装成功
6. 下载vue，npm install vue -g，下载vue-cli脚手架，输入npm install -g @vue/cli,输入vue _V，出现版本号即安装成功
下载webpack，输入npm install webpack -g，下载webpack-cli，输入npm install webpack-cli -g，下载webpack-dev-server，输入npm install webpack-dev-server -g,下载vue-router，输入npm install vue-router -g
7. 打开cmd，输入vue create my-project，创建vue项目，会自动安装依赖包，等待安装完成即可
8. 输入cd my-project，进入项目目录，输入npm run serve，启动项目，浏览器打开http://localhost:8080，即可看到vue项目的欢迎页面
注：cmd或者powershell都要以管理员身份运行，否则会出现权限问题