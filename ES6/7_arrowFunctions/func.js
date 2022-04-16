const Arrow = document.querySelector('#Arrow');
const noArrow = document.querySelector('#noArrow');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click', e =>{
    e.preventDefault;
    noArrow.style.display='block';
})

btn2.addEventListener('click', e =>{
    e.preventDefault;
    Arrow.style.display='block';
})