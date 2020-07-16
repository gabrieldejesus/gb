let formulario = document.getElementById('formulario');
let campo = document.getElementById('campo');
let name= "";
let message = "";


formulario.addEventListener('submit', function(e) {
    name = campo.value; // pegando o valor do campo

    if(campo.value == 'Tudo bem?') {
        document.querySelector('#message-gb').innerHTML = 'Estou bem e você?';
        campo.value = '';
    } else {
        document.querySelector('#message-gb').innerHTML = 'Não entendi';
    }if (campo.value == 'Estou bem') {
        document.querySelector('#message-gb').innerHTML = 'Ai sim, Qual a boa meu mano?';
        campo.value = '';
    }

    // ativando modo light e desativando
    if(campo.value == 'Ativar modo light') {
        document.querySelector('body').style.backgroundColor = 'var(--mode-light)';
        document.querySelector('#message-gb').innerHTML = '🥴 Quase me ceguei kkkkk';
        campo.value = '';
    } else {
        if(campo.value == 'desativar modo light') {
            document.querySelector('body').style.backgroundColor = 'var(--black-color)';
            document.querySelector('#message-gb').innerHTML = '😎 Me amarro nesse!';
            campo.value = '';
        }
    }

    // ativando modo dark e desativando
    if(campo.value == 'Ativar modo dark') {
        document.querySelector('body').style.backgroundColor = 'var(--black-color)';
        document.querySelector('#message-gb').innerHTML = '😎 Esse é top!';
        campo.value = '';
    } else {
        if(campo.value == 'Desativar modo dark') {
            document.querySelector('body').style.backgroundColor = 'var(--mode-light)';
            document.querySelector('#message-gb').innerHTML = '🥴 Fiquei cegooo kkkk';
            campo.value = '';
        }
    }

    //impede o envio do formulario
    e.preventDefault();
}) 