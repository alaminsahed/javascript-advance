
var list = document.getElementById("list");

 list.style.display = "none";

var button = document.getElementById("btn");

button.addEventListener("click",(event)=>{
    if(list.style.display==="none")
    {
        list.style.display = "block";
    }
    else{
        list.style.display = "none";
    }
})