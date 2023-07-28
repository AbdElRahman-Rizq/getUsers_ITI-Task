import {setCookie} from "./library_cookies.js";

////////////////////////// get values from user/////////////////////
function submit() {

  const userName = document.getElementById('name').value;
const age = document.getElementById('Age').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const color = document.getElementById('color').value;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Gender: ${gender}`);
console.log(`Color: ${color}`);
// set the cookies
setCookie("name",userName,10);
setCookie("age",age,10);
setCookie("gender",gender,10);
setCookie("color",color,10);

}

var btn =document.getElementById("btnSubmit");
btn.onclick=submit;



