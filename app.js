// ESLint version 6
const menuBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navMenu = document.querySelector(".overlay")


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
menuBtn.addEventListener("click",()=>{
  menuBtn.classList.toggle("active");
    // Optionally toggle a class on the button
  // menuBtn.classList.toggle('active');
})

// Example of toggling the menu display with a class
if (navMenu.classList.contains('active')) {
  navMenu.style.display = 'block'; // Or 'flex', 'grid', etc.
} else {
  navMenu.style.display = 'none';
}

