const c = (el)=>document.querySelector(el); // retornar o item
const cs = (el)=>document.querySelectorAll(el); // retornar um array com os itens que ele achou

let formulario = c('#formulario');
let campo = c('#campo');
let date = new Date(); // pegar data atual
let today = date.getDate(); // pegar o dia atual
let hours = date.getHours(); // pega a hora 
let minutes = date.getMinutes(); // pegar os minutos

// Definindo tarefas, respostas e temas
const toDo = {
    'o que preciso fazer hoje?': {
        display: 'inline-table',
        message: `Foco, Força e Fé meu mano kkkk <br> Hoje é o dia ${today} e aqui está sua lista de tarefas`
    }
};

const answer = {
    'tudo bem?': 'Estou bem e você?',
    'estou bem': 'Ai sim, Fazendo o que de bom?',
    'sim': 'Qual a boa?',
    'não': 'Nossa 😳 ok!',
    'que horas são?':  `São ${hours}:${minutes} `,
    'obrigado': 'Que nada Tmj! ❤️',
    default: 'Calma ai que ainda não sei falar muito 😳<br> Tenta digitar outra coisa prf!!!🙏🏾'
};

const themes = {
    'ativar modo light': {
        background: 'var(--mode-light)',
        message: '🥴 Quase me ceguei kkkkk'
    },
    'desativar modo light': {
        background: 'var(--black-color)',
        message: '😎 Me amarro nesse!'
    },
    'ativar modo dark': {
        background: 'var(--black-color)',
        message: '😎 Esse é top!'
    },
    'desativar modo dark': {
        background: 'var(--mode-light)',
        message: '🥴 Fiquei cegooo kkkk'
    }
};

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); //Impede o envio do formulário
    
    // Ações que ocorrem a cada envio do formulário

    //Pega o valor do campo e deixa em letras minusculas
    let campoFormatado = (campo.value).toLowerCase(); 

    // Limpa a input
    campo.value = '';

    if(answer[campoFormatado]){
        c('#message-gb').innerHTML = answer[campoFormatado];
    }else{
        c('#message-gb').innerHTML = answer.default;
    }
    if(themes[campoFormatado]) {
        c('body').style.backgroundColor = themes[campoFormatado].background;
        c('#message-gb').innerHTML = themes[campoFormatado].message;
    }
    if(toDo[campoFormatado]) {
        c('table').style.display = toDo[campoFormatado].display; // mostrar tarefas

        // Atribuindo margem a div gb quando o formulario estiver ativo
        c('.gb').style.marginTop = '4rem'; 

        c('#message-gb').innerHTML = toDo[campoFormatado].message;
    } 
    else c('table').style.display = 'none';
});