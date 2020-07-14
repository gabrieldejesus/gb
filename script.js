let formulario = document.getElementById('formulario');
let campo = document.getElementById('campo');
let name= '';

formulario.addEventListener('submit', function(e) {
    name = campo.value; // pegando o valor do campo
    document.querySelector('.gb-hi').classList.add('hide'); // remover pergunta
    document.querySelector('.question').classList.add('hide'); // remover form
    document.querySelector('.avatar-name').classList.add('show'); // mostrando a mensagem
    document.querySelector('#name').innerHTML = name; // imprimir nome da pessoa
    

    //impede o envio do formulario
    e.preventDefault();
}) 


