function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:

  // Opción 1:
  // return num > 0 ? "Es positivo" : (num < 0 ? "Es negativo" : false);

  // Opción 2:
  if (num > 0) {
    return "Es positivo";
  } if (num < 0) {
    return "Es negativo";
  } if (num === 0) {
    return false;
  }
}

module.exports = esPositivo;