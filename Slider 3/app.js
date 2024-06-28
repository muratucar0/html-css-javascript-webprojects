var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];


 
 const img = document.querySelector(".card-img-top");
const cardTitle = document.querySelector(".card-title");
const cardLink = document.querySelector(".card-link");


const iconLeft = document.querySelector(".icon-left");
const iconRight = document.querySelector(".icon-right");


let length = 0;

const modelLenght = models.length-1;


let intervalidId;

function rightImage(){
    if( length<modelLenght)
        {
            length++;
        }
        else{
            length = 0;
        }
    
   
     showSlide(length);
}
iconRight.addEventListener("click",rightImage);


 iconLeft.addEventListener("click",()=>{
    if(length !=0){
        length--;
    }
    else{
        length = modelLenght;
    }
    showSlide(length);
     
 
 })

 function showSlide(index){
    cardTitle.textContent = models[length].name;
    cardLink.setAttribute("href",models[length].link);
   img.setAttribute("src",models[length].image)
 }

 intervalidId=setInterval(rightImage, 2000);


const icon = document.querySelectorAll(".icon");


icon.forEach(item =>{
    item.addEventListener("mouseenter",()=>{
         clearInterval(intervalidId);
    })
})