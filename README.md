## Website

Warzone's website is built with React. This ties in with Warzone's [Mars](https://github.com/Warzone/mars) project to display information such as player leaderboards, individual statistics, and detailed match information.

## Contributing

### Setup

1. Set up the [Mars API backend](https://github.com/Warzone/mars-api) for your Minecraft server in the next step.

2. Set up a [SportPaper](https://github.com/PGMDev/PGM/releases) server with [PGM plugin](https://github.com/PGMDev/PGM) and [Mars plugin](https://github.com/Warzone/Mars) connected to the API backend. Make sure both plugins are configured and it is properly working.
	* The website relies on the API to fetch players' information and match statistics.

3. Make sure you have [Node.js (LTS preferred)](https://nodejs.org/) installed on the system that will be running the website. Run `yarn` (or `npm install`) in a terminal to install all of the dependencies.

4. Modify the `config.json` file **in the `src/` directory**, which looks like this:

```json
{
	"API_BASE": "YOUR_MARS_API_URL",
	"NAME": "Server Name",
	"SERVER_ADDRESS": "play.example.net",
	"STORE": "https://store.example.net",
	"DISCORD": "https://example.net/discord",
	"TWITTER": "ExampleHandle"
}
```

4. Start the development server with `yarn start` (or `npm run start`). You can also build the project with `yarn build` (or `npm run build`).

### Developer Notes

- We use [Prettier](https://prettier.io/). If you want to setup Prettier locally make sure to use our `.prettierrc`. This is optional, as we have a GitHub bot that formats files if they are not already formatted correctly.
- The site was not built with self-hosting in mind. Some assets are partially hardcoded, including logos and important links such as the Discord invite and store, at the moment.
