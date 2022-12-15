
const logo = document.querySelector('#logo');
const napis = document.querySelector('#napis');
const napisdwa = document.querySelector('#napisdwa');
const przycisk = document.querySelector('#przycisk');
const sekcja2 = document.querySelectorAll('.sekcja2');
const sekcja3 = document.querySelectorAll('.sekcja3');
const sekcja4 = document.querySelectorAll('.sekcja4');

const dark = document.querySelector('#dark');

const body = document.querySelector('.body');

przycisk.style.opacity = '0';

logo.style.opacity = '0';
logo.style.transform = 'translatey(-200%)';

napis.style.opacity = '0';
napis.style.transform = 'translatey(-200%)';

napisdwa.style.opacity = '0';
napisdwa.style.transform = 'translatey(-200%)';


kot = function(){
    logo.transition = 'all 2.0s linear';
    logo.style.transform = 'scale(1.0)';
    
}

cwel = function(){
    logo.style.opacity = '1';
    logo.style.transition = 'all 1.2s linear';
    logo.style.transform = 'translatey(0%)';
}

kurwa = function(){
    napis.style.opacity = '1';
    napis.style.transition = 'all 0.8s linear';
    napis.style.transform = 'translatey(0%)';
}

kurwina = function(){
    napisdwa.style.opacity = '1';
    napisdwa.style.transition = 'all 0.4s linear';
    napisdwa.style.transform = 'translatey(0%)';
}

przyciskcwel = function(){
    przycisk.style.opacity = '1';
    przycisk.style.transition = 'all 0.7s linear';
    
}

setTimeout(cwel, 1200);
setTimeout(kurwa, 800);
setTimeout(kurwina, 400);
setTimeout(przyciskcwel, 700);


