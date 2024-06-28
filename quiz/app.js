function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}
 

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("2-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("3-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("4-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" }, "c")
];





function Quiz(sorular){
     this.sorular = sorular;
     this.soruIndex = 0;
}


Quiz.prototype.soruGetir = function(){
      return this.sorular[this.soruIndex];
}


 const quiz = new Quiz(sorular);

 const quiz_box = document.querySelector(".card.quiz_box");
console.log(quiz_box)

 document.querySelector(".btn-start").addEventListener("click",()=>{
        
         quiz_box.classList.add("active");
         document.querySelector(".btn-start").style.display = "none";

        if(quiz.sorular.lenght != quiz.soruIndex){
            console.log(quiz.soruGetir());
              quiz.soruIndex++;
        }else{
            console.log("quiz bitti")
        }
 })

 