const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const wrapper2 = document.querySelector('.wrapper2');
const home1 =document.querySelector('#home1');
const home2 =document.querySelector('#home2');
const home3 =document.querySelector('#home3');
const home4 =document.querySelector('#home4');

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
    document.body.scrollTop = 6000
    document.documentElement.scrollTop = 6000
    wrapper.style.transition = "all 0s ease"
    wrapper2.style.display="none"
});


iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    wrapper2.style.display="block"
});




let myButton = document.querySelector("#myBtn")



window.onscroll = function(){scrollTop()};


function scrollTop(){
    if(document.body.scrollTop >100 || document.documentElement.scrollTop > 100){
        myButton.style.display = "block"
    }
    else{
        myButton.style.display = "none"
    }
}



let quyow = document.querySelector(".radiostyle1")
let oy = document.querySelector(".radiostyle2")

quyow.addEventListener("click",function(){
    document.querySelector(".loader").style.backgroundColor="rgba(255, 255, 255, 0)"
    document.querySelector(".snow").style.display = "none"
    document.querySelector(".tog").classList.toggle("mountain")
})
oy.addEventListener("click",function(){
    document.querySelector(".loader").style.backgroundColor="#00000056"
    document.querySelector(".snow").style.display = "flex"
    document.querySelector(".mountain").classList.toggle("tog")
})

let tepa = document.querySelector("#tepaga")



window.onscroll = function(){scrollTop()};


function scrollTop(){
    if(document.body.scrollTop >400 || document.documentElement.scrollTop > 400){
        tepa.style.display = "block"
    }
    else{
        tepa.style.display = "none"
    }
}

function goUP(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}




const btns  = document.querySelectorAll(".nav-btn");
const slides  = document.querySelectorAll(".video-slide");
const contents  = document.querySelectorAll(".c-ontent");


var sliderNav = function(manual){
btns.forEach((btn) => {
    btn.classList.remove("active");
});

slides.forEach((slide)=>{
    slide.classList.remove("active");
});

contents.forEach((content)=>{
    content.classList.remove("active");
});

btns[manual].classList.add("active");
slides[manual].classList.add("active");
contents[manual].classList.add("active");

}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});



home1.addEventListener('click', ()=>{

    document.body.scrollTop = 800
    document.documentElement.scrollTop = 800
});
home2.addEventListener('click', ()=>{

    document.body.scrollTop = 1800
    document.documentElement.scrollTop = 1800
});
home3.addEventListener('click', ()=>{

    document.body.scrollTop = 2900
    document.documentElement.scrollTop = 2900
});
home4.addEventListener('click', ()=>{

    document.body.scrollTop = 4150
    document.documentElement.scrollTop = 4150
});





function showTime(){
    let now = new Date();
    let hour = now.getHours()-3;
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let day = now.getUTCDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();
    document.querySelector('.soat').innerHTML = hour + ":" + minute + ":" + second;
    document.querySelector('.data').innerHTML = day + '.' + month + "." + year;
    setTimeout(showTime, 1000)
} 
showTime();
function howTime(){
    let nowol = new Date();
    let hourol = nowol.getHours()-5;
    let minuteol = nowol.getMinutes();
    let secondol = nowol.getSeconds();
    let dayol = nowol.getUTCDate();
    let monthol = nowol.getMonth()+1;
    let yearol = nowol.getFullYear();
    document.querySelector('.cloc').innerHTML = hourol + ":" + minuteol + ":" + secondol;
    document.querySelector('.sloc').innerHTML = dayol + '.' + monthol + "." + yearol;
    setTimeout(howTime, 1000)
} 
howTime();

function owTime(){
    let nowol = new Date();
    let hourol = nowol.getHours()-2;
    let minuteol = nowol.getMinutes()-1;
    let secondol = nowol.getSeconds();
    let dayol = nowol.getUTCDate();
    let monthol = nowol.getMonth()+1;
    let yearol = nowol.getFullYear();
    document.querySelector('.wloc').innerHTML = hourol + ":" + minuteol + ":" + secondol;
    document.querySelector('.qloc').innerHTML = dayol + '.' + monthol + "." + yearol;
    setTimeout(owTime, 1000)
} 
owTime();

function wTime(){
    let nowol = new Date();
    let hourol = nowol.getHours();
    let minuteol = nowol.getMinutes()+44;
    let secondol = nowol.getSeconds();
    let dayol = nowol.getUTCDate();
    let monthol = nowol.getMonth()+1;
    let yearol = nowol.getFullYear();
    document.querySelector('.eloc').innerHTML = hourol + ":" + minuteol + ":" + secondol;
    document.querySelector('.zloc').innerHTML = dayol + '.' + monthol + "." + yearol;
    setTimeout(wTime, 1000)
} 
wTime();
function Time(){
    let nowol = new Date();
    let hourol = nowol.getHours()-2;
    let minuteol = nowol.getMinutes()-1;
    let secondol = nowol.getSeconds();
    let dayol = nowol.getUTCDate();
    let monthol = nowol.getMonth()+1;
    let yearol = nowol.getFullYear();
    document.querySelector('.loc').innerHTML = hourol + ":" + minuteol + ":" + secondol;
    document.querySelector('.ioc').innerHTML = dayol + '.' + monthol + "." + yearol;
    setTimeout(Time, 1000)
} 
Time();
function ime(){
    let nowol = new Date();
    let hourol = nowol.getHours()+7;
    let minuteol = nowol.getMinutes()-1;
    let secondol = nowol.getSeconds();
    let dayol = nowol.getUTCDate();
    let monthol = nowol.getMonth()+1;
    let yearol = nowol.getFullYear();
    document.querySelector('.oc').innerHTML = hourol + ":" + minuteol + ":" + secondol;
    document.querySelector('.ic').innerHTML = dayol + '.' + monthol + "." + yearol;
    setTimeout(ime, 1000)
} 
ime();