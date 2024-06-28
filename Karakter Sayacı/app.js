 const textarea = document.querySelector("textarea");

 const totalCounter = document.querySelector("#totalCounter");

 const remeiningCounter = document.querySelector(".remeiningCounter");

 


 textarea.addEventListener("keyup",()=>{
          
    
      totalCounter.textContent = textarea.value.length;
        remeiningCounter.textContent = textarea.getAttribute("maxlength") - textarea.value.length;

 })();
