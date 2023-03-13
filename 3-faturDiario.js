import faturamentoMensal from './dados.json'; // importa o vetor de faturamento mensal

// Encontra o menor e o maior valor de faturamento no vetor
const menorFaturamento = Math.min(faturamentoMensal);
const maiorFaturamento = Math.max(faturamentoMensal);

// Calcula a média mensal de faturamento, ignorando os dias sem faturamento
const diasComFaturamento = filter(valor => valor > 0);
const mediaMensal = diasComFaturamento.reduce((acc, valor) => acc + valor, 0) / diasComFaturamento.length;

// Conta o número de dias em que o valor de faturamento diário foi superior à média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaMensal).length;

// Imprime os resultados
console.log(`Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
