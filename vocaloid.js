let oleft = document.querySelector(".lee");
let oright = document.querySelector(".rii");
let oImgList = document.getElementById("oimg");

let clonefirstImg = oImgList.firstElementChild.cloneNode();
oImgList.appendChild(clonefirstImg);

let index = 0;

let lock = true;

function handleRightBtn() {
    if (!lock) return;
    index++;
    oImgList.style.left = index * -640 + "px";
    oImgList.style.transition = "0.5s ease";
    if (index === 4){
        index = 0;
        setTimeout(()=>{
            
            oImgList.style.left = 0;
            oImgList.style.transition = "none";
        },500)
    }
    setCircles();
    lock = false;
    setTimeout(()=>{
        lock = true;
    },500)
}

oright.addEventListener("click",handleRightBtn);

oleft.addEventListener("click",()=>{
    if (!lock) return;
    if(index === 0){
        oImgList.style.left = 4 * -640 + "px";
        oImgList.style.transition = "none";
        index = 3;
        setTimeout(()=>{
            
            oImgList.style.left = index * -640 + "px";
            oImgList.style.transition = "0.5s ease";
        },0);
    }else{
        index --;
        oImgList.style.left = index * -640 + "px";
    }
    setCircles();
    lock = false;
    setTimeout(()=>{
        lock = true;
    },500)
});

const circles = document.querySelectorAll(".cir");

function setCircles(){
    for(let i = 0; i < circles.length; i++){
        if(i === index){
            circles[i].classList.add("active");
        }else{
            circles[i].classList.remove("active");
        }
    }
}

const oCircle = document.querySelector(".cir-list");
oCircle.addEventListener('click',(e)=>{
    if(e.target.nodeName.toLowerCase() === "p"){
        const n = Number(e.target.getAttribute("data-n"));
        index = n;
        setCircles();
        oImgList.style.left = index * -640 + "px";
    }
});

let auto = setInterval(handleRightBtn,5000);
const olun = document.querySelector(".lun");

olun.addEventListener("mouseenter", ()=>{
    clearInterval(auto);
});

olun.addEventListener("mouseleave", ()=>{
    clearInterval(auto);
    auto = setInterval(handleRightBtn,5000);
});

const tit = document.querySelectorAll(".title");
const title = document.querySelector(".la0");
let box = document.querySelector(".llan");

function setTitle(){
    for(let i = 0; i < tit.length; i++){
        if(i === index){
            tit[i].classList.add("tc");
        }else{
            tit[i].classList.remove("tc");
        }
    }
}

title.addEventListener('click',(e)=>{
    if(e.target.nodeName.toLowerCase() === "p"){
        const t = Number(e.target.getAttribute("data-t"));
        index = t;
        setTitle();
        box.style.left = index * -100 + "%";
    }
});

var vi = document.getElementById("vi");
var clo = document.getElementsByClassName("close");
var bd = document.body;

function video(){
    var video = document.getElementsByTagName("video")[0];
    vi.style.display = "block";
    clo[0].style.display = "block";
    bd.style.opacity = "0.8"
    video.play();
}

function cl(){
    var video = document.getElementsByTagName("video")[0];
    vi.style.display = "none";
    clo[0].style.display = "none";
    bd.style.opacity = "1"
    video.pause();
    
}

