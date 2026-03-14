const musica = document.getElementById("musica")

const glow = document.getElementById("cursor-glow")

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px"
glow.style.top = e.clientY + "px"

})

/* ---------------- POEMAS ---------------- */

const poemas=[

`Que meu amor por você seja o único idioma que você entenda, 
que seja o altar mais alto para você ficar e que meus sentimentos sejam sua única demanda. 
Espero que meu calor transpareça segurança para você, pois é nas chamas que se cria a paixão.`,

`O mundo pode tentar convencer-te de que teus sonhos são grandes demais,
ou que teus passos são lentos demais.
Mas eu conheço o teu espírito. E sei que dentro de ti existe um homem 
capaz de atravessar noites inteiras de dúvida apenas para alcançar a própria luz.
Mesmo que confuso ou inseguro, seus desejos nunca foram impuros.
Se um dia tua fé em si mesmo vacilar, empresto-te a minha.
Pois eu acredito em você com a mesma intensidade
com que o meu coração aprendeu a amar você.`,

`Se eu pudesse te dar um presente digno, não seria algo que coubesse nas mãos.
Eu te daria minhas madrugadas pensando em você, minhas preces silenciosas pelo teu caminho,
e essa estranha devoção que faz minha alma se inclinar sempre na tua direção.
Que a vida te leve longe, tão longe quanto teus sonhos permitirem.
E se algum dia, no meio do caminho, olhares para trás,
espero ainda estar ali. não como peso, mas como abrigo.`,

`sei que não sou o que deseja, não sou o remédio que cura tuas dores,
nem o escudo que te livra das fraquezas.
sou apenas a verdade nua, que não se molda, mesmo quando se oferece inteira.
e, ainda assim, teu olhar me fere e me salva, me arrasta para um abismo doce,
onde me rendo ao teu domínio silencioso.
O que vivi contigo não foram dias, foram eternidades comprimidas em instantes,
relâmpagos que incendiaram minha alma. 
sonhei, em segredo, com o direito de te chamar de meu namorado,
mesmo que fosse um sonho tolo, um delírio antiquado.
por mais que eu lute, não consigo expulsar-te de mim.`,

`você me mata, mas também me devolve à vida.
me destrói como um muro caindo, mas é a mão que recolhe
os cacos da minha essência.
e se te amar é condenação, aceito a sentença sem apelo.
pois entre o vazio da indiferença e a dor ardente da tua ausência,
prefiro arder, prefiro sangrar, prefiro perder-me em ti.`,

`e se eu tivesse que escolher, entre passar anos sem você, e ter a paz que prometem a mim
eu escolheria passar por todo o caos que a vida proporciona, apenas para viver contigo até o fim
sei que não posso te entregar o que quer, mas você pode ter a mim.
não é muito, não é valioso nem honroso, 
mas prometo que a ti, destruo toda minha carne e o mofo que em meu coração, envolto.
a dor que passei por te perder nem se compara a morte vir me deter de viver.
todo esse luto eterno, o desespero de não ter seu abraço, é a pior tortura que poderiam me submeter.
não é que eu só vivo se eu tiver você, é que eu vivo POR você.`,

`Feliz aniversário, eu gosto muito de você, de verdade acho que você foi a única pessoa
que eu mais me importei e desejei em minha vida. 
Eu sei que o sentimento não é recíproco e tá tudo bem, por mais que me magoe,
 me deixa feliz também a oportunidade de poder expressar o que sinto por você. 
Eu gosto de te fazer bem, de te fazer se sentir amado e reconhecido, se eu tivesse a oportunidade, faria diariamente, 
mesmo com meus defeitos. 
eu espero que seu dia seja bom, espero que você consiga aproveitar ele sem nenhum tipo de problema ou acasos ruins. 
você é incrível, esperto, genial e esforçado, 
te conhecer me fez passar por várias situações e sentimentos, todos que eu guardo igualmente como algo especial que me moldou. 
eu não esqueceria eles nem os trocaria por nada. 
por mais que passem anos, você sempre vai passar na minha cabeça, seja como uma memória persistente ou so um lapso rápido, 
acho que você vai sempre ter meu coração nas suas mãos. 
desejo todo sucesso para ti!! te amo narigudo`,

`nossa fazer site é difícil ne`,

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

/* ---------------- GIF HOVER ---------------- */

function gifA(){
document.getElementById("imgA").src="opcaoA.gif"
}

function pngA(){
document.getElementById("imgA").src="opcaoA.png"
}

function gifB(){
document.getElementById("imgB").src="opcaoB.gif"
}

function pngB(){
document.getElementById("imgB").src="opcaoB.png"
}

/* ---------------- ESCOLHA ---------------- */

function escolha(opcao){

document.getElementById("inicio").style.display="none"

document.getElementById("galeria").style.display="flex"
document.getElementById("poemaSection").style.display="flex"
document.getElementById("final").style.display="flex"

document.getElementById("galeria").scrollIntoView({behavior:"smooth"})

if(opcao==="A"){
musica.src="musicaA.mp3"
}

if(opcao==="B"){
musica.src="musicaB.mp3"
}

musica.play()

}

/* ---------------- VIDEO FINAL ---------------- */

function mostrarVideo(video){

musica.pause()

document.getElementById("botoesAmor").innerHTML=""

document.getElementById("videoContainer").innerHTML=
`<video controls autoplay>
<source src="${video}" type="video/mp4">
</video>`

}

/* -------- DRAG POLAROID CORRETO -------- */

const stack = document.getElementById("stack")
const polaroids = document.querySelectorAll(".polaroid")

polaroids.forEach(p => {
p.ondragstart = () => false
})

let active = null
let offsetX = 0
let offsetY = 0

polaroids.forEach(polaroid => {

polaroid.addEventListener("mousedown", (e) => {

active = polaroid

const rect = polaroid.getBoundingClientRect()

offsetX = e.clientX - rect.left
offsetY = e.clientY - rect.top

})

})

document.addEventListener("mousemove", (e) => {

if(!active) return

const stackRect = stack.getBoundingClientRect()

active.style.left = (e.clientX - stackRect.left - offsetX) + "px"
active.style.top = (e.clientY - stackRect.top - offsetY) + "px"

})

document.addEventListener("mouseup", () => {

active = null

})

const bubbleContainer = document.getElementById("bubbles")

function createBubble(){

const bubble = document.createElement("div")

bubble.classList.add("bubble")

const size = Math.random()*60+20

bubble.style.width = size+"px"
bubble.style.height = size+"px"

bubble.style.left = Math.random()*100+"vw"

bubble.style.animationDuration = (Math.random()*10+10)+"s"

bubbleContainer.appendChild(bubble)

setTimeout(()=>{
bubble.remove()
},20000)

}

setInterval(createBubble,800)

const garchomp = document.getElementById("garchomp");
const popup = document.getElementById("garchompPopup");
const squeak = document.getElementById("squeak");

garchomp.addEventListener("click", () => {

popup.style.display = "flex";

squeak.currentTime = 0;
squeak.play();

confetti({
particleCount:120,
spread:70,
origin:{y:0.6}
});

});

popup.addEventListener("click", ()=>{
popup.style.display="none";
});



