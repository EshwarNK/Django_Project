//FUNCTIONS
function hello(name){
  console.log("Hello "+name);
}

function addNum(num1, num2){
  console.log(num1+num2);
}

//Default FUNCTIONS
function helloSomeone(name="Frankie"){
  console.log("Hello "+name);
}

function formal(name= "Sam", title='Sir'){
  console.log(title+ " "+name);
}

function formalreturn(name="Sam", title="Sir"){
  return title+" "+name
}

function timesFive(numInput){
  //local scope
  var result = numInput*5
  return result
}

//Global scope
var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"
function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func"
  console.log(stuff);
}

fun();
console.log(stuff);
