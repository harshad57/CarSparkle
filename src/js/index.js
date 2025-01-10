let icon = document.querySelector('#three');
let more = document.querySelector('#More');
let wrong = document.querySelector('#wrong');
let ghar = document.querySelector('#ghar');


if (window.innerWidth <= 700) {
    icon.addEventListener('click', () => {
        more.style.transform = 'translateX(0%)';
    });
    wrong.addEventListener('click', () => {
        more.style.transform = 'translateX(100%)';
    });
    ghar.addEventListener('click', () => {
        more.style.transform = 'translateX(100%)';
    });
}


const start = document.querySelector('#start');
const continueButton = document.querySelector('#continueButton');
const dummy = document.querySelector('#dummy');

continueButton.addEventListener('click', () => {
    start.style.display = 'block';
    dummy.style.display = 'none';
});


const about1 = document.querySelector('#about1');
const moreinfo1 = document.querySelector('#moreinfo1');
const about = document.querySelector('#about');
const moreinfo = document.querySelector('#moreinfo');
let gull = document.querySelector('#gull');
let gull2 = document.querySelector('#gull2');
let newdiv = document.querySelector('#new');

gull.addEventListener('click', () => {
    newdiv.classList.remove('fix');
    moreinfo1.style.display = 'none';
})
gull2.addEventListener('click', () => {
    newdiv.classList.remove('fix');
    about1.style.display = 'none';
})

wrong.addEventListener('click', () => {
    newdiv.classList.remove('fix');
    moreinfo1.style.display = 'none';
    about1.style.display = 'none';
})

about.addEventListener('click', () => {
    newdiv.classList.add('fix');
    about1.style.display = 'block';
    moreinfo1.style.display = 'none';
});
moreinfo.addEventListener('click', () => {
    newdiv.classList.add('fix');
    about1.style.display = 'none';
    moreinfo1.style.display = 'block';
});


const req = document.querySelector('.req');
const req1 = document.querySelector('.req1');
const srch = document.querySelector('.srch');
const srch1 = document.querySelector('.srch1');


srch.addEventListener('click', () => {
    if (document.querySelector('#ww1').value.length > 0) {
        req.style.display = 'block';
        req.innerHTML = 'Please Login/Sign-Up before Search';
    } else {
        req.style.display = 'block';
        req.innerHTML = 'Pls Enter something';
    }
    setTimeout(() => {
        req.style.display = 'none';
    }, 2000);
});


srch1.addEventListener('click', () => {
    if (document.querySelector('#ww').value.length > 0) {
        req1.style.display = 'block';
        req1.innerHTML = 'Please Login/Sign-Up before Search';
    } else {
        req1.style.display = 'block';
        req1.innerHTML = 'Please Enter something';
    }
    setTimeout(() => {
        req1.style.display = 'none';
    }, 2000);
});
