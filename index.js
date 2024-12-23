let resultado = saldo(1000, 909)

let nivel = ratingHero(resultado)
console.log(`O Heroi de saldo de ${resultado} vitória(s) está no nível de ${nivel}`)


function ratingHero (resultado){

    if (resultado <= 10 ){
        return "Ferro"
    } else if (resultado >= 11 && resultado <= 20){
        return "Bronze"
    } else if (resultado >= 21 && resultado <= 50){
        return "Prata"
    } else if (resultado >= 51 && resultado <= 80){
        return "Ouro"
    } else if (resultado >= 81 && resultado <= 90){
        return "Diamante"
    } else if (resultado >= 91 && resultado <= 100){
        return "Lendário"
    } else if (resultado >= 101){
        return "Imortal"
    }
}


function saldo(vitorias, derrotas){
    let rankeada = vitorias - derrotas
    return rankeada
}



