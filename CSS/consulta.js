let paciente=[]
 alert('SEJA BEM VINDO!')
do {
   
    const menu= console.log("1ª adcionar paciente ,2ª remover ,3ª sair")
    if (menu==="1") {
        const nome = console.log("Informe nome")
        let adcionar = paciente.push(nome)
        alert(adcionar)
    }if (menu==="2") {
        let remover = paciente.pop()
        alert(remover)
        
    }


} while ( menu ==="3");