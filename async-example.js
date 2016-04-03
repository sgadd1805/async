var async = require('async');

var stack = [];

var function1 = function(callback){
  callback(null, "first function");
}

var function2 = function(callback){
  callback(null, "second function");
}

var function3 = function(callback){
  callback(null, "third function");
}

stack.push(function1);
stack.push(function2);
stack.push(function3);

async.parallel(stack, function(err, results){
  if(err){
    console.log(err);
    return;
  }
  console.log(results);
})

var stack2 = {};

stack2.functionUserName = function(callback){
  var userName = "sgadd";
  callback(null, userName);
}

stack2.functionPhone = function(callback){
  var phone = "223234";
  callback(null, phone);
}

stack2.functionEmail = function(callback){
  var email = "sgadd1805@outlook.com";
  callback(null, email);
}

async.parallel(stack2, function(err, result){
  if(err){
    console.log(err);
  }
  console.log(result);
});
