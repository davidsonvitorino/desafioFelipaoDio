

let vitorias = 102
let derrotas = 0

function calcularSaldo(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    return saldo
}

let saldorankeadas = calcularSaldo(vitorias, derrotas)
    console.log(`O saldo de Rankeadas é ${saldorankeadas}`)

    if(saldorankeadas <= 10){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Ferro`)
    }
    else if(saldorankeadas >= 11 && saldorankeadas < 20){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Bronze`)
    }
    else if(saldorankeadas >= 21 && saldorankeadas < 50){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Prata`)
    }
    else if(saldorankeadas >= 51 && saldorankeadas < 80){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Ouro`)
    }
    else if(saldorankeadas >= 81 && saldorankeadas < 90){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Diamante`)
    }
    else if(saldorankeadas >= 91 && saldorankeadas < 100){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Lendário`)
    }
    else if(saldorankeadas >= 101){
        console.log(`O heroi está com ${saldorankeadas} vitorias e seu nível é Imortal`)
    }
