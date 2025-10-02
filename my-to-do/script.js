 const toggleBtn = document.getElementById("toggle-Btn");
 const btn = document.getElementById("btn");
 const taskList = document.getElementById("taskList");
 const inputText = document.getElementById("inputText")
  window.onload=function(){
    let saveData = localStorage.getItem("itme");
    if(saveData){
     taskList.innerHTML=saveData;
     let AllItem = document.querySelectorAll("li");
     AllItem.forEach(function(li){
li.addEventListener("dblclick", function(){
li.remove();
localStorage.setItem("itme", taskList.innerHTML)
});
     });
    }
  };

btn.addEventListener("click", function(){
  let value = inputText.value;
  if(inputText.value !==""){
    let li = document.createElement("li");
    li.textContent= value;
    
    taskList.appendChild(li);
     localStorage.setItem("itme", taskList.innerHTML)
    inputText.value="";
  }
});
 
  
 
  
toggleBtn.addEventListener("click", function(){
  document.body.classList.toggle("dark");
  if(document.body.classList.contains('dark')){
    localStorage.setItem("theme","dark");
    toggleBtn.textContent="Light Mode";
  }else{
    localStorage.setItem("theme", "light");
    toggleBtn.textContent="Dark Mode";
  }
});
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggleBtn.textContent="Light Mode";

  }else{
    toggleBtn.textContent="Dark Mode";
  }
