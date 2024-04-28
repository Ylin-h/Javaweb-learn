const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,//更改端口号为8000，默认8080与tomcat端口冲突
  }

})
