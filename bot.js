const SteamUser = require('steam-user');
const config = require('./config');

const client = new SteamUser({ enablePicsCache: true });

const logOnOptions = {
  accountName: config.username,
  password: config.password
};

client.logOn(logOnOptions);

client.on('loggedOn', (details) => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  var currentGame = 0;
  var games = [
    385200,
    596440,
    680620,
    368900,
    259360,
    410590,
    304390,
    460660,
    431270,
    253920,
    254060,
    351030,
    35450,
    233130,
    279640,
    892760
  ];
  client.gamesPlayed(games[currentGame++]);


  setTimeout(function() {
    client.gamesPlayed(games[currentGame++]);

    if (currentGame === games.length) {
        currentGame = 0;
    }

  }, 10800000)
});


