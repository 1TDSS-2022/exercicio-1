//Exercicio-01

const triangulo = document.querySelector("#calcularResult")
var resultado = document.getElementById("resultadoId")

triangulo.addEventListener('click',function(){
let ladoA = document.getElementById("ladoAId").value
let ladoB = document.getElementById("ladoBId").value
let ladoC = document.getElementById("ladoCId").value

    if (ladoA == ladoB && ladoB == ladoC){
        console.log("Triângulo Equilátero")
        resultado.value = "Triângulo Equilátero"
    }
    if (ladoA != ladoB && ladoB != ladoC ){
        console.log("Triângulo Isóceles")
        resultado.value = "Triângulo Isóceles"
    }
    
})