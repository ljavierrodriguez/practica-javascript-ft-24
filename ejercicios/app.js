/* Respuestas */
/* 1 */
console.log("Hola, mundo!")

/* 2 */
let variable1 = 10
let variable2 = 5

console.log(variable1 + variable2)
console.log(variable1 - variable2)
console.log(variable1 * variable2)
console.log(variable1 / variable2)

/* 3 */
function sumar(a, b){
    return a + b
}
console.log(sumar(5, 7))

/* 4 */
let open = true;
if(open){
    console.log("VERDADERO")
} else {
    console.log("FALSO")
}

/* 5 */
let colores = ["Amarillo", "Verde", "Azul", "Rojo", "Violeta", "Naranja"];
for(let color of colores){
    console.log(color)
}

const imprimirColor = (color) => console.log(color)
colores.forEach(imprimirColor)

for(let i = 0; i < colores.length; i++){
    console.log(colores[i])
}

/* 6 */
function cuadrado(a){
    return a*a
    //return a**2
}
console.log(cuadrado(9))

/* 7 */
let objeto = {
    nombre: 'Nicolas',
    edad: 20,
    ciudad: 'Santiago'
}
/* creando un atributo nuevo */
objeto['apellido'] = 'Guzman'
// objeto.apellido = 'Guzman'

console.log(objeto)
console.log(objeto.edad)
console.log(objeto['ciudad'])

/* 8 */
let i = 1;
while(i <= 10){
    console.log(i)
    i++
}

/* 9 */
function concatenar(a, b){
    return a + b
}
console.log(concatenar('Hola', 'Mundo'))

/* 10 */
let numeros = [1, 2, 3, 4, 5];
let total = 0;
let j = 0;
while(j < numeros.length){
    total = total + numeros[j]
    j++;
}
console.log(total)

const resultado = numeros.reduce((total, numero) => total + numero, 0)
console.log(resultado)

/* 11 */
let numero = 10;

if (numero > 0){
    console.log("NUMERO ES POSITIVO")
} else if (numero < 0){
    console.log("NUMERO ES NEGATIVO")
} else if (numero === 0){
    console.log("NUMERO ES CERO")
}

/* 12 */
function totalSuma(numeros){
    let total = 0;
    for(let num of numeros){
        total = total + num;
    }
    return total;
}

console.log(totalSuma(numeros));

/* 13 */
for(let n = 1; n < 21; n++){
    if (n % 2 === 0) console.log(n);
}

/* 14 */
let texto = "Hola Mundo";
function longitudCadena(texto){
    return texto.length;
}
console.log(longitudCadena(texto));

/* 15 */
for(let n = 20; n >= 1; n--){
    console.log(n);
}

/* 16 */
let start = 100;
let end = 200;
for(let i = start; i <= end; i++){
    console.log(i)
}

/* 17 */
function invertirCadena(texto){
   let nuevoTexto = "";
   for(let i = texto.length - 1; i >= 0; i--){
     nuevoTexto += texto[i]
   }
   return nuevoTexto;
}
console.log(invertirCadena("Hola Mundo"))

/* 18 */
for(let l = 1; l <= 15; l++){
    if (l % 2 !== 0) console.log(l)
}

/* 19 */

/* 20 */
