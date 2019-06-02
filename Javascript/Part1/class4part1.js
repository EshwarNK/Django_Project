alert("hello");

//If statement
var hot=false;
var temp=50;

if (temp>80) {
  console.log("Hot Outside")
}else if(temp<=80 && temp>=50){
  console.log("Average temp outside!")
}else if(temp<50 && temp>=32){
  console.log("Its pretty cold out!")
}else{
  console.log("It is very cold out")
}

var ham = 10
var cheese = 10
var report = "blank"
if (ham>=10 && cheese >=10){
  report = "Strong sales of both ham and cheese!"
}else if (ham===0 && cheese === 0) {
  report = "Nothing sold!"
}else{
  report="We had some sales of items"
}
console.log(report);

//while loop
var x=0;
while(x<5){
  console.log("x is currently: "+x)
  if (x===3){
    console.log("X is equal to 3");
    break;
  }
  console.log("x is still less than 5, adding 1 to x");
  x=x+1

}

//WHile loop that prints out only even numbers from 1 to 10
var y=1
while (y<=10) {
  if (y%2===0){
    console.log(y)
  }
  y=y+1
}

//For loops
for (var i = 0; i < 5 ; i++) {
  console.log("Number is "+i)
}

var word = "ABCDEFGHIJK"
for (var i=0; i<word.length; i=i+2){
  console.log(word[i]);
}
