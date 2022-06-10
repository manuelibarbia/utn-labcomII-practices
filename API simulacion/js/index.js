// EJEMPLO CON CALLBACK

// function simulateApiConnection(functionCallback){
//     setTimeout(function() {
//         console.log("Respuesta llamada API");
//         functionCallback();
//     },5000);
// }


// console.log("Antes del llamado a la API");
// simulateApiConnection(function () {
//     console.log("Después del llamado a la API");
// });



// EJEMPLO CON PROMESA

// function simulateApiConnection() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log("Respuesta llamada API");
//             resolve();
//         },5000);
//     });
// }

// console.log("Antes del llamado a la API");
// simulateApiConnection()
//     .then(function() {
//         console.log("Después del llamado a la API");
//     })
//     .catch(function() {
//         console.error("Error al llamar a la API")
//     })
//     .finally(function () {
//         console.log("SIEMPRE")
//     });



// EJEMPLO CON ASYNC/AWAIT

// function simulateApiConnection() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log("Respuesta llamada API")
//             resolve();
//         },5000);
//     });
// }
// async function test(){
//     try {
//         await simulateApiConnection();
//         console.log("LUEGO DE LA LLAMADA A LA API");
//     } catch (error) {
//         console.error("Error al llamar a la API")
//     }
    
// }


// console.log("ANTES del llamado a la API")
// test();

//al json lo tenemos en la variable jsonResponse

// jsonResponse.location.city;

// jsonResponse.courses[0].name;