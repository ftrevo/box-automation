## Para rodar você precisa os seguintes pontos instalados:

- Node.js versão v10.24.0
  - Sugestão, usar o NVM
- Microsoft Visual C++ Redistributable
  - https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0

## Arquivo de configuração: config.json

{

  "caixas-ja-recuperadas": 0,                      <-- Quantas caixas você já abriu, útil para quando você jogou um pouco depois vai ativar o bot.

  "intervalo-movimento-personagem": 150000,        <-- Intervalo em milissegundos de movimento do personagem.

  "intervalo-verificacao-caixa-disponivel": 60000, <-- Intervalo em milissegundos de verificação de caixa.

  "sair-do-jogo-ao-abrir-todas-caixas": "SIM",     <-- Instrução para sair do jogo quanto terminar de pegar as 5 caixas diárias.

  "printar-tela-ao-abrir-caixa": "SIM"             <-- Instrução para printar a tela quando abrir. As imagens estarão na pasta images.

}

## Passo a Passo de instalação com o NVM
1 - Baixar o NVM
  - https://github.com/coreybutler/nvm-windows/releases

2 - Instalar o NVM

3 - Rodar o comando de instalação do Node.js
  - nvm install 10.24.0

4 - Rodar o comando para o NVM usar a versão que você baixou
  - nvm use 10.24.0

5 - Abrir um Prompt de Comando ou Windows PowerShell e entrar na pasta que você baixou o projeto

6 - Executar o comando de instalação do projeto
  - npm install

## Passo a Passo de execução após a instalação

1 - Abrir o jogo

2 - Logar na sua conta

3 - Abrir a tela de abrir caixas

4 - Abrir um Prompt de Comando ou Windows PowerShell e entrar na pasta que você baixou o projeto e executar o comando de inicialização
  - npm start

5 - Voltar para o jogo