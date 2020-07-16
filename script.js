const c = (el)=>document.querySelector(el); // retornar o item
const cs = (el)=>document.querySelectorAll(el); // retornar um array com os itens que ele achou

let formulario = c('#formulario');
let campo = c('#campo');
let name= "";
let message = "";
let d = new Date(); // pegar data atual
let today = d.getDate(); // pegar o dia atual
let hours = d.getHours(); // pega a hora 
let minutes = d.getMinutes(); // pegar os minutos


formulario.addEventListener('submit', function(e) {


// CONVERSATION
    name = campo.value; // pegando o valor do campo

    if (campo.value == 'Tudo bem?') {
        c('#message-gb').innerHTML = 'Estou bem e você?';
        campo.value = '';
    } else {
        c('#message-gb').innerHTML = 'Calma ai que ainda não sei falar muito 😳<br> Tenta digitar outra coisa prf!!!🙏🏾 ';
    }if (campo.value == 'Estou bem') {
        c('#message-gb').innerHTML = 'Ai sim, Fazendo o que de bom?';
        campo.value = '';
    } else {
        if(campo.value == 'Sim') {
            c('#message-gb').innerHTML = 'Qual a boa?';
            campo.value = '';
        } else {
            if(campo.value == 'Não') {
                c('#message-gb').innerHTML = 'Nossa 😳 ok!';
                campo.value = '';
            }
        }
    }if(campo.value == 'Que horas são?') {
        c('#message-gb').innerHTML = `São ${hours}:${minutes} `;
        campo.value = '';
    } else {
        if(campo.value == 'Obrigado') {
            c('#message-gb').innerHTML = 'Que nada Tmj! ❤️'
            campo.value = '';
        }
    }


// RESOURCES
    // ativando modo light e desativando
    if(campo.value == 'Ativar modo light') {
        c('body').style.backgroundColor = 'var(--mode-light)';
        c('#message-gb').innerHTML = '🥴 Quase me ceguei kkkkk';
        campo.value = '';
    } else {
        if(campo.value == 'desativar modo light') {
            c('body').style.backgroundColor = 'var(--black-color)';
            c('#message-gb').innerHTML = '😎 Me amarro nesse!';
            campo.value = '';
        }
    }

    // ativando modo dark e desativando
    if(campo.value == 'Ativar modo dark') {
        c('body').style.backgroundColor = 'var(--black-color)';
        c('#message-gb').innerHTML = '😎 Esse é top!';
        campo.value = '';
    } else {
        if(campo.value == 'Desativar modo dark') {
            c('body').style.backgroundColor = 'var(--mode-light)';
            c('#message-gb').innerHTML = '🥴 Fiquei cegooo kkkk';
            campo.value = '';
        }
    }

    // ativar tarefas
    if(campo.value == 'O que preciso fazer hoje?') {
        c('table').style.display = 'inline-table'; // mostrar tarefas

        c('#message-gb').innerHTML = `Foco, Força e Fé meu mano kkkk <br> Hoje é o dia ${today} e aqui está sua lista de tarefas`; // mostrar mensagem + o dia de hoje
        campo.value = '';
    } else {
        if(campo.value = 'O que preciso fazer hoje?') {
            c('table').style.display = 'none'; // esconder tarefas
            campo.value = '';
        }
    }
















    //impede o envio do formulario
    e.preventDefault();
}) 