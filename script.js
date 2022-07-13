ScrollReveal().reveal('.wp-container-3',{
  origin: 'right',
  interval: '50',
  duration: '2000',
  distance: '150%',
  viewFactor: '0'});

ScrollReveal().reveal('.wp-container-5',{
  origin: 'left',
  interval: '50',
  duration: '2000',
  distance: '150%',
  viewFactor: '0'});

ScrollReveal().reveal('.wp-container-13',{
  origin: 'right',
  interval: '50',
  duration: '2000',
  distance: '150%',
  viewFactor: '0'});

ScrollReveal().reveal('.wp-container-14',{
  origin: 'left',
  interval: '50',
  duration: '2000',
  distance: '150%',
  viewFactor: '0'});

ScrollReveal().reveal('.wp-container-16',{
  origin: 'right',
  interval: '50',
  duration: '2000',
  distance: '150%',
  viewFactor: '0'});


let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


const sr = ScrollReveal

sr.reveal('.lorem'),

sr.reveal('.wp-container-14',{
    origin: 'left',
    interval: '106',
    duration: '2000',
    distance: '150%'});

sr.reveal('.wp-container-16',{
    origin: 'left',
    interval: '106',
    duration: '2000',
    distance: '150%'});

sr.reveal('.wp-container-3',{
    origin: 'left',
    interval: '106',
    duration: '2000',
    distance: '150%'});

sr.reveal('.wp-container-11',{
    origin: 'left',
    interval: '106',
    duration: '2000',
    distance: '150%'});

sr.reveal('.wp-container-5',{
    origin: 'left',
    interval: '106',
    duration: '2000',
    distance: '150%'});