const body=document.body;
let button1=document.querySelector(".icon");
button1.addEventListener('click', function darkmode(){
    const wasDark=localStorage.getItem('darkmode')==='true';
    localStorage.setItem('darkmode', !wasDark);
    body.classList.toggle('dark-mode', !wasDark);
});
document.addEventListener('DOMContentLoaded', function onload(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode')==true);
    const wasDark = localStorage.getItem('darkmode') === 'true';
    body.classList.toggle('dark-mode', wasDark);
});

});

let button2=document.querySelector('.plus');
let fontSize = 16;
button2.addEventListener('click', function plus(){
  fontSize += 1;
  body.style.fontSize = fontSize + 'px';
});
let button3=document.querySelector('.minus');
button3.addEventListener('click', function minus(){
  fontSize-=1;
  body.style.fontSize = fontSize + 'px';
});
localStorage.setItem('fontSize', fontSize);
  
