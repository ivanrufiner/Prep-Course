// Do not change any of the function names

const { gitP } = require("simple-git");

function mayuscula(nombre) {
  
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1) // return nombre[0].toUpperCase() //El toUpperCase()método devuelve el valor de la cadena de llamada convertido a mayúsculas (el valor se convertirá en una cadena si no lo es).
  // + nombre.slice(1) //El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
}

function invocarCallback(cb) {
 cb ()
  // Invoca al callback `cb`
  //Tu código:
}

function operacionMatematica(n1, n2, cb) {
  return cb (n1, n2)
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
}

function sumarArray(numeros, cb) {
  var suma = numeros.reduce (function(acc, elemento){
    return acc + elemento;  
  });

  cb (suma);
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
}

function forEach(array, cb) {
for (let i=0; i < array.length; i++)
cb(array [i]);
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
}

function map(array, cb) {
  var nuevoarray = array.map (function (el){
    return cb (el);
  })
  return nuevoarray;

 
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
}

function filter(array) {
  var nuevoArreglo = []
  for (var primeraLetra of array){
 if (primeraLetra[0] == "a"){
  nuevoArreglo.push (primeraLetra)
}
} return nuevoArreglo
 
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
