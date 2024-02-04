function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(elemento => elemento % 2 === 0 && typeof elemento === 'number');
}

module.exports = filtrarNumerosPares;
