var meuFormulario = document.getElementById("cadastro_professor");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();
  cadastrar_professor();
});

function capturarPrimeiroNumeroInteiro() {
  const primeiro_numero_inteiro = Number(document.getElementById("nome_prof").value);
  return primeiro_numero_inteiro;
}

function capturarSegundoNumeroInteiro() {
 const segundo_numero_inteiro = Number(document.getElementById("segundo_numero_inteiro").value); 
 return segundo_numero_inteiro;
}


function somar() {
  let primeiro_numero_inteiro = capturarPrimeiroNumeroInteiro();
  let segundo_numero_inteiro = capturarSegundoNumeroInteiro();
  let resultado_soma = primeiro_numero_inteiro + segundo_numero_inteiro;
  imprimirResultadoNaTela(resultado_soma);
}


function imprimirResultadoNaTela(resultado_soma) {
  document.getElementById("resultado_soma").value = resultado_soma;
}
