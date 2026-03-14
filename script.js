document.addEventListener("DOMContentLoaded",()=>{

const glow = document.getElementById("cursor-glow")

document.addEventListener("mousemove",(e)=>{
glow.style.left = e.clientX+"px"
glow.style.top = e.clientY+"px"
})


const musica = document.getElementById("musica")

const inicio = document.getElementById("inicio")
const galeria = document.getElementById("galeria")
const poemaSection = document.getElementById("poemaSection")
const final = document.getElementById("final")

const imgA = document.getElementById("imgA")
const imgB = document.getElementById("imgB")

imgA.addEventListener("mouseenter",()=>imgA.src="opcaoA.gif")
imgA.addEventListener("mouseleave",()=>imgA.src="opcaoA.png")

imgB.addEventListener("mouseenter",()=>imgB.src="opcaoB.gif")
imgB.addEventListener("mouseleave",()=>imgB.src="opcaoB.png")


document.getElementById("opcaoA").onclick=()=>escolha("A")
document.getElementById("opcaoB").onclick=()=>escolha("B")


function escolha(opcao){

inicio.style.display="none"

galeria.classList.remove("hidden")
poemaSection.classList.remove("hidden")
final.classList.remove("hidden")

galeria.scrollIntoView({behavior:"smooth"})

if(opcao==="A"){musica.src="musicaA.mp3"}
if(opcao==="B"){musica.src="musicaB.mp3"}

musica.play()

}



const poemas=[

`Que meu amor por você seja o único idioma que você entenda, que seja o altar mais alto para você ficar e que meus sentimentos sejam sua única demanda. Espero que meu calor transpareça segurança para você, pois é nas chamas que se cria a paixão.`,

`O mundo pode tentar convencer-te de que teus sonhos são grandes demais, ou que teus passos são lentos demais.`,

`Se um dia tua fé em si mesmo vacilar, empresto-te a minha.`,

`Se eu pudesse te dar um presente digno, não seria algo que coubesse nas mãos.`,

`sei que não sou o que deseja.`,

`você me mata, mas também me devolve à vida.`,

`não é que eu só vivo se eu tiver você é que eu vivo por você.`,

`Feliz aniversário, eu gosto muito de você.`,

`nossa fazer site é difícil ne`

]

let index=0
const poemaEl=document.getElementById("poema")

poemaEl.innerText=poemas[0]

document.getElementById("btnPoema").onclick=()=>{

index++
if(index>=poemas.length) index=0

poemaEl.innerText=poemas[index]

}



const polaroids=document.querySelectorAll(".polaroid")

let active=null
let offsetX=0
let offsetY=0

polaroids.forEach(card=>{

card.addEventListener("mousedown",(e)=>{

active=card

const rect=card.getBoundingClientRect()

offsetX=e.clientX-rect.left
offsetY=e.clientY-rect.top

})

})

document.addEventListener("mousemove",(e)=>{

if(!active)return

active.style.left=(e.clientX-offsetX)+"px"
active.style.top=(e.clientY-offsetY)+"px"

})

document.addEventListener("mouseup",()=>active=null)



document.getElementById("btnVideo1").onclick=()=>mostrarVideo("video1.mp4")
document.getElementById("btnVideo2").onclick=()=>mostrarVideo("video2.mp4")

function mostrarVideo(video){

musica.pause()

document.getElementById("botoesAmor").innerHTML=""

document.getElementById("videoContainer").innerHTML=
`<video controls autoplay>
<source src="${video}" type="video/mp4">
</video>`

}

})


