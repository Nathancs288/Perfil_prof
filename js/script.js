// Procura no HTML o elemento que possui o id "botao-contato" e o guarda em uma constante
const botaoContato = document.querySelector('#botao-contato');

// Procura o parágrafo no qual a mensagem será exibida e o guarda em uma constante
const mensagemContato = document.querySelector('#mensagem-contato');

// Procura o span do rodapé que receberá o ano e o guarda em uma constante
const anoAtual = document.querySelector('#ano-atual');

// new Date() obtém a data atual, getFullYear() extrai o ano e textContent o insere no span
anoAtual.textContent = new Date().getFullYear();

// Registra uma função que será executada sempre que o botão receber um clique
botaoContato.addEventListener('click', function () {
    // Substitui o conteúdo do parágrafo pelo texto da mensagem
    mensagemContato.textContent =
        // A string entre aspas é o texto que aparecerá para a pessoa usuária
        'Obrigado pelo interesse! Entre em contato pelo e-mail informado acima.';
// Encerra a função e a chamada do método addEventListener
});