function validar(){

    // Inicio bloque captura de elementos del DOM
    let nombre = document.querySelector('#nombre');
    let apellido = document.querySelector('#apellido');
    let email = document.querySelector('#email');
    let numero = document.querySelector('#numero');
    let texto = document.querySelector('#mensaje');
    // Fin bloque captura de elementos del DOM

    // Inicio bloque expresiones regulares
    let regExString = /^[A-Za-z]+$/;
    let regExEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regNum = /^([0-9])*$/;
    // Fin bloque expresiones regulares

    // Inicio validaciones nombre
    if (nombre.value.length == 0){
        alert("El campo nombre es requerido");
        return false;
    }
    if(nombre.value.length < 3){
        alert("La longitud minima del campo nombre debe ser de 3 caracteres");
        return false;
    }
    if(!regExString.test(nombre.value)){
        alert("El campo nombre debe contener solo texto.");
        return false;
    }
    // Fin validaciones nombre

    // Inicio validaciones apellido
    if (apellido.value.length == 0){
        alert("El campo apellido es requerido");
        return false;
    }
    if(apellido.value.length < 3){
        alert("La longitud minima del campo apellido debe ser de 3 caracteres");
        return false;
    }
    if(!regExString.test(apellido.value)){
        alert("El campo apellido debe contener solo texto.");
        return false;
    }
    // Fin validaciones apellido

    // Inicio validaciones email
    if (email.value.length == 0){
        alert("El campo email es requerido");
        return false;
    }
    if (!regExEmail.test(email.value)){
        alert("El campo email no es valido");
        return false;
    }
    // Fin validaciones email

    // Inicio validaciones numero
    if (numero.value.length == 0){
        alert("El campo numero es requerido");
        return false;
    }
    if(numero.value.length != 10){
        alert("La longitud del campo numero debe ser igual a 10 caracteres");
        return false;
    }
    if(!regNum.test(numero.value)){
        alert("El campo numero debe contener solo numeros");
        return false;
    }
    // Fin validaciones numero

    // Inicio validaciones texto
    if (mensaje.value.length == 0){
        alert("El campo mensaje es requerido");
        return false;
    }
    if(mensaje.value.length < 10){
        alert("La longitud minima del campo mensaje debe ser de 10 caracteres");
        return false;
    }
    if(!regExString.test(mensaje.value)){
        alert("El campo mensaje debe contener solo texto.");
        return false;
    }
    // Fin validaciones texto

    // Fin bloque validaciones

    let resultado = confirm("Desea envia el formulario para contactarse?");
    if(resultado == true){
      return true;
    }
    else{
      alert("El formulario no se ha enviado");
      return false;
    }
    return true;
}
