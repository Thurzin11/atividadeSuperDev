const btn1 = document.querySelector('#exer1');
const btn2 = document.querySelector('#exer2');
const btn3 = document.querySelector('#exer3');
const s1 = document.querySelector('.first');
const s2 = document.querySelector('.second');
const s3 = document.querySelector('.third');


btn1.addEventListener('click', ()=>{
        s1.style.display = 'flex';
        s2.style.display = 'none';
        s3.style.display = 'none';
});

btn2.addEventListener('click', ()=>{
    s1.style.display = 'none';
    s2.style.display = 'flex';
    s3.style.display = 'none';
});

btn3.addEventListener('click', ()=>{
        s2.style.display = 'none';
        s1.style.display = 'none';
        s3.style.display = 'flex';
});