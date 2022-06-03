let persona = {}
var dataBase = []

const inputNombre = document.querySelector('input[name="name"]')
const inputEdad = document.querySelector('input[name="age"]')
const inputNacimiento = document.querySelector('input[name="birth"]')
const selectProvincia = document.querySelector('select[name="province"]')

const mostrarNombre = document.getElementById("datosNombre")
const mostrarEdad = document.getElementById("datosEdad")
const mostrarNacimiento = document.getElementById("datosNacimiento")
const mostrarProvincia = document.getElementById("datosProvincia")

function onSubmitSave(){
    let formulario_completo = true
    if (inputNombre.value === "") {
        alert("Debe rellenar el campo de nombre.")
        formulario_completo = false
    }
    if (inputNombre.value.length < 8) {
        alert("El nombre debe tener al menos 8 caracteres.")
        formulario_completo = false
    }
    if (inputNombre.value.length > 50) {
        alert("El nombre debe tener como máximo 50 caracteres")
        formulario_completo = false
    }

    if (inputEdad.value < 18 || inputEdad.value > 100) {
        alert("La edad debe estar entre 18 y 100 años.")
        formulario_completo = false
    }

    if (inputNacimiento.value === "") {
        alert("Debe completar la fecha de nacimiento.")
        formulario_completo = false
    }

    if (selectProvincia.value === "") {
        alert("Debe seleccionar una provincia.")
        formulario_completo = false
    }
    if (formulario_completo) {
        persona = {
            Nombre: inputNombre.value,
            Edad: inputEdad.value,
            Nacimiento: inputNacimiento.value,
            Provincia: selectProvincia.options[selectProvincia.selectedIndex].text
        }
    
        console.log(persona)

        dataBase.push(persona)
    }
    
}

function printInfo(){
    mostrarNombre.innerHTML = "Nombre: " + persona.Nombre;
    mostrarEdad.innerHTML = "Edad: " + persona.Edad;
    mostrarNacimiento.innerHTML = "Nacimiento: " + persona.Nacimiento;
    mostrarProvincia.innerHTML = "Provincia: " + persona.Provincia;
}

document.getElementById("mostrarDatos").onclick = function(){
    printInfo();
}