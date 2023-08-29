
function menu() {
  return prompt= ("Informe á opçao que deseja calcular \n 1ªTriangulo \n 2ªRetangulo \n 3ªQuadrado\n 4ªCirculo\n 5ª sair ")
}

function calcularTriangulo(base,altura){
   return Math.floor(base * altura/2)
}
function calcularRetangulo(base,lado){
    return Math.floor(base*lado)
}
function calcularQuadrado(lado){
    return Math.floor(calcularRetangulo(lado,lado))
}
function calcularTrapezio(baseMaior,baseMenor,altura){
    return Math.floor((baseMaior + baseMenor) * altura/2)
}
function calcularCirculo(raio){
    return Math.pow(raio,2) * Math.PI()
}




do {

    let respostaUser = menu()
if (respostaUser=="1") {
    let triangulo=prompt("Informe a base  e a altura")
    calcularTriangulo(triangulo)
} else if(respostaUser==="2") {
    let retangulo=prompt("Informe a base  e o lado")
    calcularTriangulo(retangulo)
}else if(respostaUser==="3"){
    let quadrado=prompt("Informe o lado")
    calcularTriangulo(quadrado)
}else if(respostaUser==="4"){
    let circulo=prompt("Informe o raio")
    calcularTriangulo(circulo)
}

} while (respostaUser!=="5");