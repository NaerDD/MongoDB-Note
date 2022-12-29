//引入连接数据库
require("./tools/conn_mongo")
//引入模型
var Student = require("./models/students.js");

console.log(Student);

Student.find({},function(err,docs){
    if(!err){
      console.log(docs);
      
    }
 })
