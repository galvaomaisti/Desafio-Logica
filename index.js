
//Estrutura de Decisão: Utilizamos uma sequência de instruções if-else if-else para verificar o valor de xpHeroi e definir o nivelHeroi de acordo com as condições fornecidas.

//Saída: A mensagem final é exibida usando o método alert, indicando o nome do herói e o nível correspondente baseado em sua experiência.


//Variável que armazena o nome do Herói solicita o nome do herói e a quantidade de experiencia (XP)
let nomeHeroi = prompt("Digite o nome do Herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de XP:"));

//Variável que armazena o nível do herói
let nivelHeroi = "";

//Estrutura de decisão para classificar o nível do herói como base no XP 
if (xpHeroi < 1000) {  
            nivelHeroi = "Ferro"; 
    } else if (xpHeroi <= 2000){
            nivelHeroi = "Bronze";
        } else if (xpHeroi <= 5000){
            nivelHeroi = "Prata";
        } else if (xpHeroi <= 7000){
            nivelHeroi = "Ouro";
        } else if (xpHeroi <= 8000){
            nivelHeroi = "Platina";
        } else if (xpHeroi <= 9000){
            nivelHeroi = "Ascendente";
        } else if (xpHeroi <= 10000){
            nivelHeroi = "Imortal";
        }else {
            nivelHeroi = "Radiante";
        }
//Exibe a mensagem com o nome do herói e o nível do herói
// Saída da mensagem final        
alert ("O herói " + nomeHeroi + " está no nível de " + nivelHeroi);
