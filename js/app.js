
// Constantes

const PI = Math.PI;

//Cuadrado

function perimetroCuadrado (lado){
    return lado * 4 ;
}
function areaCuadrado (lado){
    return lado * lado;
}

//Triángulo

function perimetroTriangulo (lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}
function areaTriangulo(altura,base){
    return (base * altura) / 2;
}

function whoTriangulo (lado1,lado2,lado3){
    if (lado1 == lado2 && lado2 == lado3){
        l = lado1;
        const equilatero = ((l ** 2)*(Math.pow(3,0.5))/4); 
        alert(`Este es un Triángulo equilatero y su área es ${equilatero}.`);
    }
    else if (lado1 == lado2 || lado2 == lado3){
        if (lado1 != lado2){
            ladodif = lado1;
        };
        if (lado1 != lado3){
            ladodif = lado1;
        };
        if (lado2 != lado3){
            ladodif = lado3;
        };
        if (lado1 == lado2){
            ladosame = lado1;
        };
        if (lado2 == lado3){
            ladosame = value3;
        };
        const h = Math.pow((Math.pow(ladosame,2) - (Math.pow(ladodif,2) / 4 )),0.5);
        alert(`Este es un Triángulo isósceles y su área es ${h}.`);
    }
    else{
        console.log("Este es un escaleno")
        a = lado1;
        b = lado2;
        c = lado3;
        const sp = (a + b + c) / 2;
        const escaleno = Math.pow(sp * (sp - a) * (sp - b) * (sp-c) , 0.5);
        alert(`Este es un Triángulo escaleno y su área es ${escaleno}.`);
    } 
}


//Círculo

function perimetroCirculo (radio){
    return (PI*2) * radio;
}

function areaCirculo (radio){
    return PI * (radio * radio);
}

// USERS

//CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputPerimetroCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputAreaCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//TRIANGULO

function calcularPerimetroTriangulo(){
    let input = document.getElementById("inputPerimetroTriangulo1");
    const l1 = Number(input.value);
    console.log(l1);
    input = document.getElementById("inputPerimetroTriangulo2");
    const l2 = Number(input.value);
    console.log(l2);
    input = document.getElementById("inputPerimetroTriangulo3")
    const l3 = Number(input.value);
    console.log(l3);
    const perimetro = perimetroTriangulo(l1,l2,l3);
    alert (`El perímetro de este triángulo es ${perimetro}`);
}
function calcularAreaTriangulo(){
    let input = document.getElementById("inputAreaTriangulo1");
    const l1 = Number(input.value);
    input = document.getElementById("inputAreaTriangulo2");
    const l2 = Number(input.value);
    input = document.getElementById("inputAreaTriangulo3");
    const l3 = Number(input.value);
    console.log(`${l1} ${l2} ${l3}`);
    const area = whoTriangulo(l1,l2,l3);
}