let persona = {};

const inputNombre = document.querySelector('input[name="name"]')
const inputEdad = document.querySelector('input[name="age"]')
const inputNacimiento = document.querySelector('input[name="birth"]')
const selectProvincia = document.querySelector('select[name="province"]')

function onSubmitSave(){
    persona = {
        Nombre: inputNombre.value,
        Edad: inputEdad.value,
        Nacimiento: inputNacimiento.value,
        Provincia: selectProvincia.options[selectProvincia.selectedIndex].text
    }

    console.log(persona)
}

function printInfo(){
    document.getElementById("datosNombre").innerHTML = "Nombre: " + persona.Nombre;
    document.getElementById("datosEdad").innerHTML = "Edad: " + persona.Edad;
    document.getElementById("datosNacimiento").innerHTML = "Nacimiento: " + persona.Nacimiento;
    document.getElementById("province").innerHTML = "Provincia: " + persona.Provincia;
}

document.getElementById("mostrarDatos").onclick = function(){
    printInfo();
}