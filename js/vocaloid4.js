let down1 = document.getElementById('down1');
let down2 = document.getElementById('down2');
let down3 = document.getElementById('down3');
let down4 = document.getElementById('down4');

down1.onclick = function(){
    setTimeout(()=>{
        window.scrollBy(0,815);
    },300)
}
down2.onclick = function(){
    setTimeout(()=>{
        window.scrollBy(0,815);
    },300)
}
down3.onclick = function(){
    setTimeout(()=>{
        window.scrollBy(0,815);
    },300)
}
down4.onclick = function(){
    setTimeout(()=>{
        window.scrollBy(0,815);
    },300)
}

var bd = document.body;
var look1 = document.getElementById('look1');
var close1 = document.getElementById('gbi1');
var pzhu = document.getElementsByClassName('pzhuzhu') ;
var look2 = document.getElementById('look2');
var close2 = document.getElementById('gbi2');
var look3 = document.getElementById('look3');
var close3 = document.getElementById('gbi3');
var look4 = document.getElementById('look4');
var close4 = document.getElementById('gbi4');

look1.onclick = function looklook1(){
    pzhu[0].style.display = "block";
    close1.style.display = "block";
    bd.style.opacity = "0.8"
}

look2.onclick = function looklook2(){
    pzhu[1].style.display = "block";
    close2.style.display = "block";
    bd.style.opacity = "0.8"
}

look3.onclick = function looklook3(){
    pzhu[2].style.display = "block";
    close3.style.display = "block";
    bd.style.opacity = "0.8"
}

look4.onclick = function looklook4(){
    pzhu[3].style.display = "block";
    close4.style.display = "block";
    bd.style.opacity = "0.8"
}

function cl1(){
    pzhu[0].style.display = "none";
    close1.style.display = "none";
    bd.style.opacity = "1"
    setTimeout(()=>{
        window.scrollTo(0,815);
    },0)
}

function cl2(){
    pzhu[1].style.display = "none";
    close2.style.display = "none";
    bd.style.opacity = "1"
    setTimeout(()=>{
        window.scrollTo(0,1630);
    },0)
}

function cl3(){
    pzhu[2].style.display = "none";
    close3.style.display = "none";
    bd.style.opacity = "1"
    setTimeout(()=>{
        window.scrollTo(0,2445);
    },0)
}

function cl4(){
    pzhu[3].style.display = "none";
    close4.style.display = "none";
    bd.style.opacity = "1"
    setTimeout(()=>{
        window.scrollTo(0,3260);
    },0)
}



