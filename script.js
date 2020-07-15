let formulario = document.getElementById('formulario');
let campo = document.getElementById('campo');
let name= "";
let message = "";


formulario.addEventListener('submit', function(e) {
    name = campo.value; // pegando o valor do campo

    

    if(campo.value == 'tudo bem?') {
        document.querySelector('#message-gb').innerHTML = 'Estou bem e você?';
    } else {
        document.querySelector('#message-gb').innerHTML = 'Não entendi';
    }if (campo.value == 'estou bem') {
        document.querySelector('#message-gb').innerHTML = 'Ai sim, Qual a boa meu cria?';
    }

    // ativando modo light e desativando
    if(campo.value == 'ativar modo light') {
        document.querySelector('body').style.backgroundColor = 'var(--mode-light)';
        document.querySelector('#message-gb').innerHTML = '🥴 Quase me ceguei carai';
    } else {
        if(campo.value == 'desativar modo light') {
            document.querySelector('body').style.backgroundColor = 'var(--black-color)';
            document.querySelector('#message-gb').innerHTML = '😎 Aulas!';
        }
    }

    // ativando modo dark e desativando
    if(campo.value == 'ativar modo dark') {
        document.querySelector('body').style.backgroundColor = 'var(--black-color)';
        document.querySelector('#message-gb').innerHTML = '😎 Esse é top!';
    } else {
        if(campo.value == 'desativar modo dark') {
            document.querySelector('body').style.backgroundColor = 'var(--mode-light)';
            document.querySelector('#message-gb').innerHTML = '🥴 cAAAArai fiquei cego';
        }
    }

    //impede o envio do formulario
    e.preventDefault();
}) 