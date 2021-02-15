'use strict';

exports.opts = [
  {
    name: 'lurkers',
    short: 'l',
    type: 'integer',
    description: 'Number of Lurkers to connect to each pad',
    example: "'etherpad-usertest --lurkers=value' or 'etherpad-usertest -l value'",
  },
  {
    name: 'authors',
    short: 'a',
    type: 'integer',
    description: 'Number of Authors to connect to each pad',
    example: "'etherpad-usertest --authors=value' or 'etherpad-usertest -a value'",
  },
  {
    name: 'padcount',
    short: 'p',
    type: 'integer',
    description: 'Number of Pads to connect to each pad',
    example: "'etherpad-usertest --padcount=value' or 'etherpad-usertest -p value'",
  },
  {
    name: 'duration',
    short: 'd',
    type: 'integer',
    description: 'Duration (in seconds) to test',
    example: "'etherpad-usertest --duration=value' or 'etherpad-usertest -d value'",
  },
];
