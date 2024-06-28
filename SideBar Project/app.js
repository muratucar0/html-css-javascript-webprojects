 const menuIcon = document.querySelector(".fa-solid");
const sideBar =  document.querySelector(".sidebar");


const close = document.querySelector(".close");

let value = false;

close.addEventListener("click",()=>{
   
  if(value===true){
    sideBar.classList.remove("showSidebar");
  }
  value = false;
})







menuIcon.addEventListener("click",()=>{
             
             value = !value;

             if(value){
               sideBar.classList.add("showSidebar");
             }
             else{
              sideBar.classList.remove("showSidebar");
             }


});