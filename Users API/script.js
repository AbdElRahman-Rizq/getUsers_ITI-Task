function getUsers() {
  var myHttp= new XMLHttpRequest();
  myHttp.open("get","https://jsonplaceholder.typicode.com/users");
  myHttp.send();
  myHttp.addEventListener('readystatechange',()=>{
    if (myHttp.readyState == 4) {
      if (myHttp.status == 200) {
        // console.log(myHttp.response)
        var response = myHttp.response;
                var data = JSON.parse(response);
                for (let i = 0; i < data.length; i++) {
                  
                  
                  
                  table(data[i].id,data[i].username,data[i].email)
                }
      }
      else console.log("loading")
}
  })
  


}
var result=document.getElementById("result");
function table(id,userName,email) {
  var row= document.createElement("tr");
  result.append(row);
  row.setAttribute("id",id)
  var idCol= document.createElement("td");
  row.append(idCol);
  idCol.innerHTML = id;
  var nameCol= document.createElement("td");
  row.append(nameCol);
  nameCol.innerHTML = userName;
  var ageCol= document.createElement("td");
  row.append(ageCol);
  ageCol.innerHTML = email;
  
  
}
var btn=document.getElementById("get");
btn.onclick=getUsers;
