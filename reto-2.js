// 
let fila = ["Ana", "Beto", "Carla"];

// llega Diego y se pone al final

fila.push("Diego");

// llega Eva con prioridad y se pone al inicio 
fila.unshift("Eva");

// Atienden al primero de la fila (se va)
fila.shift();

// El ultimo se cansa y se va 
fila.pop();

// la persona que quedó en la posición del medio (indice 1) abandona
fila.splice(1, 1);

console.log("Fila final: ", fila);