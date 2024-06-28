const alertContainer = document.querySelector(".alertContainer");
const faCopy = document.querySelector(".fa-copy");
const passwordButton = document.querySelector(".passwordButton");
const showPassword = document.querySelector("input");


faCopy.addEventListener("click", () => {
  alertContainer.classList.remove("active");
  setTimeout(() => {
    alertContainer.classList.add("active");
  }, 3000);
   
  
   showPassword.select();
    navigator.clipboard.writeText(showPassword.value);
    
});





passwordButton.addEventListener("click",createPassword);
               
 
 



function createPassword(){
  
  const passwordLenght = 14;
  const characters =  '0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 

  let password = "";
  for(let i = 0; i<=passwordLenght;i++){
    const randomNum = Math.floor((Math.random()*characters.length))
       password += characters[randomNum];
  } 

    console.log(showPassword.textContent)
      showPassword.value = password;

}