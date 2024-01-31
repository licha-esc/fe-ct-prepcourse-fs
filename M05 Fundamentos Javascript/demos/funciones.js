// una persona quiere entrar a una discoteca y debe tener +18 y ticket de entrada.
// si la persona tiene +18, no tiene ticket pero es amiga del dueño puede pasar.
function entrada(edad, nombre, ticket, amigaDelDueño) {
    if (edad >= 18 && ticket == true) {
        return nombre = "puede pasar";
    } else if (edad >= 18 && ticket == false && amigaDelDueño == true) {
        return "puede pasar, es amiga del dueño";
    } else return "no puede pasar";
}
console.log(entrada(19, "pedro", false, true));