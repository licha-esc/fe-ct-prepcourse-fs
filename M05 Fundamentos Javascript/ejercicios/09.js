function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:

  // opción 1
  return valor == null;

  // opción 2:
  // return valor == null || undefined ? true : false;

  // opción 3:
  // if (valor == null || undefined) {
  //   return true;
  // } else {
  //   return false;
  // }
}

module.exports = esNuloOIndefinido;