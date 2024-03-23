const inputBox=document.getElementById("input-box");
const tasks=document.getElementById("taskcontainer");

function AddTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        tasks.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    save();
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false);
function save(){
    localStorage.setItem("data",taskcontainer.innerHTML);
}
function show(){
    taskcontainer.innerHTML=localStorage.getItem("data");
}
show();