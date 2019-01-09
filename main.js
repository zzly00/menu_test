let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
let header = document.querySelector('.header');
let main = document.querySelector('.main');

let forScroll = document.querySelector('.forScroll');

icon.addEventListener('click',function(){
  // box.classList.toggle('show');
  header.classList.toggle('m_header');

  main.classList.toggle('main_fix');

  forScroll.classList.toggle('open');

  // main.addEventListener('touchmove', function (e) {
  //   e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  // }, {passive: false}); //passive 参数不能省略，用来兼容ios和android
});