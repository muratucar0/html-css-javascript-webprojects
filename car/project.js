const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url") ;
const cardBodt = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-cars");


const ui = new UI();

const storage = new Storage();

// TÜM EVENTLERİ YÜKLEMe
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addCar);

    document.addEventListener("DOMContentLoaded",function(){
            let cars = storage.getCarsFromStorage();
            ui.loadAllCars(cars);
    });

    cardBodt.addEventListener("click",deleteCar);

    clear.addEventListener("click",clearAllCars)
}

function addCar(e){
  
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if(title === "" || price === "" || url===""){
          ui.displayMessages("Tüm alanları doldurun !","danger"); 
    }
    else{
         // yeni araç

         const newCar = new Car(title,price,url);
         
         ui.addCarToUI(newCar);// arayüze araç ekleme,


         storage.addCarToStorage(newCar);
         ui.displayMessages("Başarıyla Eklendi","primary")
       
    }
    ui.clearInpusts(titleElement,urlElement,priceElement);
    
    e.preventDefault();
}


function deleteCar(e){

    if(e.target.id === "delete-car"){
        ui.deleteCarFromUI(e.target);

        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi tamamlandı","success")
    }
}


function clearAllCars(){
    


    if(confirm("Tüm araçlar silinecek , emin misiniz?")){
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }

}