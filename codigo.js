/* Función que muestra la zona de registro */
function mostrarRegistro() {
    document.getElementById("registro").style.display = "block";
}

/* Función que oculta la zona de registro */
function ocultarRegistro() {
    document.getElementById("registro").style.display = "none";
}

/* Función que valida el formulario*/
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    
    /* Expresión regular que verifica que el nombre solo tenga caracteres alfabéticos */
    var nombreValido = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ-]+$/.test(nombre);

    /* Si el nombre no es válido muestra un mensaje de alerta */
    if (!nombreValido) {
        alert("El nombre solo puede contener caracteres alfabéticos");
        return false;
    }
    
    /* Si dejamos el campo de nombre vacío nos mostrará un aviso */
    if (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre");
        return false;
    }
    
    /* Si dejamos el campo del número de teléfono vacío nos mostrará un aviso */
    if (telefono.trim() === "") {
        alert("Por favor, ingrese su número de teléfono");
        return false;
    }
    
    if (isNaN(telefono) || telefono.length !== 9) { /* La longitud del número de teléfono debe ser de 9 dígitos */
        alert("El número de teléfono debe ser numérico y tener una longitud 9 dígitos");
        return false;
    }

    return true;
}
