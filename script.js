const musica = document.getElementById("musica")

const poemas=[

`Que meu amor por você seja o único idioma que você entenda, que seja o altar mais alto para você ficar e que meus sentimentos sejam sua única demanda.`,

`O mundo pode tentar convencer-te de que teus sonhos são grandes demais.`,

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

function proximoPoema(){

index++

if(index>=poemas.length){
index=0
}

poemaEl.innerText=poemas[index]

}



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



function mostrarVideo(video){

musica.pause()

document.getElementById("botoesAmor").innerHTML=""

document.getElementById("videoContainer").innerHTML=
`<video controls autoplay>
<source src="${video}" type="video/mp4">
</video>`

}



