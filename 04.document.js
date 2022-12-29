const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mongoose_test');
mongoose.connection.once("open",function(){
  console.log('数据库连接成功~~~');
});


var Schema = mongoose.Schema;

var stuSchema = new Schema({
  name:String,
  age:Number,
  gender:{
    type:String,
    default:"female"
  },
  address:String
});

var StuModel = mongoose.model("man",stuSchema);
/* 
    Document 和集合中的文档一一对应，Document是Model的实例
    通过Model查询到的结果都是Document
*/

//创建一个Document
var stu = new StuModel({
  name:"奔波霸",
  age:48,
  gender:"male",
  address:"碧波谭"
});

/*
    document的方法
    Model#save([options],[fn])
*/

// stu.save(function(err){
//     if(!err){
//       console.log('保存成功');
      
//     }
//  })

StuModel.findOne({},function(err,doc){
  // //简单模式
  // doc.age = 18;
  // doc.save();

  //完整模式
    if(!err){
      /*

        update(update,[option],[callback])
          -修改对象
        remove([callback])
          -删除对象

      */
      // console.log(doc);
      //返回就是一个文档 不需要再指定文档对象 也就等于stu的方法
      // doc.update({$set:{age:28}},function(err){
      //     if(!err){
      //       console.log('修改成功~~~');
            
      //     }
      //  });

      // doc.remove(function(err){
      //     if(!err){
      //       console.log('大师兄再见');
      //     }
      //  })

      /* 
        get(name)
          -获取文档中的指定属性值
        set(name ,value)
          -设置文档的指定的属性值
        id
          -获取文档的_id属性值
      */
          //console.log(doc.get("age"));
          //console.log(doc.age);

          // doc.set("name","朱小姐")
          // doc.name = "hahah"
          //不save不会存到数据库 

          // console.log(doc);
          // console.log(doc._id);

          //转为JSON对象
          console.log(doc.toJSON());
          //转为普通的JS对象 转之后 所有的Document对象的方法或属性都不能使用
          



    }
 })


