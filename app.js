#!/usr/bin/env node
'use strict';

/*
* Overview
*
* 1. Connect 5(default) users.
* 2. Users set an author name.
* 3. Disconnect Users
* 4. Check reconnected users get their original name back
*
*/

const etherpad = require('etherpad-cli-client');
// const argv = require('argv');
// const argvopts = require('./argopts.js').opts;
// const startTimestamp = Date.now();
const authors = {};

const randomPadName = () => { // From index.html
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const strLen = 10;
  let randomstring = '';
  for (let i = 0; i < strLen; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
};

// takes argvoptsand argv and build an array of users ['a','a'......];
const prepareUsers = () => ['a', 'a', 'a', 'a', 'a'];

// takes connection settings and returns a url for etherpad.connect to connect to
const prepareConnection = () => `http://127.0.0.1:9001/p/${randomPadName()}`;
const users = prepareUsers(); // somewhat ghetto but matches load test implementation.
const host = prepareConnection();

for (const [user] of users) {
  console.log(`creating connection for ${user}`);
  const pad = etherpad.connect(host);
  pad.on('connected', (connectionInfo) => {
    console.log(connectionInfo);
    // set name
    const authorName = randomPadName();
    // store authorName in an object
    authors[connectionInfo.userId] = authorName;
    // tell the server to update our name
    // pad.changeName(authorName);
    // pad.chatMsg(`${authorName} sent a message`);
    // wait a second...
    console.log(pad);
    // pad.disconnect();
    const reconnected = etherpad.connect(host);
    reconnected.on('connect', (connectionInfo) => {
      // reconnected.
      // do we still have the right userId?
      if (authors[connectionInfo.userId] === connectionInfo.data.authorName) {
        // good stuff
      } else {
        // bad times;
      }
    });
  });
  pad.on('message', (message) => {
    console.warn('message', message);
  });
}


/*
// Take Params and process them
const args = argv.option(argvopts).run();

// Check for a host..
if (process.argv[2] && process.argv[2].indexOf('http') !== -1) {
  // It the arv2 item contains a hostname..
  host = process.argv[2];
  if (host.indexOf('/p/') === -1) { // No pad ID included so include one
    host = `${host}/p/${randomPadName()}`;
  }
} else {
  host = `http://127.0.0.1:9001/p/${randomPadName()}`;
}

if (args.options.authors) {
  let x = 0;
  while (x < args.options.authors) {
    users.push('a');
    x++;
  }
}
let endTime;
if (args.options.duration) {
  endTime = startTimestamp + (args.options.duration * 1000);
}

// Check every second to see if currentTime is => endTime
setInterval(() => {
  const currentTime = Date.now();
  if (currentTime > endTime) {
    console.log('Test duration complete and user Tests PASS');
    // process.exit(0);
  }
}, 100);

// Create user until failure.
const userUntilFailFn = () => {
  const users = ['a', 'a', 'a', 'a'];

  setInterval(() => {
    async.eachSeries(users, (type, callback) => {
      setTimeout(() => {
        newAuthor();
        callback();
      }, 200 / (users.length || 1));
    }, (err) => {
    });
  }, 1000); // every 5 seconds
};


// If there are authors specified let's connect them up!
if (args.options.authors) {
  async.eachSeries(users, (type, callback) => {
    setTimeout(() => {
      newAuthor();
      callback();
    }, 200 / (users.length || 1));
    // All authors connect within 1 second but send messages on
    // slightly different intervals
    // This need slightly different logic
  }, (err) => {
  });
} else {
  if (!endTime) {
    console.log('Creating user until the pad server stops responding in a timely fashion');
  }
  if (endTime) {
    const testD = Math.round((endTime - Date.now()) / 1000);
    console.log(`Creating user for ${testD} seconds`);
  }
  userUntilFailFn();
}

// Creates a new author
const newAuthor = () => {
  const pad = etherpad.connect(host);
  pad.on('socket_timeout', () => {
    console.error('socket timeout connecting to pad');
    // process.exit(1); eslint-disable-line no-process-exit
  });
  pad.on('socket_error', () => {
    console.error('connection error connecting to pad, did you remember to set userTest to true?');
    process.exit(1);
  });
  pad.on('connected', (padState) => {
    globalStats.numConnectedUsers = padState.numConnectedUsers;
    updateMetricsUI();

    // console.log("Connected Author to", padState.host);
    // Every second we send 4 characters
    // Mean = 40 WPM = 240 characters/minute
    // https://imlocation.wordpress.com/2007/12/05/how-fast-do-people-type/
    // This simulates the Mean of an author
    setInterval(() => {
      updateMetricsUI();
      try {
        pad.append(randomString()); // Appends 4 Chars
      } catch (e) {
        console.log('Error!');
      }
    }, 400);
  });
  pad.on('message', (msg) => {
    if (msg.type !== 'COLLABROOM') return;
  });
};
*/
