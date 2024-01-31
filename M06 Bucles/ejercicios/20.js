function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
  // Verificar que n sea un número entero positivo
  // Verificar que n sea un número entero positivo
  if (!Number.isInteger(n) || n < 1) {
    return 0;
  }
  let suma = 0;

  // Calcular la suma de los números desde 1 hasta n
  for (let i = 1; i <= n; i++) {
    suma += i;
    // Detener el bucle si la suma supera 100
    if (suma > 100) {
      suma = 100; // Establecer la suma en 100 si supera este valor
      break;
    }
  }
  return suma;
}
console.log(sumarHastaNConBreak);


module.exports = sumarHastaNConBreak;
