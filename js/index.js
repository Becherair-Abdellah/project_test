let MyBtn = document.querySelector("button");
window.onscroll = function (){
    if(window.scrollY <= 1000){
        MyBtn.style.display = "block";
    }
    else{
        MyBtn.style.display = "none";
    }
};