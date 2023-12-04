var Input1 = document.getElementById('Input1');
var Input2 = document.getElementById('Input2');
var inf1 = document.getElementById('inf1');
var inf2 = document.getElementById('inf2');
var validator1 = document.getElementById('validator1');
var validator2 = document.getElementById('validator2');

Input1.addEventListener('input', () => {
    var regexInput1 = /^[0-9]{3}\.[0-9]{3}_[aeiouAEIOU]_\.$/;
    if (regexInput1.test(Input1.value)) {
        validator1.innerHTML = "Formato válido!";
    } else {
        validator1.innerHTML = "Formato inválido.";
    }
});

Input2.addEventListener('input', () => {
    var regexInput2 = /^N\.[0-9]+$/;
    if (regexInput2.test(Input2.value)) {
        validator2.innerHTML = "Formato válido!";
    } else {
        validator2.innerHTML = "Formato inválido.";
    }
});

function gerar() {
    if (/^[0-9]{3}\.[0-9]{3}_[a-zA-Z]_\.$/.test(Input1.value)) {
        inf1.innerHTML = "Info 1: " + Input1.value;
    } else {
        inf1.innerHTML = "Info 1: Formato inválido!";
    }

    if (/^N\.[0-9]+$/.test(Input2.value)) {
        inf2.innerHTML = "Info 2: " + Input2.value;
    } else {
        inf2.innerHTML = "Info 2: Formato inválido!";
    }
}

function apagar() {
    Input1.value = '';
    Input2.value = '';
    inf1.innerHTML = "Info 1: ";
    inf2.innerHTML = "Info 2: ";
}