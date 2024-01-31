function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
    // Verificar que n sea un número entero positivo
    if (!Number.isInteger(n) || n < 1) {
      return 0;
    }
  
    let suma = 0;
  
    // Calcular la suma de los números desde 1 hasta n
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
  
    return suma;
}

module.exports = sumarHastaN;
