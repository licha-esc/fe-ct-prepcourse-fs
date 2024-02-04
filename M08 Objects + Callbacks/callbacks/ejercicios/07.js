function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  const resultadoFiltrado = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    const elemento = arrayOfStrings[i];

    if (elemento.startsWith('a') || elemento.startsWith('A')) {
      resultadoFiltrado.push(elemento);
    }
  }

  return resultadoFiltrado;
}

module.exports = filter;
