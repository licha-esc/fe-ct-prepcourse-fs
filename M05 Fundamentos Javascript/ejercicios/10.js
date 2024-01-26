function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  // Opción 1
  // if (fecha.toString() == "Invalid Date") {
  //   return false;
  // }

  // if (fecha instanceof Date) {
  //   return true;
  // } else return false;

  // Opción 2
  var hoy = new Date();
  if (hoy >= fecha) {
    return true;
  } else {
    return false;
  }
}

module.exports = esFechaValida;