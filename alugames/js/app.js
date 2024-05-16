function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let alugado = jogo.querySelector('.dashboard__item__img dashboard__item__img--rented');
    let nomeJogo = jogo.querySelector('.dashboard__item__name');
    if (imagem.classList.contains('dashboard__item__img--rented') && (confirm('voce tem certeza que quer devolver o jogo?'))) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        jogosAlugados--;
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = "Devolver"
        botao.classList.add("dashboard__item__button--return")
        jogosAlugados++;
    }




    console.log(jogosAlugados)
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
})
