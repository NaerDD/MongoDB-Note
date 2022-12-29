const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test');
mongoose.connection.once("open",function(){
  console.log('数据库连接成功~~~');
});

//将mongoose.Schema赋值给一个变量
var Schema = mongoose.Schema;

//创建schema（模式）对象
var stuSchema = new Schema({

  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String

});

//通过Scheme来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作
//mongoose.model(modelName,schema):
//modelName就是要映射的集合名 mongoose会自动将集合名变成复数
var StuModel = mongoose.model("man",stuSchema);

//向数据库中插入一个文档
//StuModel.create(doc,function(err){})
StuModel.create({
  name:"孙悟空",
  age:18,
  gender:"male",
  address:"花果山"
},function(err){
    if(!err){
      console.log('插入成功~~~');
    }
 })


