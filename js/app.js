
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
        console.log("Este es un equilatero");
        l = lado1;
        const equilatero = ((l ** 2)*(Math.pow(3,0.5))/4); 
        console.log(equilatero);
    }
    else if (lado1 == lado2 || lado2 == lado3){
        console.log("Este es un isosceles");
        console.log(lado1);
        if (lado1 != lado2){
            ladodif = lado1;
        };
        if (lado1 != lado3){
            ladodif = lado1;
        };
        if (lado2 != lado3){
            ladodif = lado3;
            console.log(ladodif);
        };
        if (lado1 == lado2){
            ladosame = lado1;
            console.log(ladosame);
        };
        if (lado2 == lado3){
            ladosame = value3;
        };
        const h = Math.pow((Math.pow(ladosame,2) - (Math.pow(ladodif,2) / 4 )),0.5);
        console.log(h);
    }
    else{
        console.log("Este es un escaleno")
        a = lado1;
        b = lado2;
        c = lado3;
        const sp = (a + b + c) / 2;
        const escaleno = Math.pow(sp * (sp - a) * (sp - b) * (sp-c) , 0.5);
        console.log(escaleno);
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
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputPerimetroTriangulo");
    const lado1 = input1.lado1;
    
    const perimetro = perimetroTriangulo(lado1,);
    alert(perimetro);
}