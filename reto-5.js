// 
let notas = [3.5, 6.0, 4.2, 2.8, 7.0, 5.5];

// filtrar notas aprobadas (>= 4.0)
let aprobadas = notas.filter(function(nota){
    return nota >= 4.0;
});

// mostrar arreglo y cantidad 
console.log("Aprobadas:", aprobadas);
console.log("Cantidad:", aprobadas.length);