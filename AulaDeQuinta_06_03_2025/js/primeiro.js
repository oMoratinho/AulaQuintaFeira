// var para;

// function aoCarregarPagina() {
//    para = document.querySelector('p')
//    para.addEventListener("click", atualizarNome)
// }

// function atualizarNome() {
//   var nome = prompt("Insira um novo nome")
//    para.textContent = "Jogador 1: " + nome
// }

// 1
var frutas = new Array("banana", "laranja", "limao");
const respFrutas = document.querySelector(".respFrutas")
frutas.shift();
frutas.splice(1, 1, "uva");
for (var i = 0; i < frutas.length; i++) {
    console.log(i)
    console.log(frutas.length)
    if (i < frutas.length - 1) {
        respFrutas.innerHTML = frutas[i] + " | "
    } else {
        respFrutas.innerHTML += frutas[i]
    }
}



// 2
var para = document.createElement("p");
var node = document.createTextNode("Terceiro Parágrafo.");
var element = document.getElementById("caixa");

const input = document.createElement("input")

input.value = "____I_____"

element.appendChild(input)

// 3
var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);


const respRegex = document.querySelector(".respRegex")

respRegex.innerHTML = "RespRegex: " + resultado

// 4
function classificacao() {
    return function (obj1, obj2) {
        var a = (obj2["nota"] - obj1["nota"]);
        return (a !== 0) ? a : (obj1["idade"] - obj2["idade"]);
    }
}

var aprovados = [
    { candidato: "Renata Soares", nota: 7.8, idade: 29 },
    { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
    { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
    { candidato: "João Oliveira", nota: 7.8, idade: 27 },
    { candidato: "Adriana Telles", nota: 7.8, idade: 28 }
];

var respAlunoAprovado = document.querySelector(".respAlunoAprovado")

aprovados.sort(classificacao());
respAlunoAprovado.innerHTML = "Aluno aprovado: " + aprovados[1].candidato