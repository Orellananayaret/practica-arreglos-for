// 
let usuarios = ["ana_22", "beto_99", "carla_07"];

// existe beto?
console.log("Existe beto_99?:", usuarios.includes("beto_99"));

// posicion carla_07 
console.log("Posicion de carla_07:", usuarios.indexOf("carla_07"));

// for +  break: primer usuario que contenga "_0"
for(let i = 0; i < usuarios.length; i++ ) {
    if (usuarios[i].includes("_0")){
         console.log('Primero con "_0":', usuarios[i]);
         break;
    }
}