const yargs = require('yargs');

const argv = yargs
  .options({
    base: {
      type: 'number',
      alias: ['B', 'b'],
      describe: 'Czas minimalny (w sekundach)',
    },
    randTime: {
      type: 'number',
      alias: ['r', 'R'],
      describe: 'Maksymalna ilość dodanego losowo czasu (w sekundach)',
    },
    keys: {
      type: 'string',
      alias: ['k', 'K'],
      describe: 'klawisze, oddzielone przecinkami',
    },
  })
  .help('help')
  .alias('help', 'h')
  .alias('version', 'v').argv;

module.exports = argv;
