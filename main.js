let box = document.querySelector('.box');
let icon = document.querySelector('.icon');
let header = document.querySelector('.header');
// let main = document.querySelector('.main');
icon.addEventListener('click',function(){
  box.classList.toggle('show');
  header.classList.toggle('m_header');

  document.body.classList.toggle('body_fix');
});