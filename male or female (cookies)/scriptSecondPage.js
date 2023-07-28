import {getCookie} from "./library_cookies.js";
//////// Male or female////////////////
var imgSecondPage=document.getElementById("imgSecondPage");

if(getCookie("gender")=="male"){
  imgSecondPage.setAttribute("width","10%")
  imgSecondPage.setAttribute("src","1.jpg")
}else
imgSecondPage.setAttribute("src","2.jpg")

////////////////visitSite  //////////////////////////
function incrementVisitCount() {
  let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);
  return visitCount;
}

const visitCount = incrementVisitCount();
console.log(``);

/////////////////////////// output//////////////
var output=document.getElementById("output");
output.innerHTML=`<b>  Welcome! <span style='color:${getCookie("color")}'>${getCookie("name")}</span>
  You have visited this site <span style='color:${getCookie("color")}'>${visitCount}</span> times. </b>`