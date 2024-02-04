function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // Verificar que n sea un número entero positivo
  let acumulador = 0;
  for (let i = 1; i <= n; i++) {
    acumulador = acumulador + i;    
  }
  return acumulador;
}
console.log(sumarHastaN(4));

module.exports = sumarHastaN;
