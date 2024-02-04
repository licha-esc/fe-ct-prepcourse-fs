function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  const nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    const resultado = cb(array[i]);
    nuevoArray.push(resultado);
  }

  return nuevoArray;
}

// Ejemplo de uso:
function duplicarNumero(numero) {
  return numero * 2;
}

module.exports = map;
