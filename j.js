const input= document.getElementById("inputtask");
   const listc= document.getElementById("list-container");
function addTask()
{
   
   if(input.value==="")
   {
    alert("Enter your task first!");
   }
   else
   {
    let li= document.createElement('li');
    li.innerHTML=input.value;
    listc.appendChild(li);
    let span=document.createElement('span');
    span.innerText='\u00D7';
    li.appendChild(span);
 

   }
   input.value="";
   
   

}
   listc.addEventListener("click",(e)=>{
      if(e.target.tagName==='LI')
      {
        e.target.classList.toggle("checked");
        savedata();
      }
      else if(e.target.tagName==='SPAN')
      {
         e.target.parentElement.remove();
         savedata();
      }
   });
   function savedata()
   {
      localStorage.setItem("data",listc.innerHTML);
   }
   function showdata()
   {
      listc.innerHTML=localStorage.getItem("data");
   }
   showdata();