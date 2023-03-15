/* this is information javascript */
let chat = document.querySelector('#chat');
let li =document.querySelectorAll("#li");
let liarray = Array.from(li);
let imgpersone = document.getElementsByClassName('img-person');
let spanuser = document.getElementById('this-user');
// this is classes
let li1 = {
    theimg: document.getElementById('thisImg1'),
    theName: document.getElementById('thisName1')
}
let li2 = {
    theimg: document.getElementById('thisImg2'),
    theName: document.getElementById('thisName2')
}
let li3 = {
    theimg: document.getElementById('thisImg3'),
    theName: document.getElementById('thisName3')
}
let li4 = {
    theimg: document.getElementById('thisImg4'),
    theName: document.getElementById('thisName4')
}
let li5 = {
    theimg: document.getElementById('thisImg5'),
    theName: document.getElementById('thisName5')
}
let li6 = {
    theimg: document.getElementById('thisImg6'),
    theName: document.getElementById('thisName6')
}
let li7 = {
    theimg: document.getElementById('thisImg7'),
    theName: document.getElementById('thisName7')
}
// li click
let img = document.createElement('img');
let thename = document.createTextNode('bader');
liarray[0].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-03.png');
    imgpersone[0].appendChild(img);
    let thename1 = document.createTextNode('bader');
    spanuser.appendChild(thename1);

};
liarray[1].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-02.png');
    imgpersone[0].appendChild(img);
    let thename2 = document.createTextNode('Hodifa');
    spanuser.appendChild(thename2);
};
liarray[2].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-01.png');
    imgpersone[0].appendChild(img);
    let thename3 = document.createTextNode('Bouzid');
    spanuser.appendChild(thename3);
};
liarray[3].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-04.png');
    imgpersone[0].appendChild(img);
    let thename4 = document.createTextNode('Jalal');
    spanuser.appendChild(thename4);
};
liarray[4].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-05.png');
    imgpersone[0].appendChild(img);
    let thename5 = document.createTextNode('Sosso');
    spanuser.appendChild(thename5);
};
liarray[5].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-06.png');
    imgpersone[0].appendChild(img);
    let thename6 = document.createTextNode('raid ');
    spanuser.appendChild(thename6);
};
liarray[6].onclick = function(){
    chat.classList.add('visible');
    img.setAttribute('src','img/avatar-04.png');
    imgpersone[0].appendChild(img);
    let thename7 = document.createTextNode('Ibrahim bou');
    spanuser.appendChild(thename7);
};


