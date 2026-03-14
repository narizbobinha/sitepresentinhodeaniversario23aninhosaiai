const musica = document.getElementById("musica")

/* ---------------- POEMAS ---------------- */

const poemas=[

`Que meu amor por você seja o único idioma que você entenda, que seja o altar mais alto para você ficar e que meus sentimentos sejam sua única demanda. Espero que meu calor transpareça segurança para você, pois é nas chamas que se cria a paixão.`,

`O mundo pode tentar convencer-te de que teus sonhos são grandes demais, ou que teus passos são lentos demais. Pode dizer que a estrada é longa, que o tempo não basta, que a esperança é ingênua. Mas o mundo raramente entende o coração de quem insiste.`,

`Se um dia tua fé em si mesmo vacilar, empresto-te a minha. Porque às vezes enxergamos nos outros uma luz que eles mesmos esqueceram que possuem.`,

`Se eu pudesse te dar um presente digno, não seria algo que coubesse nas mãos. Seria um instante eterno, um fragmento de paz, um abrigo onde você pudesse sempre voltar.`,

`sei que não sou o que deseja.`,

`você me mata, mas também me devolve à vida.`,

`não é que eu só vivo se eu tiver você.  
é que eu vivo por você.`,

`Feliz aniversário.  
eu gosto muito de você.`,

`nossa fazer site é difícil né`

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

/* -------- DRAG POLAROID -------- */

const polaroids = document.querySelectorAll(".polaroid")

polaroids.forEach(polaroid => {

let offsetX
let offsetY
let dragging = false

polaroid.addEventListener("mousedown", (e) => {

dragging = true

offsetX = e.offsetX
offsetY = e.offsetY

polaroid.style.position = "absolute"
polaroid.style.zIndex = 1000

})

document.addEventListener("mousemove", (e) => {

if(!dragging) return

polaroid.style.left = (e.pageX - offsetX) + "px"
polaroid.style.top = (e.pageY - offsetY) + "px"

})

document.addEventListener("mouseup", () => {

dragging = false

})

})





