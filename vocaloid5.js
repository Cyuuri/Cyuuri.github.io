let cbox = document.querySelectorAll('.testbox');
let rbox = document.querySelectorAll('.ribox');
let pid = document.querySelectorAll('.haideng');
let index = 0;

cbox[0].addEventListener('mouseover',()=>{
    for(let i = 0; i < rbox.length; i++){
        rbox[i].onmouseover = function(){
            pid[i].style.display = 'block';
            rbox[i].onmouseout = function(){
                pid[i].style.display = 'none';
            }
        }
    }   
})

let view = document.querySelectorAll('#view');
let preview = document.getElementsByClassName('preview')
cbox[0].addEventListener('click',()=>{
    for(let i = 0; i < rbox.length; i++){
        rbox[i].onclick = function(){
            view[i].style.display = 'block';
            preview[0].style.display = 'block';
            view[i].onclick = function(){
                view[i].style.display = 'none';
                preview[0].style.display = 'none';
            }
        }
    }   
})
console.log(preview)

