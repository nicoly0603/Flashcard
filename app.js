function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartão = document.createElement('article')
    cartão.className = 'cartão'

    cartão.innerHTML = `
    <div class="cartão__conteudo">
    <h3>${categoria}</h3>
    <div class="cartão__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class=cartão__conteudo__resposta>
        <p>${resposta}</p>
    </div>
    </div>
    `
    
    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartão.classList.toggle('active', respostaEstaVisivel)
    }
    cartão.addEventListener('click', viraCartao)

    container.appendChild(cartão)

}