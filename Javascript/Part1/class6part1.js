var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter you last name: ");
var age = prompt("Enter the age: ");
var height = prompt("Enter the height: ");
var petName = prompt("Enter your pet name: ");
alert("Thank you so much for the information.")

// if (firstName[0]===lastName[0] && 20<age<30 && height>=170 && petName[-1]=="y"){
//   console.log("You are very intelligent")
// }

var nameCond = null;
var ageCond = null;
var heightCond = null;
var petNameCond = null;

if (firstName[0]===lastName[0]) {
  nameCond = true;
}else{
  nameCond = false;
}

if (20<age<30) {
  ageCond = true;
}
else{
  ageCond = false;
}

if (height>=170){
  heightCond = true;
}
else{
  heightCond = false;
}

if (petName[petName.length-1] === "y") {
  petNameCond = true;
}else{
  petNameCond = false;
}

// Check all conditions
if (nameCond && ageCond && heightCond && petNameCond) {
  console.log("WELCOME SPY!");
}else{
  console.log("Nothing to see here")
}
