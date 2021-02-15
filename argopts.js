'use strict';

exports.opts = [
  {
    name: 'authors',
    short: 'a',
    type: 'integer',
    description: 'Number of Authors to connect to each pad',
    example: "'etherpad-usertest --authors=value' or 'etherpad-usertest -a value'",
  },
  {
    name: 'duration',
    short: 'd',
    type: 'integer',
    description: 'Duration (in seconds) to test',
    example: "'etherpad-usertest --duration=value' or 'etherpad-usertest -d value'",
  },
];
