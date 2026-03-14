function escolherOpcao(tipo){

document.getElementById("inicio").style.display="none";
document.getElementById("galeria").style.display="block";

if(tipo==="A"){
document.getElementById("musicaA").play();
}else{
document.getElementById("musicaB").play();
}

}

function mostrarVideo(video){

document.getElementById("botoesAmor").style.display="none";

document.getElementById("videoContainer").innerHTML=
`<video controls autoplay width="420">
<source src="${video}" type="video/mp4">
</video>`;

}

const polaroids=document.querySelectorAll(".polaroid");

polaroids.forEach(p=>{

let offsetX=0;
let offsetY=0;

p.addEventListener("mousedown",e=>{

offsetX=e.clientX-p.offsetLeft;
offsetY=e.clientY-p.offsetTop;

function mover(ev){

p.style.left=(ev.clientX-offsetX)+"px";
p.style.top=(ev.clientY-offsetY)+"px";

}

document.addEventListener("mousemove",mover);

document.addEventListener("mouseup",()=>{

document.removeEventListener("mousemove",mover);

},{once:true});

});

});

