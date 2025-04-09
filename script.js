const botoesDoar = document.querySelectorAll('.doar-btn');
const secaoDoar = document.getElementById('doar');
const opcoesDoacao = document.querySelectorAll('.opcao-doacao');

let causaSelecionada = '';

botoesDoar.forEach(botao => {
    botao.addEventListener('click', () => {
        causaSelecionada = botao.dataset.causa;
        secaoDoar.classList.remove('oculto');
    });
});

opcoesDoacao.forEach(opcao => {
    opcao.addEventListener('click', () => {
        const valorDoacao = opcao.dataset.valor;
        const pesquisa = `instituições carentes que ajudam ${causaSelecionada} com doações de R$ ${valorDoacao}`;
        const url = `https://www.google.com/search?q=${pesquisa}`;
        window.open(url, '_blank');
    });
});