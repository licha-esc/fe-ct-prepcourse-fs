function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos los números entre a y b (inclusive).
  // Tu código:
  // Verificar que a y b sean enteros positivos
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return 0;
  }
  // Asegurarse de que a sea menor o igual que b
  if (a > b) {
    [a, b] = [b, a]; // Intercambiar los valores de a y b si a > b
  }
  let producto = 1;
  // Calcular el producto de los números entre a y b (inclusive)
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}


module.exports = productoEntreNúmeros;