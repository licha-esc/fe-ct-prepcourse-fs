function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let cantidadPares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 !== 0) {
      // Si es impar, continuar con la siguiente iteración
      continue;
    }

    // Si es par, incrementar la cantidad de pares
    cantidadPares++;
  }

  return cantidadPares;
}

module.exports = contarParesConContinue;
