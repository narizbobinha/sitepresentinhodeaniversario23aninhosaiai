const glow = document.getElementById("cursor-glow")

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})

const musica = document.getElementById("musica")

function escolha(opcao){

const inicio = document.getElementById("inicio")

inicio.style.opacity="0"

setTimeout(()=>{

inicio.style.display="none"

document.getElementById("galeria").style.display="flex"
document.getElementById("poemaSection").style.display="flex"
document.getElementById("final").style.display="flex"

document.getElementById("galeria").scrollIntoView({behavior:"smooth"})

},800)

if(opcao==="A"){musica.src="musicaA.mp3"}
if(opcao==="B"){musica.src="musicaB.mp3"}

musica.play()

}



const poemas = [

`Que meu amor por você seja o único idioma que você entenda, que seja o altar mais alto para você ficar e que meus sentimentos sejam sua única demanda. Espero que meu calor transpareça segurança para você, pois é nas chamas que se cria a paixão.`,

`O mundo pode tentar convencer-te de que teus sonhos são grandes demais, ou que teus passos são lentos demais. Mas eu conheço o teu espírito. E sei que dentro de ti existe um homem capaz de atravessar noites inteiras de dúvida apenas para alcançar a própria luz. Mesmo que confuso ou inseguro, seus desejos nunca foram impuros.`,

`Se um dia tua fé em si mesmo vacilar, empresto-te a minha. Pois eu acredito em você com a mesma intensidade com que o meu coração aprendeu a amar você.`,

`Se eu pudesse te dar um presente digno, não seria algo que coubesse nas mãos. Eu te daria minhas madrugadas pensando em você, minhas preces silenciosas pelo teu caminho, e essa estranha devoção que faz minha alma se inclinar sempre na tua direção.`,

`sei que não sou o que deseja, não sou o remédio que cura tuas dores, nem o escudo que te livra das fraquezas. sou apenas a verdade nua, que não se molda, mesmo quando se oferece inteira. e, ainda assim, teu olhar me fere e me salva.`,

`você me mata, mas também me devolve à vida.`,

`e se eu tivesse que escolher entre passar anos sem você ou viver o caos ao teu lado, eu escolheria você.`,

`Feliz aniversário, eu gosto muito de você.`,

`nossa fazer site é difícil ne`

]

let index=0

const poemaEl=document.getElementById("poema")

poemaEl.innerText=poemas[0]

function proximoPoema(){

index++

if(index>=poemas.length){
index=0
}

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

document.addEventListener("mouseup",()=>{

active=null

})



function mostrarVideo(video){

musica.pause()

document.getElementById("botoesAmor").innerHTML=""

document.getElementById("videoContainer").innerHTML=

`<video controls autoplay>
<source src="${video}" type="video/mp4">
</video>`

}

