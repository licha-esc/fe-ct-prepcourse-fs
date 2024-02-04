function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    // Utiliza reduce para multiplicar todos los argumentos
    return Array.from(arguments).reduce((producto, argumento) => producto * argumento, 1);
  }
}

module.exports = multiplicarArgumentos;
