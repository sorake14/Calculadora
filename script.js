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








//NOME, PESO, ALTURA E IDADE
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
nome.style.borderRadius = "5px"

box2.appendChild(nome)



const stringpeso = document.createElement("h3")
stringpeso.textContent = "Peso:"
box2.appendChild(stringpeso)

const peso = document.createElement("input")
peso.id = "peso"
peso.type = "number"
peso.placeholder = "Digite seu peso"
peso.style.textAlign = "center"
peso.style.height = "30px"
peso.style.width = "135px"
peso.style.borderRadius = "5px"

box2.appendChild(peso)



const stringaltura = document.createElement("h3")
stringaltura.textContent = "Altura:"
box2.appendChild(stringaltura)

const altura = document.createElement("input")
altura.id = "altura"
altura.type = "number"
altura.placeholder = "Digite sua altura"
altura.step = "1.01"
altura.style.textAlign = "center"
altura.style.height = "30px"
altura.style.width = "135px"
altura.style.borderRadius = "5px"

box2.appendChild(altura)
//FIM DO NOME, PESO, ALTURA E IDADE





//BOTAO CALCULAR
const botaocalcular = document.createElement("button")
botaocalcular.textContent = "Calcular"
botaocalcular.style.height = "30px"
botaocalcular.style.width = "100px"
botaocalcular.style.marginTop = "20px"
botaocalcular.style.marginBottom = "20px"
botaocalcular.style.backgroundColor = "#00FA9A"
botaocalcular.style.borderRadius = "15px"

box2.appendChild(botaocalcular)

botaocalcular.addEventListener("click", function(){
    
    const nome = document.getElementById("nome").value
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const resultado = (peso / (altura * altura)).toFixed(1)

    
    const result1 = document.createElement("div")
        if (resultado <= 18.5){
            result1.textContent = ("Olá, " + nome + "! Seu IMC é de: " + resultado)
            result1.style.backgroundColor = "blue"
        }
        else if (resultado >= 18.6 && resultado <= 24.9){
            result1.textContent = ("Olá, " + nome + "! Seu IMC é de: " + resultado)
            result1.style.backgroundColor = "green"
        }
        else if (resultado >= 25 && resultado <= 29.9){
            result1.textContent = ("Olá, " + nome + "! Seu IMC é de: " + resultado)
            result1.style.backgroundColor = "yellow"
        }
        else if (resultado >= 30){
            result1.textContent = ("Olá, " + nome + "! Seu IMC é de: " + resultado)
            result1.style.backgroundColor = "red"
        }
        setTimeout(function() {
            result1.style.display = 'none';
          }, 5000);
    footer.appendChild(result1)

})
//FIM DO BOTAO CALCULAR




//LEGENDA DO RESULTADO
const box3 = document.createElement("div")
    box3.style.height = "100px"
    box3.style.width = "100%"
    box3.style.backgroundColor = "#DCDCDC"
    box3.style.display = "flex"
    box3.style.justifyContent = "space-around"
    box3.style.alignItems = "center"

box2.appendChild(box3)

const azul = document.createElement ("div")
    azul.style.height = "20px"
    azul.style.width = "20px"
    azul.style.backgroundColor = "blue"
    box3.appendChild(azul)

const stringazul = document.createElement("h3")
    stringazul.textContent = "Abaixo do peso"
    box3.appendChild(stringazul)





const verde = document.createElement ("div")
    verde.style.height = "20px"
    verde.style.width = "20px"
    verde.style.backgroundColor = "green"
    box3.appendChild(verde)

const stringverde = document.createElement("h3")
    stringverde.textContent = "Peso normal"
    box3.appendChild(stringverde)





const amarelo = document.createElement ("div")
    amarelo.style.height = "20px"
    amarelo.style.width = "20px"
    amarelo.style.backgroundColor = "yellow"
    box3.appendChild(amarelo)

const stringamarelo = document.createElement("h3")
    stringamarelo.textContent = "Acima do peso"
    box3.appendChild(stringamarelo)





const red = document.createElement ("div")
    red.style.height = "20px"
    red.style.width = "20px"
    red.style.backgroundColor = "red"
    box3.appendChild(red)

const stringred = document.createElement("h3")
    stringred.textContent = "Obesidade"
    box3.appendChild(stringred)




//INICIO DO FOOTER

const footer = document.createElement("div")

footer.style.height = "92px"
footer.style.width = "100%"
footer.style.backgroundColor = "rgb(0, 0, 0, 0.7)"
footer.style.display = "flex"
footer.style.flexDirection = "column"
footer.style.flexWrap = "wrap"
footer.style.color = "black"
footer.style.fontSize = "10px"
footer.style.borderTop = "11px double #999"
footer.style.borderBottom = "11px double #999"

document.body.appendChild(footer)
//FIM DO FOOTER