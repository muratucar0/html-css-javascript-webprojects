  const menuBars = document.querySelector(".menu-bars ");
  const overlay = document.querySelector(".overlay");
 
   const navMainPage = document.getElementById("navMainPage");
   const navAbout = document.getElementById("navAbout");
   const navServices = document.getElementById("navServices");
   const navPrices = document.getElementById("navPrices");
   const navContact = document.getElementById("navContact");



    const navItems =[navMainPage,navAbout,navServices,navPrices,navContact];

   let state = false;

   function toggleNav(){
    
    menuBars.classList.toggle("change");
    state = !state;
    overlay.classList.toggle("transformNav", state);

    
    navMainPage.classList.add("slide-in-1")
    navAbout.classList.add("slide-in-2")
    navServices.classList.add("slide-in-3")
    navPrices.classList.add("slide-in-4")
    navContact.classList.add("slide-in-5")
   } 


  menuBars.addEventListener("click",toggleNav)
  
  

  navItems.forEach((nav)=>{
        nav.addEventListener('click',toggleNav);
  })