const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});

const TOKEN = process.env.TOKEN;

// Channel names you want locked
const channels = {
  "1497331135812735097": "Ometv",
  "1455095240418656400": "Room",
  "1478606822293242039": "Studio",
  "1506317305817338018": "Oc",
};

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);

  setInterval(async () => {
    for (const [id, name] of Object.entries(channels)) {
      const ch = await client.channels.fetch(id).catch(() => null);
      if (!ch) continue;

      if (ch.name !== name) {
        ch.setName(name).catch(() => {});
      }
    }
  }, 10000);
});

client.login(TOKEN);
