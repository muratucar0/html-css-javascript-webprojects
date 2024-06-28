  const form = document.querySelector(".question-form");
  const result = document.querySelector(".result");
  



  form.addEventListener("submit",(e)=>{
              e.preventDefault();
        
              let score = 0;

              const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

              userAnswers.forEach((answer,index)=>{
                  if(answer == "E"){
                     score+=25;
                  }
              });

             result.classList.remove("d-none");

                 let val = 0;
                const stop =  setInterval(() => {
                  result.querySelector("span").textContent =  `${val}%`;
                   if(val==score){
                        clearInterval(stop);
                   }
                   else{
                       val++;
                   }
                 }, 20);
            
                 
          
      

              
  });




