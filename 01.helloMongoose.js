/*
    https://mongoosejs.com/
    1.下载安装Mongoose
      npm i mongoose --save
    2.在项目中引入mongoose
      var mongoose = require("mongoose");
    3.连接mongoDB数据库
      mongoose.connect('mongodb://数据库的ip地址:端口号/数据库名');
      - 如果端口号默认27017 则可以省略不写
    4.断开数据库连接（一般不需要调用）
    -MongoDB数据库 一般情况下 只需要连接一次 连接一次以后 除非项目停止服务器关闭 否则连接一般不会断开
      mongoose.disconnect()

    -监听MongoDB数据库的连接状态
      在mongoose对象中，有一个属性叫做connection 该对象表示的就是数据库连接
        通过监视该对象的状态，可以来监听数据库的连接与断开

      数据库连接成功的事件

        mongoose.connection.once("open",function(){})
        
      数据库断开的事件

        mongoose.connection.once("close",function(){})
*/

//引入
const mongoose = require('mongoose');
//连接
mongoose.connect('mongodb://127.0.0.1:27017/test');
//数据库连接成功的事件
mongoose.connection.once("open",function(){
  //vscode这里 直接在终端  node .\01.helloMongoose.js
  console.log('数据库连接成功');
  
})

mongoose.disconnect()

mongoose.connection.once("open",function(){
  
  console.log('数据库已断开');
  
})