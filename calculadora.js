let winningBalance;
let nivel;

function calculatorPoints(quant_victories,quant_defeat){
    winningBalance = quant_victories - quant_defeat
    if(winningBalance <= 10){
        nivel = "Ferro";
    }else if(winningBalance >= 11 && winningBalance <= 20){
        nivel = "Bronze";
    }else if(winningBalance >= 21 && winningBalance <= 50){
        nivel = "Prata";
    }else if(winningBalance >= 51 && winningBalance <= 80){
        nivel = "Ouro";
    }else if(winningBalance >= 81 && winningBalance <= 90){
        nivel = "Diamante";
    }else if(winningBalance >= 91 && winningBalance <= 100){
        nivel = "Lendário";
    }else{
        nivel = "Imortal";
    }
    return console.log(`O Herói tem de saldo de ${winningBalance} está no nível de ${nivel}`)
}
calculatorPoints(1000,20)