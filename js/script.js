const triangulo = document.querySelector("#calcularTriangulo") // direciona o addEventListener ao Botao referente ao ID

var result = document.getElementById("resultadoId")

triangulo.addEventListener('click',function(){

let A = document.getElementById("ladoAID").value
let B = document.getElementById("ladoBID").value
let C = document.getElementById("ladoCID").value

console.log(A,B,C)

if (A<B+C && B<A+C && C<A+B) {
    if(A==B && B==C){
        console.log("equilátero")
        result.value="Equilátero"

    }else if(A==B && B!=C|| A!=B && B==C|| A==C && C!=B){
        console.log("isoceles")
        result.value="Isóceles"
    }else{
        console.log("Escaleno")
        result.value="Escaleno"
    }



}else{

    console.log("não existe Triangulo")
    result.value="Não existe triangulo"
}
})

