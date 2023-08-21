function verificaSeChuteEValido(chute){
    const numero = +chute;

    if (numeroInvalido(numero)){
        if (chute === 'game over'){
            document.body.classList.add('bg-encerrado');
            document.body.innerHTML = `
                <div>Game Over! Jogo Encerrado</div>
    
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
        } else {
        elementoChute.innerHTML += '<div>Valor Inválido: Fale um número</div>'
        } 
    }

    if (numeroMenorOuMaiorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: o número secreto deve estar entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function numeroInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMenorOuMaiorQuePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", (e) => {
    if(e.target.id =='jogar-novamente'){
        window.location.reload();
    }
})