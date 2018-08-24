const SteamUser = require('steam-user');
const config = require('./config');

const client = new SteamUser();

const logOnOptions = {
  accountName: config.username,
  password: config.password
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
  console.log('Logged into Steam!');

  client.setPersona(SteamUser.Steam.EPersonaState.Online);
  client.gamesPlayed(440);
});