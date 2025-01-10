let rev=document.querySelector('.revueltofe');
        
let body=document.querySelector('body');

function hover(){
   if (rev.style.display==="none") {
       rev.style.display="block";
   }
   else{
       rev.style.display="none";
   }
}
//2nd
let tem=document.querySelector('.Temerario');
function hove(){
   if (tem.style.display==="none") {
       tem.style.display="block";
   }
   else{
       tem.style.display="none";
   }
}
//3rd
let urus=document.querySelector('.URUS');
function hov(){
   if (urus.style.display==="none") {
       urus.style.display="block";
   }
   else{
       urus.style.display="none";
   }
}
//4th

let hur=document.querySelector('.Huracán');
function ho(){
   if (hur.style.display==="none") {
       hur.style.display="block";
   }
   else{
       hur.style.display="none";
   }
}
//5th
let Countach=document.querySelector('.Countach');
function h(){
   if (Countach.style.display==="none") {
     Countach.style.display="block";
   }
   else{
     Countach.style.display="none";
   }
}

//6th
let SIAN=document.querySelector('.SIAN');
function m(){
   if (SIAN.style.display==="none") {
   SIAN.style.display="block";
   }
   else{
     SIAN.style.display="none";
   }
}
//7th
let SIAN2=document.querySelector('.Sián');
function n(){
   if (SIAN2.style.display==="none") {
   SIAN2.style.display="block";
   }
   else{
     SIAN2.style.display="none";
   }
}
//8th
let Estoque=document.querySelector('.Estoque');
function o(){
   if (Estoque.style.display==="none") {
   Estoque.style.display="block";
   }
   else{
     Estoque.style.display="none";
   }
}
//9th
let LPI=document.querySelector('.LPI');
function p(){
   if (LPI.style.display==="none") {
   LPI.style.display="block";
   }
   else{
     LPI.style.display="none";
   }
}

//10th
let TERZO=document.querySelector('.TERZO');
function r(){
   if (TERZO.style.display==="none") {
     TERZO.style.display="block";
   }
   else{
     TERZO.style.display="none";
   }
}





//  function body(){ position: absolute;
   
//     if (rev.style.display==="block"){
//         rev.style.display="none";
//     }
//  }

// Media query for PC view
const isPCView = window.matchMedia('(min-width:0px)');

let currentSlide = 0;
let slides;

// Function to initialize the slideshow
function initializeSlideshow() {
slides = document.querySelectorAll('.main > div');

if (slides.length === 0) {
console.error('No slides found!');
return;
}

showSlide(currentSlide);

console.log('Slideshow initialized for PC view.');
}

// Function to show a specific slide
function showSlide(index) {
slides.forEach((slide, i) => {
slide.style.display = i === index ? 'block' : 'none';
});
}

// Function to go to the next slide
function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
showSlide(currentSlide);
}

// Handle media query changes
function handleScreenResize(event) {
if (event.matches) {
initializeSlideshow(); // Run JavaScript for PC view
} else {
console.log('Disabling slideshow for smaller screens.');
if (slides) {
    slides.forEach(slide => slide.style.display = ''); // Reset styles
}
}
}

// Initial check on page load
if (isPCView.matches) {
initializeSlideshow();
}

// Add listener for screen size changes
isPCView.addEventListener('change', handleScreenResize);