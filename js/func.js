const e = require("express");


/*function myFunction() {
    
    document.getElementById("text1").innerHTML = document.getElementById("input1").value;
  }*/

  document.getElementById("btn").addEventListener("click",function(e){
    
    e.preventDefault();
    document.getElementById("text").innerHTML = document.getElementById("input").value;
      
  })