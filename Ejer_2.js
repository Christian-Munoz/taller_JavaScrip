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

// for(let  i = 1; i<=29; i++){
//     if((i % 3) == 0 ){
//         console.log('Tz')
//     }
//     if((i % 5) == 0 ){
//         console.log('Striker')
//     }
//     if((i % 5) == 0 && ((i % 3) == 0 ) ){
//         console.log('TzStriker')
//     }
//     else(console.log(`${i}`))
// }

for(let  i = 1; i<=29; i++){
    if(i % 3 == 0 && i % 5 == 0) {console.log('TzStriker')}
    else if(i % 3 == 0) {console.log('Tz')}
    else if(i % 5 == 0){console.log('Striker')}
    else{console.log(i)}
}
