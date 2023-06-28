import './index.html';
import './index.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


// swipper //

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

var swiper = new Swiper(".cardSwiper", {
  slidesPerView: 2,
  spaceBetween: 105,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
});


// // ////////
let i = 0
    document.addEventListener('click', function(e) {
        const target = e.target
        
        const wrapper = target.parentNode.previousElementSibling   
        const read = target.parentNode 
        if (target.className == 'about__unwrap-brandlist' ||
          target.className == 'about__read-brandlist' ||
          target.className == 'arrow-brandlist') {
          
          wrapper.classList.add('btn-active')  
          read.children[0].style = "rotate: 180deg"   
          read.children[1].style = "rotate: 180deg"   
          read.children[2].textContent = "Скрыть"   
          i++  
          
          if (i % 2 == 0) {
            wrapper.classList.remove('btn-active')
            read.children[0].style.rotate = "360deg"   
            read.children[1].style = "rotate: 360deg"
            read.children[2].textContent = "Показать все"
            
          }
        }
    });

//////////////////SIDEBAR//////////////// 


const sidebar = document.querySelector('.left-sidebar')
const wrapper = document.querySelector('.wrapper') 
const application = document.querySelector('.application')
const callbac = document.querySelector('.callback')
const exitButtons = document.querySelectorAll('.icon__close')



document.addEventListener('click', function(e) {
  const target = e.target
  
  ///////SIDEBAR ///////////////
 
  if (target.className.includes('icon1')) {
    sidebar.classList.add('sidebar-active')
  } 
  if (target.closest('.wrapper') &&
    !target.className.includes('icon1') ||
    target == exitButtons[0]) {
      sidebar.classList.remove('sidebar-active')
      wrapper.classList.remove('opacity')  
  } 
  /////////////////////////////// 
  
  if (target.className.includes('icon__phone')) {
    application.classList.add('applictation-active')
  }
  if (target.closest('.wrapper') &&
    !target.className.includes('icon__phone') ||
    target == exitButtons[1]) {
      wrapper.classList.remove('opacity')  
      application.classList.remove('applictation-active')
  } 

// ///////////////////////////

  if (target.className.includes('icon__message')) {
      callbac.classList.add('applictation-active')
  }
  if (target.closest('.wrapper') &&
    !target.className.includes('icon__message') ||
      target == exitButtons[2]) {
      wrapper.classList.remove('opacity')  
      callbac.classList.remove('applictation-active')
  }
  
  if (target.className.includes('icon1') ||
    target.className.includes('icon__phone') ||
    target.className.includes('icon__message')) {
    wrapper.classList.add('opacity')
  }
});




