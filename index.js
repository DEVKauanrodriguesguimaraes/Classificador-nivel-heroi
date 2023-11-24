let nome = "Kratos"
let xp = 1000
let nivelResult = ""
let tiposDeNivel = [1,2,3,4,5,6,7,8]
let i=xp-1

while(i<=1000){
    i++
    tiposDeNivel=1
    break;
}
while(i>1000 && i<=2000){
    i++
    tiposDeNivel=2
    break;
}
while(i>2000 && i<=5000){
    i++
    tiposDeNivel=3
    break;
}
while(i>5000 && i<=7000){
    i++
    tiposDeNivel=4
    break;
}
while(i>7000 && i<=8000){
    i++
    tiposDeNivel=5
    break;
}
while(i>8000 && i<=9000){
    i++
    tiposDeNivel=6
    break;
}
while(i>9000 && i<=10000){
    i++
    tiposDeNivel=7
    break;
}
while(i>10000){
    i++
    tiposDeNivel=8
    break;
}

 switch (tiposDeNivel){
        case 1:
        nivelResult= "Ferro"
        break;
        case 2:
        nivelResult= "Bronze"
        break;
        case 3:
        nivelResult= "Prata"
        break;
        case 4:
        nivelResult="Ouro"
        break;
        case 5:
        nivelResult="Platina"
        break;
        case 6:
        nivelResult="Ascendente"
        break;
        case 7:
        nivelResult="Imortal"
        break;
        case 8:
        nivelResult="Radiante"
        break;
        
 }
 console.log("O Herói de nome " + nome + " está no nível " + nivelResult)