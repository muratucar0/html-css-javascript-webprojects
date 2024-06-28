const form = document.querySelector("form");


/* input  */

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


const inputList = document.querySelectorAll("input");

const inputNameList = [username, email  ];

const errorMessage = document.getElementById("errorMessage");




console.log(inputNameList[0].id)
form.addEventListener("submit", (e) => {
    e.preventDefault();
     
   
  passwordControl();
});


let messageControl = false;
function message(message , classTemp){

    errorMessage.textContent = message;
    errorMessage.className = classTemp;

    if(messageControl){
        setTimeout(() => {
            errorMessage.textContent ="";
            errorMessage.className = "";
        }, 2000); 
    }
}


function passwordControl(){
       
    
     if(password.value === repassword.value){
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");  
        repassword.classList.remove("is-invalid");   
        repassword.classList.add("is-valid");  
         
            messageControl = true;
           message("Giriş Başarılı","bg-secondary text-white rounded-pill p-2 mt-4 fs-3 fw-bold text-center");
                 
       
     }
     else{
        messageControl = false;
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        repassword.classList.remove("is-valid");  
        repassword.classList.add("is-invalid");   
        

        message("Şifreler Eşleşmiyor","bg-danger text-white p-2 rounded-pill mt-4 fs-3 fw-bold text-center")
        
     }
}

 

function inputControl(){

inputList.forEach(input =>{
    input.addEventListener("keyup",()=>{
            inputNameList.forEach(item =>{
                 if(item.value != '' && item.checkVisibility() ){
                      item.classList.remove("is-invalid");
                     item.classList.add("is-valid");
                 }
                 else{
                
                     item.classList.remove("is-valid");
                     item.classList.add("is-invalid");
                 }
            })
      })

})
}
inputControl();