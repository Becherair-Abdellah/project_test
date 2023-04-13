let menu = document.querySelector('#menu-bar');
let nav = document.querySelector('.navbar');
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  nav.classList.toggle('nav-path');
}
// remove last classes when scroll 
window.onscroll = () => {
  menu.classList.remove('fa-times');
  nav.classList.remove('nav-path');
}


/* Sziper js */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
// line is function to controling top line when scrolling
function line(){
  const line = document.querySelector('.line');
  window.onscroll = ()=>{
    let calcHeight = document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let valueLine = Math.round((scrollY * 100)/calcHeight);
    line.style.width = `${valueLine}%`;
  }
}
line();