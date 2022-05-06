// Zoeirinha
const phill = document.querySelector("#rsrs")
phill.addEventListener('click',function(){
    phill.innerHTML= "EXERCICIOS TIO PHILL"
})

// Exercicio 1
const triangulo = document.querySelector("#calcularTriangulo")
var resultado = document.getElementById("resultadoId")

triangulo.addEventListener('click',function(){
    let ladoA = document.getElementById("ladoAId").value
    let ladoB = document.getElementById("ladoBId").value
    let ladoC = document.getElementById("ladoCId").value

   if (ladoA == ladoB && ladoB == ladoC) {
       console.log("O triângulo é equilátero")
       resultado.value = "Triangulo Equilátero"
   }

   if (ladoA == ladoB && ladoB != ladoC){
        console.log("O triângulo é isóceles")
        resultado.value = "Triangulo Isóceles"
   }

   if (ladoA != ladoB && ladoA == ladoC){
        console.log("O triângulo é isóceles")
        resultado.value = "Triangulo Isóceles"
    }

    if (ladoA != ladoB && ladoA != ladoC && ladoB == ladoC){
        console.log("O triângulo é isóceles")
        resultado.value = "Triangulo Isóceles"
    }

   if(ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
        console.log("O triângulo é escaleno")
        resultado.value = "Triangulo Escaleno"
    }
})

// Exercicio 2
const tabuada = document.querySelector("#calcularTabuada")

tabuada.addEventListener('click',function(){
    let numero = document.getElementById("numeroId").value
   
    for (let i = 1; i <= numero; i++) {
        let resultado = numero * i
        console.log(numero + "*" + i + "=" + resultado)
     }

  
})



