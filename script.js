
//HEADER
const header = document.createElement("div")

header.style.height = "200px"
header.style.width = "100%"
header.style.backgroundColor = "rgb(0, 0, 0, 0.7)"
header.style.color = "white"
header.style.borderTop = "11px double #999"
header.style.borderBottom = "11px double #999"
header.style.display = "flex"
header.style.justifyContent = "center"
header.style.alignItems = "center"
header.style.flexDirection = "column"


document.body.appendChild(header)
//FIM DO HEADER





//LOGO DO HEADER
const logo = document.createElement("img")
logo.src = "imgs/logo.png"

logo.style.height = "100px"
logo.style.width = "100px"

header.appendChild(logo)
//FIM DO LOGO DO HEADER






//TITULO DO HEADER

const titulo = document.createElement("h1")

titulo.textContent = "Calculadora IMC"

header.appendChild(titulo)
//FIM DO TITULO DO HEADER






//BOX DO BODY

const box1 = document.createElement("div")

box1.style.height = "550px"
box1.style.width = "100%"
box1.style.backgroundColor = "gray"
box1.style.borderBottom = "11px double #999"
box1.style.display = "flex"
box1.style.justifyContent = "center"
box1.style.alignItems = "center"

document.body.appendChild(box1)

const box2 = document.createElement("div")

box2.style.height = "80%"
box2.style.width = "700px"
box2.style.backgroundColor = "#b5b5b5"
box2.style.border = "11px dashed gray"
box2.style.display = "flex"
box2.style.justifyContent = "start"
box2.style.alignItems = "center"
box2.style.flexDirection = "column"
box2.style.padding = "20px"


box1.appendChild(box2)
//FIM DA BOX DO BODY








//NOME, PESO, ALTURA E RESULTADO

const stringnome = document.createElement("h3")
stringnome.textContent = "Nome:"
box2.appendChild(stringnome)

const nome = document.createElement("input")
nome.id = "nome"
nome.type = "text"
nome.placeholder = "Digite seu nome"
nome.style.textAlign = "center"
nome.style.height = "30px"
nome.style.width = "500px"
box2.appendChild(nome)



const stringpeso = document.createElement("h3")
stringpeso.textContent = "Peso:"
box2.appendChild(stringpeso)

const peso = document.createElement("input")
peso.id = "peso"
peso.type = "number"
peso.style.textAlign = "center"
peso.style.height = "30px"
peso.style.width = "100px"
box2.appendChild(peso)



const stringaltura = document.createElement("h3")
stringaltura.textContent = "Altura:"
box2.appendChild(stringaltura)

const altura = document.createElement("input")
altura.id = "altura"
altura.type = "number"
altura.step = "1.01"
altura.style.textAlign = "center"
altura.style.height = "30px"
altura.style.width = "100px"

box2.appendChild(altura)




//FIM DO NOME, PESO, ALTURA E RESULTADO


//BOTAO CALCULAR
const botaocalcular = document.createElement("button")
botaocalcular.textContent = "Calcular"
botaocalcular.style.height = "30px"
botaocalcular.style.width = "100px"
botaocalcular.style.marginTop = "20px"
botaocalcular.style.marginBottom = "20px"

box2.appendChild(botaocalcular)

botaocalcular.addEventListener("click", function(){
    const resultado = peso / (altura * altura)
})


//FIM DO BOTAO CALCULAR



