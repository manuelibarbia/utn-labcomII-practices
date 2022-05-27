let persona = {};

const inputNombre = document.querySelector('input[name="name"]')
const inputEdad = document.querySelector('input[name="age"]')
const inputNacimiento = document.querySelector('input[name="birth"]')
const selectProvincia = document.querySelector('input[name="province"]')

function onSubmitSave(){
    persona = {
        Nombre: inputNombre.value,
        Edad: inputEdad.value,
        Nacimiento: inputNacimiento.value,
        Provincia: selectProvincia.options[selectProvincia.selectedIndex].text
    }

    console.log(persona)
}