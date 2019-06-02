// Object Exercise problems
var employee1 = {
  name: "John Smith",
  job: "Programmer",
  age:31,
  nameLength : function(){
    console.log(this.name.length)
  }
}


var employee2 = {
  name: "John Smith",
  job: "Programmer",
  age:31,
  report : function(){
    alert("Name is: "+this.name+", Age is: "+this.age)
  }
}


var employee3 = {
  name: "John Smith",
  job: "Programmer",
  age:31,
  report : function(){
    console.log(this.name.split(" ")[1])
  }
}
