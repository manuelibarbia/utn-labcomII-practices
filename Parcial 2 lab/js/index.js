const img_color = document.getElementById("img-color")
const color_select = document.getElementById("phone-color")

function calculatePrice() {
    const color = document.getElementById("phone-color");
    const capacity = document.getElementById("phone-capacity");
    const amount = document.getElementById("phone-amount");
    if (color.value == 0 || capacity.value == 0 || amount.value == 0) {
        showMessageError();
    } else {
        let price = 0;
        switch (capacity.value) {
            case "128":
                price = 150
                break;
            case "256":
                price = 165
                break;
            case "512":
                price = 180
                break;
            default:
                alert("Error en selección de capacidad.")
                break;
        }
        let final_price = 0;
        final_price = price * amount.value;
        showMessagePrice(final_price);
    }
}

function showMessageError() {
    result.innerHTML = ""
    result.style.display = "block"
    let P_error = document.createElement("p");
    let P_error_content = document.createTextNode("Error: Complete todos los campos");
    P_error.appendChild(P_error_content);
    result.appendChild(P_error);
    P_error.setAttribute("class", "error")
}

function showMessagePrice (final_price) {
    result.innerHTML = ""
    result.style.display = "block"
    let P_success = document.createElement("p");
    let P_success_content = document.createTextNode(`Cotización: $ ${final_price}.000`);
    P_success.appendChild(P_success_content);
    result.appendChild(P_success);
    P_success.setAttribute("class", "success")
}

function changeProductImage () {
    img_color.src = "img/iphone_13_"+color_select.value+".png";
}