const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates],
});

const TOKEN = process.env.TOKEN;

const channels = {
  "1497331135812735097": "Ometv",
  "1455095240418656400": "Room",
  "1478606822293242039": "Studio",
  "1506317305817338018": "Oc",
};

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);

  setInterval(async () => {
    for (const [id, name] of Object.entries(channels)) {
      try {
        const ch = await client.channels.fetch(id);
        if (ch && ch.name !== name) {
          await ch.setName(name);
        }
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
  }, 10000);
});

client.login(TOKEN);
