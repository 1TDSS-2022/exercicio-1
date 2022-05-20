const a = document.querySelector("#nmLadoAId");
const b = document.querySelector("#nmLadoBId");
const c = document.querySelector("#nmLadoCId");
const calcular = document.querySelector("#btnCalId");

calcular.onclick = () => {
if((a.value+b.value>c.value) &&(a.value+c.value>b.value)&& (b.value+c.value>a.value)&& (a.value>0 && b.value>0 && c.value>0)){
    if((a.value ==b.value)&&(a.value ==b.value)){
        alert("é um triangulo equilatero");
        
    }else if(((a.value ==c.value)||(b.value ==c.value)||(a.value ==b.value))){
        alert("é um triangulo isoceles");
    } else{
        alert("é um triangulo escaleno");
    }

    }else{
        alert("num é um triangulo");
    }
}

const input = document.querySelector("#nmInputId").value;

i = 0
while(i<=10){
    resultado = input *i;
    console.log(input + " X " + i + " = "+ resultado)
    i+=1;
}

let vetor = ["a", "b", "a", "a", "c", "b"];
odd = [];
position = vetor[0];
let ordenado = vetor.sort();
j =0;
while(j<vetor.length){
    if (position!=vetor[j]){
        // odd = odd.push(vetor[j])
    }
    j++;
}
odd = ordenado[ordenado.length]
console.log(vetor);
console.log(odd);