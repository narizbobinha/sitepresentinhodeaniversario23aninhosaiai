function iniciarSite(){

document.getElementById("inicio").style.display="none";

document.getElementById("galeria").style.display="block";

document.getElementById("musica").play();

}

function mostrarVideo(video){

document.getElementById("botoesAmor").style.display="none";

document.getElementById("musica").pause();

document.getElementById("videoContainer").innerHTML=
`<video controls autoplay width="400">
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

window.addEventListener("scroll",()=>{

const final=document.getElementById("final");

if(!final)return;

const pos=final.getBoundingClientRect().top;

if(pos<window.innerHeight-100){

document.getElementById("garchomp").style.display="block";

}

});

const garchomp=document.getElementById("garchomp");

const popup=document.getElementById("garchompPopup");

const squeak=document.getElementById("squeak");

garchomp.addEventListener("click",()=>{

popup.style.display="flex";

squeak.play();

confetti({

particleCount:120,

spread:70,

origin:{y:0.6}

});

});

popup.addEventListener("click",()=>{

popup.style.display="none";

});
