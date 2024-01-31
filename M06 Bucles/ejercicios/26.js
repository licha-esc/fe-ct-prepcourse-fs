function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  // Paso 1: Asegurarse de que ambas cadenas tengan la misma longitud
// Paso 1: Asegurarse de que ambas cadenas tengan la misma longitud
if (str1.length !== str2.length) {
  return false;
}

// Paso 2: Convertir las cadenas a minúsculas (o mayúsculas)
const lowerStr1 = str1.toLowerCase();
const lowerStr2 = str2.toLowerCase();

// Paso 3: Convertir las cadenas a arreglos de caracteres
const arr1 = lowerStr1.split('');
const arr2 = lowerStr2.split('');

// Paso 4: Ordenar los arreglos de caracteres
arr1.sort();
arr2.sort();

// Paso 5: Comparar los arreglos resultantes
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
}

// Si no se encontraron diferencias, las cadenas son anagramas
return true;
}

module.exports = esAnagrama;
