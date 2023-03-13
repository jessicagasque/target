//soma dos valores para obter o total
const valorTotal = 67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53;
//calculo do percentual por estado
const spPercentual = (67836.43 / valorTotal) * 100;
const rjPercentual = (36678.66 / valorTotal) * 100;
const mgPercentual = (29229.88 / valorTotal) * 100;
const esPercentual = (27165.48 / valorTotal) * 100;
const outrosPercentual = (19849.53 / valorTotal) * 100;
// valor total dos rendimentos
console.log(`O valor total de faturamento da empresa é de ${valorTotal}`);
// saída dos valores percentuais
console.log(`Percentual de representação de SP: ${spPercentual.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${rjPercentual.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${mgPercentual.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${esPercentual.toFixed(2)}%`);
console.log(`Percentual de representação de outros: ${outrosPercentual.toFixed(2)}%`);
