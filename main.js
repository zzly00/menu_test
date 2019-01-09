let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
let header = document.querySelector('.header');
let main = document.querySelector('.main');

let forScroll = document.querySelector('.forScroll');

icon.addEventListener('click',function(){
  // box.classList.toggle('show');
  header.classList.toggle('m_header');

  // main.classList.toggle('main_fix');

  forScroll.classList.toggle('open');

  document.body.classList.toggle('test');
//   $('html, body').css({
//     overflow: 'hidden',
//     height: '100%'
// });
});