// get element from HTML
// -------- nav bar ---------- //
let Mode = document.querySelectorAll('.mode ion-icon');
let dark  = document.getElementById('dark');
let light  = document.getElementById('light');
let body = document.querySelector('body');
let nav = document.querySelector('.navbar');
let bars = document.querySelector('.bars');
let footer = document.querySelector('.footer');
// Object if dark mode or light mode
let AppStatus = {
    status : 'light',
}
if(JSON.parse(localStorage.getItem('Status')) ===null){
    localStorage.setItem('Status',JSON.stringify(AppStatus));
}
// clear class from 'active' all icon
dark.onclick = function(){
    darkmode(Mode,dark);
    // save dark mode and light mode in local storage
    AppStatus.status = 'dark';
    localStorage.setItem('Status',JSON.stringify(AppStatus));
}
light.onclick = function(){
    lightmode(Mode,light);
    AppStatus.status = 'light';
    localStorage.setItem('Status',JSON.stringify(AppStatus));
}
// function dark mode
function darkmode(DivMode,itemclick){
    DivMode.forEach((e)=>{
        e.classList.remove('active');
    });
    itemclick.classList.toggle('active');
    body.classList.add('darkmode');


}
// function light  modedarkmode
function lightmode(DivMode,itemclick){
    DivMode.forEach((e)=>{
        e.classList.remove('active');
    });
    itemclick.classList.toggle('active');
    body.classList.remove('darkmode');
}
// if that website in dark mode when refresh it does not change to light
function darkmodeFromLocalStorage(){
    let data = JSON.parse(localStorage.getItem('Status'));
    if(data.status === 'dark'){
        darkmode(Mode,dark);
        console.log('hello');
    }

} ;
addEventListener('DOMContentLoaded',darkmodeFromLocalStorage); // when reload page apply this function
// get icon close menu bar
let CloseMenuBar = document.querySelector('.close');
// get Aside from HTML 
let Aside = document.querySelector('aside');
// if user click at MenuBar Aside it tarnslate 69vw " left: -69vw" because the aside has width equal 69vw
CloseMenuBar.addEventListener('click',()=>{ // ()=> same function() anonymose
    Aside.classList.remove('hidden'); // when add class 'hidden ' on aside Element it applay 'left: -69vw;'
});
// get Icon menu Bar
let MenuBar = document.querySelector('.bars'); // in html element div it has class bars and we call it
// if user click at MenuBar Aside it tarnslate 69vw " left: 69vw" because the aside has width equal 69vw
MenuBar.addEventListener('click',()=>{ // ()=> same function() anonymose
    Aside.classList.add('hidden'); // when add class 'hidden ' on aside Element it applay 'left: -69vw;'
});

// percent  number one
let percentNumber = document.querySelector('#percentOne');
let percentNumber2 = document.querySelector('#percentTwo');
let percentNumber3 = document.querySelector('#percentThree');
// call function 'FillNumberPercent'
FillNumberPercent(percentNumber,percentNumber2,percentNumber3);
// function fill circle and percent number
function FillNumberPercent(n1,n2,n3){
    // percent number One
n1.innerHTML = 0;
setTimeout(function(){
    let counter = setInterval(function(){
        n1.innerHTML++;
        if(n1.innerHTML == 82){
            clearInterval(counter);
        }
    },30);
},600)

// percent number two
n2.innerHTML = 0;
setTimeout(function(){
    let counter = setInterval(function(){
        n2.innerHTML++;
        if(n2.innerHTML == 62){
            clearInterval(counter);
        }
    },30);
},600)

// percent number Three
n3.innerHTML = 0;
setTimeout(function(){
    let counter = setInterval(function(){
        n3.innerHTML++;
        if(n3.innerHTML == 72){
            clearInterval(counter);
        }
    },30);
},600)

}
    scrollone();
    scrollTwo();
    scrollThree();

function scrollone(){
        document.querySelector('.sale').classList.add('scale');
        document.querySelector('.expen').classList.add('scaleAfterMedia');
        document.querySelector('.incom').classList.add('scaleAfterMedia');
}
function scrollTwo(){
        document.querySelector('.expen').classList.add('scale');
}
function scrollThree(){
        document.querySelector('.incom').classList.add('scale');
}
// get content  status and change color
let Mystatus = document.querySelectorAll('.status');
console.log(Mystatus);
Mystatus.forEach((s)=>{
    if(s.innerHTML === 'Declined'){
        s.classList.add('red');
    }
    if(s.innerHTML === 'Pending'){
        s.classList.add('yellow');
    }
    if(s.innerHTML === 'Delivered'){
        s.classList.add('blue');
    }
});
// add class animate to set animation on divs sale and incom and expen
document.querySelector('.sales .sale').classList.add('animate');
document.querySelector('.sales .incom').classList.add('animate');
document.querySelector('.sales .expen').classList.add('animate');