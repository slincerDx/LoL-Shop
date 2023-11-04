document.addEventListener('DOMContentLoaded', function (){
  // Faq 

const faqs = document.querySelectorAll('.faq__item'),
faqsItem = document.querySelectorAll('.faq__item-answer');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
      faq.classList.toggle('active');
  })
})


//Slider

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  effect: 'slider',
  slidesPerView: 'auto',
  spaceBetween: 25,
  freemod: false,
  initialSlide: 3,

  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // }
});


//Burger-Menu

const btnOpen = document.querySelector('.burger-menu-btn'),
   btnClose = document.querySelector('.burger-menu__btn-close'),
 burgerMenu = document.querySelector('.burger-menu');

 btnOpen.addEventListener('click', () => {
      burgerMenu.classList.add('acive-btn');
      burgerMenu.classList.remove('active-menu-close');
      document.body.style.overflow = 'hidden';
 })

 btnClose.addEventListener('click', () => {
      burgerMenu.classList.remove('acive-btn');
      burgerMenu.classList.add('active-menu-close');
      document.body.style.overflow = '';
 })


 //select-language

const langBtn  = document.querySelector('#btn-lan');
const langList = document.querySelector('.select-language__list');

langBtn.addEventListener('click', () =>{
  langList.classList.toggle('select-language__list--hidden');
})

//select-languauge-mobile

const languaugeBtn  = document.querySelector('#btn-lang');
const languaugeList = document.querySelector('.select-language__list-mobile ');

languaugeBtn.addEventListener('click', () =>{
  languaugeList.classList.toggle('select-language__list--hidden');
})


















})