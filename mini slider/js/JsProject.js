let SliderImg = Array.from(document.querySelectorAll('.content_img img'));
let Next = document.getElementById('right');
let Previous = document.getElementById('left');
let bullets = Array.from(document.querySelectorAll('.bullets button'));
let currentSlider = 1;
Next.onclick = next;
Previous.onclick = previous;
function next(){
    if(Next.classList.contains('disabled')){
        return false;
    }else{  
    currentSlider++;
    changeImg();
}
}
function previous(){
    if(Previous.classList.contains('disabled')){
        return false;
    }else{  
    currentSlider--;
    changeImg();
}
}
function changeImg(){
    rempveAll();
    SliderImg[currentSlider-1].classList.add('active');
    bullets[currentSlider-1].classList.add('active');
    if(currentSlider ===4){
        Next.classList.add('disabled');
    } else{
        Next.classList.remove('disabled');
    }
    if(currentSlider ===1){
        Previous.classList.add('disabled');
    } else{
        Previous.classList.remove('disabled');
    }

}
changeImg();
function rempveAll(){
    SliderImg.forEach(function(img){
        img.classList.remove('active');
    });
    bullets.forEach(function(b){
        b.classList.remove('active');
    });
}

