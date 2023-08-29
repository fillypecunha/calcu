let cartas=[]
let menu=""
do { 
    for (let i = 0; i < cartas.length; i++) {
        const element = `Cartas ja incluindas no baralho ${i+1}ª ${cartas[i]}\n`;
         alert(element)
     }
     menu= prompt("Seja bem-vindo \n Informe qual opçao que deseja \n 1- Adicionar cartas\n 2-Puxar carta \n 3-Sair")
       

    if ( menu==="1") {''
        const nameCartas= prompt("informe a carta que deseja incluir no baralho")
        cartas.push(nameCartas)
    }if (menu==="2") {
        const cartaPuxada= cartas.pop()
        alert(cartaPuxada)
    }
    
} while (menu!== "3");