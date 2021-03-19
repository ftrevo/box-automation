const fs = require('fs');
const path = require('path');

const translateConfigObject = (config) => ({
  boxesRecovered: config['caixas-ja-recuperadas'],
  movementInterval: config['intervalo-movimento-personagem'],
  boxVerificationInterval: config['intervalo-verificacao-caixa-disponivel'],
  disconnectionVerificationInterval: config['intervalo-verificacao-desconexao'],
  exitOnOppeningAllBoxes: config['sair-do-jogo-ao-abrir-todas-caixas'] === 'SIM',
  turnOffComputer: config['desligar-computar-ao-finalizar'] === 'SIM',
});

const loadConfig = () => {
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json'), { encoding: 'utf-8' }));

  console.log('Configurações carregadas.');
  console.table(config);

  return translateConfigObject(config);
}

const waitFor = (miliseconds) => {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

const fillZero = (number) => {
  return (number + '').padStart(2, '0');
}

module.exports = {
  loadConfig,
  waitFor,
  fillZero
}
