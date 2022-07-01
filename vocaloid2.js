const ot = document.querySelectorAll(".ot");
const otop = document.querySelector(".otop");
let obox = document.getElementById("oct");

function setotop(){
    for(let i = 0; i < ot.length; i++){
        if(i === index){
            ot[i].classList.add("odao");
        }else{
            ot[i].classList.remove("odao");
        }
    }
}

otop.addEventListener('click',(e)=>{
    if(e.target.nodeName.toLowerCase() === "p"){
        const o = Number(e.target.getAttribute("data-o"));
        index = o;
        setotop();
        obox.style.left = index * -100 + "%";
    }
});

let morebtn = document.querySelector(".obottom");
let boss = document.querySelector(".b3");
let oco = document.querySelectorAll(".ocentero")


morebtn.addEventListener('click',()=>{
    for(let i = 0; i < oco.length; i++){
        boss.style.height = 3200 + "px";
        oco[i].style.visibility = "visible"
    }
    if(i = oco.length){
        morebtn.innerHTML = "加载完毕"
        morebtn.style.fontSize = 22 + "px";
    }

});