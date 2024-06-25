let texto = 'kendrick lamar';

function invertir() {

    const arregloDeCaracteres = texto.split('');
    
    const arregloInvertido = arregloDeCaracteres.reverse();
    
    const cadenaInvertida = arregloInvertido.join('');
    
    return cadenaInvertida;
}


console.log(invertir(texto));

////////////////////////////////////////////////////////////////////////////

let numero = 0;

function esPrimo(numero) {

    if (numero <= 1) {
        return false;
    }
    
    if (numero === 2) {
        return true;
    }
    
    if (numero % 2 === 0) {
        return false;
    }
    
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

function verificacion(n) {
    if (n === false) {
        console.log('NO es primo');
    } else if (n === true) {
        console.log('Es primo');
    }
}

const resultado = esPrimo(numero);
verificacion(resultado);

////////////////////////////////////////////////////////////////////////////

let numeros = [ 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function eliminarDuplicados(numeros) {
    let elementosVistos = {};

    let arregloSinDuplicados = numeros.filter(function(item) {
        if (elementosVistos.hasOwnProperty(item)) {
            return false;
        } else {
            elementosVistos[item] = true;
            return true;
        }
    });

    return arregloSinDuplicados;
}

const numerosSinDuplicados = eliminarDuplicados(numeros);

console.log(numerosSinDuplicados); 


////////////////////////////////////////////////////////////////////////////

const valor = 5;

function calcularFactorial(n) {

    if (n === 0) {
        return 1;
    }
    
    let resultado = 1;
    
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    
    return resultado;
}

// Ejemplo de uso
console.log(`El factorial de ${valor} es ${calcularFactorial(valor)}`); // El factorial de 5 es 120



////////////////////////////////////////////////////////////////////////////

let vocales = ['a', 'e', 'i', 'o', 'u'];

let palabra = "murcielago";

function ContarVocales(palabra) {
    let ArregloDeVocales = palabra.split('');
    let Contador = 0;

    for (let i = 0; i < ArregloDeVocales.length; i++) {
        if (vocales.includes(ArregloDeVocales[i])) {
            Contador++;
        }
    }

    return Contador;
}

console.log(`La palabra "${palabra}" tiene ${ContarVocales(palabra)} vocales.`); // La palabra "murcielago" tiene 5 vocales.

////////////////////////////////////////////////////////////////////////////

let AllNumeros = [1, 2, 3, 4, 5];

let suma = 0;

function SumarNumeros (AllNumeros) {

    for (let i = 0; i < AllNumeros.length; i++) {
        suma += AllNumeros[i]; 
    }

    return suma;  
}

console.log(SumarNumeros(AllNumeros));  

////////////////////////////////////////////////////////////////////////////

let Numeros = [1, 2, 3, 4, 5];
let NumeroMayor = 0; 

function EncontrarMayor(Numeros) {
    let NumeroMayor = Numeros[0]; 

    for (let i = 1; i < Numeros.length; i++) {
        if (Numeros[i] > NumeroMayor) {
            NumeroMayor = Numeros[i];
        }
    }

    return NumeroMayor;  
}

console.log(EncontrarMayor(Numeros));  // Imprime: 5
