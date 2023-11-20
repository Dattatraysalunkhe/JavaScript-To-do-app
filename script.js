const inputbox=document.getElementById("inputbox")
const listconatiner=document.getElementById("listcontainer")

function addtask(){

    if(inputbox.value === '')
    {
        alert("Write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listconatiner.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
        
      
        
    }
    inputbox.value="";
    saveData();
}
listconatiner.addEventListener("click",function(e){
        if(e.target.tagName === "LI")
        {
             e.target.classList.toggle("checked")
        }
        else if(e.target.tagName === "SPAN")
        {
            e.target.parentElement.remove();
        }
})

function saveData(){
    localStorage.setItem("data",listconatiner.innerHTML)
}
function showTask(){
    listconatiner.innerHTML=localStorage.getItem("data")
}
showTask()