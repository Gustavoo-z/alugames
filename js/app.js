let jogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {   
        let resultado = window.confirm("Você realmente quer devolver?");
            if (resultado) {
                imagem.classList.remove('dashboard__item__img--rented');
                botao.classList.remove('dashboard__item__button--return');
                botao.textContent = 'Alugar';
            } else {

            }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
            jogosAlugados ++;
            console.log(`O total de jogos alugados está em ${jogosAlugados}`);
    }    
}