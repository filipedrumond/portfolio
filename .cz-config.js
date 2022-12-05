'use strict';
module.exports = {
  types: [
    {value: '✨ feat',     name: '✨ feat:       Uma nova funcionalidade'},
    {value: '🐛 fix',      name: '🐛 fix:        Uma correção de BUGS'},
    {value: '📝 docs',     name: '📝 docs:       Alteração na documentação (SWAGGER)'},
    {value: '💫 refactor', name: '💫 refactor:   Uma alteração de código que não corrige um bug nem adiciona um recurso'},
    {value: '📈 perf',     name: '📈 perf:       Uma mudança de código que melhora o desempenho'},
    {value: '✅ test',     name: '✅ test:       Adicionando testes ausentes'},
    {value: '🚀 ci',       name: '🚀 ci:         Ajuste nos arquivos de CI/CD.'},
    {value: '🔥 build',    name: '🔥 build:      Ajuste nos arquivos de build. (Docker, K8S)'},
    {value: '🔨 chore',    name: '🔨 chore:      Alterações no processo de compilação ou ferramentas auxiliares'},
    {value: '🚧 wip',      name: '🚧 wip:        Trabalho em progresso'},
    {value: '➕ version',  name: '➕ version:    Ajuste na versão do projeto'}
  ],
  allowTicketNumber: false,
  isTicketNumberRequired: false,

  messages: {
    type: 'Selecione o tipo de mudança que você quer commitar:',
    subject: 'Escreva uma descrição breve da mudança:\n',
    breaking: 'Liste todas as mudanças úteis (optional):\n',
    body: 'Forneça uma descrição detalhada da mudança (opcional). Use "|" para quebrar nova linha:\n',
    confirmCommit: 'Tem certeza de que deseja prosseguir com o commit acima?'
  },
  
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix', 'perf'],
  skipQuestions: ['scope', 'footer'],
  subjectLimit: 150
};
