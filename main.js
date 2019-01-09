let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
let header = document.querySelector('.header');
let main = document.querySelector('.main');
icon.addEventListener('click',function(){
  box.classList.toggle('show');
  header.classList.toggle('m_header');

  main.classList.toggle('body_fix');
});