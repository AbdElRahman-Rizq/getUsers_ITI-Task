
function myFunction(param1, param2) {
  if (arguments.length !== 2) {
    throw new Error("This function only take 2 arguments");
  }
  else
  console.log(param1,param2)
}
myFunction(1,2,3)