 const addForm = document.querySelector(".add");
 const ul = document.querySelector(".todos");
 const searchForm = document.querySelector(".search input");



const filterTodos = term =>{
       
    console.log(term)
    console.log(ul.children)
     
     Array.from(ul.children)
     .filter(todo => !todo.textContent.includes(term))
     .forEach(todo => todo.setAttribute("style","display: none !important;"));
     
}

searchForm.addEventListener("keyup",()=>{
           const term = searchForm.value.trim();
           filterTodos(term);
});





ul.addEventListener("click",(e)=>{
         if(e.target.classList.contains("delete")){
              e.target.parentElement.remove();
         }
});
 


 const generatedTodo = ( todo  =>{
 
     return   `<li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${todo}</span>
     <i class="far fa-trash-alt delete"></i>
 </li> `;

 });



 addForm.addEventListener("submit",(e)=>{
          e.preventDefault();

          const input = addForm.add.value.trim();
          if(input.length>0 && input.length!=" "){
            ul.innerHTML += generatedTodo(input);
               addForm.reset();
          }
        
       
 });
