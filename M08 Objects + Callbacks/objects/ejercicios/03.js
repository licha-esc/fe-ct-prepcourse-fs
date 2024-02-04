const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  const nuevoObjeto = { ...objeto, [propiedad]: valor };
  return nuevoObjeto;
};

module.exports = agregarNuevaPropiedad;
