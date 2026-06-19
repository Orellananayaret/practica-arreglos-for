// 
let puntajes = [10, 25, 40, 55];

// crea arreglo nuevo con cada puntaje x2
let dobles = puntajes.map(function(puntaje){
    return puntaje * 2;
});

// mostrar arreglos 
console.log("Dobles:", dobles);
console.log("Original:", puntajes);