function addNumbers() {
    if (arguments.length === 0) {
      throw new Error("U didn't send arguments");
    }
  
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        throw new TypeError("Invalid argument type: " + typeof arguments[i]);
      }
      sum += arguments[i];
    }
  
    return console.log(sum);
  }
// Output
addNumbers()// Error: U didn't send arguments