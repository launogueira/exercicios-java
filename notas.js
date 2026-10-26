alert("Ola, vamos calcular suas médias!")

let notaHtml = Number (prompt("digie sua nota do módulo de HTML")); 
let notaCss = Number (prompt("digie sua nota do módulo de CSS"));
let notaJavascript = Number (prompt("digie sua nota do módulo de JAVASCRIPT"));

let somas = notaHtml + notaCss + notaJavascript;
let media = somas / 3 

alert(`sua média foi de ${media}`)