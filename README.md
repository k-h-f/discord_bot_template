# discord_bot_template
This is a template for making discordjs bots. You can clone this repository, and start developing your own personal discord bot using `nodejs` and the `discordjs` library. This template primaryily uses `typescript` and has linting already setup.

This template uses version `14.15.0` for `discordjs`.

## Prerequisites
1. nodejs (this template uses version 16)
2. Discord bot already set up, follow this [guide](https://discord.com/developers/docs/getting-started#configuring-a-bot) if you don't have a discord bot setup

## Setup
1. Run `yarn install` in root directory
3. Create a `.env` file and copy contents of `.env.defaults`
   * Assign your `DISCORD_TOKEN` in `.env` in order to run your application
   * Assign your `CLIENT_ID` in `.env` if you want to support commands
2. Run `yarn dev` if you are developing
   * if you are planning to run this in production, preferably use `yarn start`

## Developing guidelines
The `EventHandler` class is where events are pushed from the discord bot are handled. The idea is to create a function in this class for every event you want to listen to. For example, if you want to listen to the event `VoiceStateUpdate`, you could create a function called `voiceStateUpdate` that will have the implementation seen below

``` javascript

  voiceStateUpdate() {
    this.client.once('voiceStateUpdate', () => {
        ...
    });
  }
```

Once you created this function, you would need to call it in the `initEvents` function as seen below
``` javascript
  initEvents() {
    this.ready(); //This function is already implementated
    this.voiceStateUpdate(); //The function you just created
  }
```

You can find all the events [here](https://discord.js.org/#/docs/discord.js/main/typedef/Events).

### Supporting Commands
By default, this tempalate disables the support for commands but if you want to enable this, you can simply uncomment the import found in `app.ts` file
``` javascript
import './commands/deploy-commands';
```
There is a command already implemented called `commandsist` which will list out all of the commands that is supported in the bot. You can use this as a guideline to create more commands

If you want to create a new command, follow these instructions
1. Create a file in the `commandsFiles` directory that is named after the command you want to name. The filename must be in all lower caps
    * Implement the command. You can do this by either following the same structure as the previous command e.g. create `SlashCommandBuilder` object and the `exeucte` function
2. export it in `index.ts` inside the `commandFiles` directory. Prefably, export it with the same name as your command in all lower caps
3. Ensure that you have `CLIENT_ID` environment variable set in the `.env` file. You can find your application ID in the Discord developer portal, or follow the guide in the Prerequisites stage in this readme to create your bot
