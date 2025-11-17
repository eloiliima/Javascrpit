/**** Escreva o código abaixo 👇******/
function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

function calcularMedia(nota1, nota2, nota3, nota4) {
  const soma = nota1 + nota2 + nota3 + nota4;
  const quantidadeDeNotas = 4;
  const media = dividir(soma, quantidadeDeNotas);
  return media;
}

function calcularAreaRetangulo(largura, altura) {
  const area = multiplicar(largura, altura);
  return area;
}

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  const cateto1_quadrado = elevarPotencia(cateto1, 2);
  const cateto2_quadrado = elevarPotencia(cateto2, 2);
  const soma_dos_quadrados = somar(cateto1_quadrado, cateto2_quadrado);
  const hipotenusa = calcularRaizQuadrada(soma_dos_quadrados);
  return hipotenusa;
}


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
