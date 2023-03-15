// start code Js
// Get information HTML code
let StartGame = document.querySelector('#start');
let InputGamer = document.querySelector('.input_name');
let nbr = 0;
StartGame.onclick = function(){
    InputGamer.classList.add('visible');
    StartGame.classList.remove('v');
}
let TheName = document.getElementById('this_name');
let UserName = document.getElementById('UserName');
let Play = document.getElementById('send');
let overlay = document.querySelector('#overlay');
let thisName = document.querySelector("#this_name");
let thisTime = document.querySelector('#this_time');
let wrong = document.querySelector("#wrong");
let MyBlocks = document.querySelectorAll('.box_Game .block');
let blocks = Array.from(MyBlocks); // switch MyBlocks to array by this CODE 
let MyBlocksArrKyes = Array.from(MyBlocks.keys()); // this is keys() function ex: [0,1,2,3,4,5,6,7,8,9,10] the numbers it is a index of arrays
Shfull(MyBlocksArrKyes);
MyBlocks.forEach((block,idx)=>{ // set orderStyle to blocks by  loop 'forEach'
    block.style.order = MyBlocksArrKyes[idx];
    // add "event at the block " and function flipCard
    block.addEventListener("click", function(){
        flipCard(block);
        document.getElementById('click').play();
    } );
});
let GameOver = document.querySelector('.GameOver')
let gameovertext = document.querySelector('#Game_over');
let gameoverbutton = document.querySelector('#try');
function IsValid(){ // verivication if the name is not empty or not valid by function "IsValid"
    Play.onclick = function(){
        overlay.classList.add('no_visible');
        InputGamer.classList.remove('visible');
        StartGame.classList.remove('visible');
        UserName.innerHTML = thisName.value;
        if(thisName.value.length >10){
            UserName.innerHTML = "Unkowne";
        }
  let MyInterval = setInterval(function(){
            let time = --thisTime.innerHTML;
            if(time == 0){
                GameOver.classList.add('visible');
                overlay.classList.remove('no_visible');
                clearInterval(MyInterval);
                document.getElementById('gameOverF').play();
            }  
        },1000); 
        MyBlocks.forEach(function(blk){
            blk.classList.add('flipped');
            setTimeout(function(){
                blk.classList.remove('flipped');
            },3000)
        })
}}; 
IsValid();
// function to verevication
function Shfull(array){ // Shfull of blocks HTML
    let current = array.length-1,
    temp,
    random;
    // start a while 
    while(current >=0){
        // random function 
        random = Math.floor(Math.random()* current);
        temp = array[current];
        array[current] = array[random];
        array[random] = temp;
        current--;
    };
    return array;
};
// created flipcard this called by the function "forEach" ====> addEventListener

function flipCard(select){
    // add the property On CSS selector flipped to use the flip block
    select.classList.add('flipped');
    // number the block it contains className "flipped"
    let AllCardsFlipped = blocks.filter(blockflipped => blockflipped.classList.contains('flipped'));
    
    if(AllCardsFlipped.length == 2){
        StopClicking();
        MatchedBlock(AllCardsFlipped[0],AllCardsFlipped[1]);
        
    }
}
let BoxGame = document.querySelector('.box_Game'); // this is a variable boxGame (no click)
// created function stop clicking
function StopClicking(){
    BoxGame.classList.add('no_click');
    setTimeout(() => RusumeClicking(),2700);
}
// created function Rusume clicking
function RusumeClicking(){
    BoxGame.classList.remove('no_click');
}
// creat  function Matched block1 and block2
function MatchedBlock(block1,block2){
    
    if(block1.id !== block2.id){
        document.getElementById('error').play();
        setTimeout(function(){
            block1.classList.remove('flipped');
            block2.classList.remove('flipped');
        },1000);
    }else{
        document.getElementById('succees_first').play();
        block1.classList.remove('flipped');
        block2.classList.remove('flipped');
        // "Has matched it is a selecteor it means to blokc1 and block2 it is equal"
        block1.classList.add('its-matched');
        block2.classList.add('its-matched');
        block1.classList.add('no_click');
        block2.classList.add('no_click');
        nbr++;
        if(nbr == 10){
            overlay.classList.remove('no_visible');
            GameOver.classList.add('succeed');
            GameOver.classList.add('visible');
            gameovertext.innerHTML = "Succees";
            gameoverbutton.style = `color:white;
            background-color:rgb(6 185 131);
            font-weight:bold;`;
            gameoverbutton.innerHTML = 'Ok';
            document.getElementById('succees_final').play();
        };
    };
};
// part special the introduction the game
let p1 = document.querySelector('.p1');
let p2 =document.querySelector('.p2');
let skip = document.querySelector('#skip');
let d = 2000;
setTimeout(function(){
    p1.classList.add('v');
    skip.classList.add('v');
},d);
skip.onclick = function(){
    p1.innerHTML = '';
    let span = document.createElement('span');
    span.classList.add("span1");
    let span2 = document.createElement('span');
    p1.appendChild(span).innerHTML = "About Developer";
    p1.appendChild(span2).innerHTML = "Abdellah Becherair Student majoring in and computer science,computer science branch Programming lesson by self-learning,specializing in programming web";
    skip.classList.add('switch2');
    // skip.classList.add('switch');
    skip.onclick = function(){
        p1.classList.remove('v');
        skip.classList.remove('v');
        StartGame.classList.add('v');
    }
};
// console.log(nbr);
gameoverbutton.onclick = function(){
    document.onload;
}