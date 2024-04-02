const form = document.getElementById('calcula-divida');

function validaNumero(event){
    event.preventDefault();

    resetResultados();

    const numeroCompra = parseFloat(document.getElementById('compra').value);
    const numeroSaldo = parseFloat(document.getElementById('saldo').value);

    const testeFalha1 = 'O  valor da sua compra de R$' + numeroCompra + ' é maior que o seu poder de compra de  R$' + numeroSaldo + '. <b> Para a validação ser feita é preciso que o seu saldo seja maior que a sua compra.</b>';
    const testeValida2 = 'O seu poder de compra de R$' + numeroSaldo + ' é maior que o valor de compra de  R$' + numeroCompra + '. <b>Aproveite e faça a sua compra sem medo :)</b>';
    const testeFalhaIguais = 'Atenção: O valor de compra de R$' + numeroCompra + ' e o seu poder de compra de R$' + numeroSaldo + ' são iguais. <b> Aconselhamos que o seu saldo seja maior que o valor de compra para realizar uma compra segura.</b>';

    if (numeroCompra > numeroSaldo) {
        document.querySelector('.p-resultado-negativo').innerHTML = testeFalha1;
    } else if (numeroSaldo > numeroCompra) {
        document.querySelector('.p-resultado-positivo').innerHTML = testeValida2;
    } else {
        document.querySelector('.p-resultado-nulo').innerHTML = testeFalhaIguais;
    }

    calculaDiferenca(numeroCompra, numeroSaldo);

    calculaSoma(numeroCompra, numeroSaldo);

}

function calculaDiferenca(numeroCompra, numeroSaldo) {

    let resultadoDiferenca;

    if (numeroCompra > numeroSaldo){
        resultadoDiferenca = numeroCompra - numeroSaldo;
    }else if (numeroSaldo > numeroCompra) {
        resultadoDiferenca = numeroSaldo - numeroCompra;
    }else {
        resultadoDiferenca = 0;
    }

    const diferencaMensagemSucesso = 'Se você comprar algo no valor de  R$' +numeroCompra +' com o saldo de  R$' +numeroSaldo+ ' sobrará um restante de <b>R$' +resultadoDiferenca + '</b> no seu saldo bancário.';
    const diferencaMensagemNegativo = 'Não é possível realizar a sua compra de R$' +numeroCompra +' com o saldo de R$' +numeroSaldo + '. Se você comprasse o seu produto ficaria com um saldo negativado de <b>R$-' +resultadoDiferenca+ '</b> no seu banco.'
    const diferencaMensagemNulo = 'Se você comprar algo no valor de  R$' +numeroCompra +' com o saldo de   R$' +numeroSaldo+ ' sobrará um restante de <b> R$' +resultadoDiferenca + '</b> no seu saldo bancário. Aconselhamos que sobre R$0,01 ou mais para ser uma compra segura';

    if(numeroSaldo > numeroCompra){ 
        document.querySelector('.p-diferenca-positivo').innerHTML = diferencaMensagemSucesso;
    }else if(numeroCompra > numeroSaldo) {
        document.querySelector('.p-diferenca-negativo').innerHTML = diferencaMensagemNegativo;
    }else{
        document.querySelector('.p-diferenca-nulo').innerHTML = diferencaMensagemNulo;
    }
}

function resetResultados(){

    document.querySelector('.p-resultado-negativo').innerHTML = '';
    document.querySelector('.p-resultado-positivo').innerHTML = '';
    document.querySelector('.p-resultado-nulo').innerHTML = '';
    document.querySelector('.p-diferenca-positivo').innerHTML = '';
    document.querySelector('.p-diferenca-negativo').innerHTML = '';
    document.querySelector('.p-diferenca-nulo').innerHTML = '';
}


form.addEventListener('submit', validaNumero);