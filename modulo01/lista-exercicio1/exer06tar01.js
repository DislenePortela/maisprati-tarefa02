/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

function formaTriangulo(a, b, c) {//Funçao verificar lado do triangulo
    return (a < b + c) && (b < a + c) && (c < a + b);
}

function tipoDeTriangulo(a, b, c) { //Funçao tipo de triangulo
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

let a = 10
let b = 8;
let c = 9;

if (formaTriangulo(a, b, c)) {
    console.log(`Os lados fornecidos formam um triângulo.`);
    let tipo = tipoDeTriangulo(a, b, c);
    console.log(`Tipo de triângulo: ` + tipo);
} else {
    console.log(`Os lados fornecidos não formam um triângulo.`);
}
