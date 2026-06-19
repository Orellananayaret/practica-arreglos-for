// 
let ventas = [3000, 5500, 1200, 8000];

// calcular total vendido 
let total = ventas.reduce(function(acumulador, venta){
    return acumulador + venta;
}, 0);

// calcular promedio 

let promedio  = total / ventas.length;

console.log("Total:", total);
console.log("Promedio:", promedio);