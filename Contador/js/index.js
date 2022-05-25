var counter = document.getElementById("counter");

let number = 0;

function onClickSum(){
    counter.innerText = number + 1;
    number++;
}

function onClickRest(){
    counter.innerText = number - 1;
    number--;
}