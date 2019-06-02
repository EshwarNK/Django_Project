//Function exercises
function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
}

function monkeyTrouble(aSmile, bSmile){
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}

function stringTimes(str, n){
  var output = "";
  var i = 0;
  while(i<n){
    output+=str
    i++
  }
  return output
}

function luckysum(a,b,c){
  if (a===13) {
    return 0
  }
  if (b===13){
    return a
  }
  if (c===13) {
    return a+b
  }
  return a+b+c
}

function caught_speeding(speed, is_birthday){
  if (is_birthday) {
    if (speed<=65){
      return 0
    }
    if (66<=speed<=85){
      return 1
    }
    if (speed>=86){
      return 2
    }
  }
  else {
    if (speed<=60){
      return 0
    }
    if (61<=speed<=80){
      return 1
    }
    if (speed>=81){
      return 2
    }
  }
}

function speeding(speed, is_birthday){
  if(is_birthday){
    speed -= 5
  }
  if(speed <= 60){
      return 0
  }
  // Optional: (60 < speed && speed <=80)
  if(60 < speed <= 80){
    return 1
  }
  return 2
}

function makeBricks(small, big, goal){
  return goal%5 >= 0 && goal%5 - small <= 0 && small + 5*big >= goal
}
