import dotenv from 'dotenv';
dotenv.config();

// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { getConfig } from './getConfig';
import EventHandler from './eventHandler';

const DISCORD_TOKEN = getConfig().DISCORD_TOKEN;

// Create a new client instance with intents
// Check what intents is needed via https://discord.com/developers/docs/topics/gateway#gateway-intents
const client = new Client({
  intents: []
});

const eventHandler = new EventHandler(client);
eventHandler.initEvents();

// Login to Discord with your client's token
client.login(DISCORD_TOKEN).catch((error) => {
  console.log(error);
});
