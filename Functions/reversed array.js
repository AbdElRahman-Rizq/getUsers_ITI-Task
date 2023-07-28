function firstWay() {
  var params = [];
  for(var i = arguments.length-1; i >= 0; i--) {
    params.push(arguments[i]);
  }
   return console.log(params);
}

function secondWay() {
  var params = Array.prototype.slice.call(arguments);
   return console.log(params.reverse());
}


///output
firstWay("a","b","c");
secondWay(1,2,3);


