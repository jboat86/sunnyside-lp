// ESLint version 6
var menuBtn = document.querySelector(".hamburger");
var closeBtn = document.querySelector(".close");
var navMenu = document.querySelector(".overlay")


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
menuBtn.addEventListener("click",()=>{
  menuBtn.classList.toggle("active");
})


// function toggleMenu(){
//   var nav  = document.getElementById("nav-links");
//   if (nav.style.display === "block") {
//     nav.style.display = "none";
//   } else {
//     nav.style.display = "block";
//   }
// }