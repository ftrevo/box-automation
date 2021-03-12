const fs = require('fs');
const path = require('path');

const translateConfigObject = (config) => ({
  boxesRecovered: config['caixas-ja-recuperadas'],
  movementInterval: config['intervalo-movimento-personagem'],
  boxVerificationInterval: config['intervalo-verificacao-caixa-disponivel'],
  exitOnOppeningAllBoxes: config['sair-do-jogo-ao-abrir-todas-caixas'] === 'SIM',
  printScreenWhenOpenBox: config['printar-tela-ao-abrir-caixa'] === 'SIM',
  sendMessages: config['enviar-mensagens'] === 'SIM'
});

const loadConfig = () => {
  const config = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config.json'), { encoding: 'utf-8' }));

  console.log('Configurações carregadas');
  console.table(config);

  return translateConfigObject(config);
}

const waitFor = (miliseconds) => {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

module.exports = {
  loadConfig,
  waitFor,
}
