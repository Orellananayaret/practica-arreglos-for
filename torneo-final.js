// 
let nombres  = ["Sora", "Kai", "Luna", "Max", "Nia"];
let puntajes = [120, 85, 200, 60, 150];

// cantidad jugadores 
console.log("Total de jugadores:", nombres.length);

// mostrar nombre: puntaje for 
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i] + ": " + puntajes[i]);
}

// total y promedio
let total = 0;

for(let i = 0; i < puntajes.length; i++){
    total += puntajes[i];
}

let promedio = total / puntajes.length;

console.log("puntaje total:", total);
console.log("promedio:", promedio);


// puntaje maximo
let maximo = puntajes[0];
for (let i = 1; i < puntajes.length; i++){
    if (puntajes[i] > maximo ){
        maximo = puntajes[i];
    }
}

console.log("puntaje máximo:", maximo);


// puntajes sobre el promedio

let sobrePromedio = puntajes.filter(function(puntaje){
    return puntaje > promedio;
});

console.log("Sobre promedio:", sobrePromedio);


// ranking

let ranking = [...puntajes];

ranking.sort(function(a, b){
    return b - a;
});

console.log("Ranking:",ranking);

// ganador 

let indiceGanador = puntajes.indexOf(maximo);

console.log("🏆 Ganador:", nombres[indiceGanador]);