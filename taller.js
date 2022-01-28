/* Ciclos con FOR */
// for (let i = 1; i <= 4; i++) {
//  console.log(`iteracion ${i}`);
// }
// console.log("Fin del Ciclo");

/* Ciclos con FOR */
// 1. El estudiante debe generar una salida igual a la de la imagen

// Restricciones: 

// A. debe usar ciclos
// B. en caso de usar condiciones solo puede utilizar 1 if else
// C.Solo esta habilitado para usar 2 console.log

// Extra: Solucion con menos codigo lleva puntos extra

// for (let i = "*"; i <= "*" ; i++) 
// {console.log(`
// ****************
// *              *
// *              *
// *              *
// *              *
// *              *
// *              *
// *              *
// *              *
// *              *
// ****************`)
// }

// ________________________________________________________________

// 3. Dado el numero deben imprimir la tabla de multiplicar del 1 al 10

// Ejemplo tabla del 5

// 5 X 1  = RESULTADO
// 5 X 2  = RESULTADO
// 5 X 3 = RESULTADO
// .....
// 5 X 10  = RESULTADO

// let x = 5;
// console.log(`
//     Su Resultado es: 
    
//     ${x} x 1 = ${x*1} 
//     ${x} x 2 = ${x*2}
//     ${x} x 3 = ${x*3}
//     ${x} x 4 = ${x*4}
//     ${x} x 5 = ${x*5}
//     ${x} x 6 = ${x*6}
//     ${x} x 7 = ${x*7}
//     ${x} x 8 = ${x*8}
//     ${x} x 9 = ${x*9}
//     ${x} x 10 = ${x*10}`)


// Otra forma

// let num = 4
// for (let i = 1; i<11; i++) {
//     console.log (num + "x" + i +"=" + (num*i));
// }
    

// 2.  Ejercicio TzStriker consiste en tomar N numeros y recorrelos con un iterador, 
// en este ejercicio deben imprimir segun la condicion.

// A. En caso de ser multiplo de 3 imprime Tz
// B. En caso de ser Multiplo de 5 imprime Striker
// C. En caso de ser multiplo de 3 y 5 imprime TzStriker
// D.En caso de no ser ninguno, imprime el numero

// Restricciones

// a. Debe usarse un ciclo for
// b. Debe usuarse maximo 3 condiciones
// c. el numero de numeros debe ser variable

 for(let  i = 1; i<=29; i++){
     if((i % 3) == 0 ){
         console.log('Tz')
     }
     if((i % 5) == 0 ){
         console.log('Striker')
     }
     if((i % 5) == 0 && ((i % 3) == 0 ) ){
         console.log('TzStriker')
     }
     else(console.log(`${i}`))
 }



 for(let  i = 1; i<=29; i++){
    if(i % 3 == 0 && i % 5 == 0) {console.log('TzStriker')}
    else if(i % 3 == 0) {console.log('Tz')}
    else if(i % 5 == 0){console.log('Striker')}
    else{console.log(i)}
}

