# Dictionary Game

Welcome to the Dictionary Game app! Based on the classic game of hangman, you must use the available letters to guess a hidden word. In Dictionary Game, a random word is selected from the dictionary, and you must use the dictionary definition to help you guess the word!

## Demo
View live demo: [dictionary-game.holmes-software.com](https://dictionary-game.holmes-software.com/).

![Dictionary Game demo gif](./dictionary-game.gif)

## How to Run Locally
1. Clone down this repository from GitHub onto your local machine, then cd into root project directory.
2. Run `npm i` to install all dependecies.
3. Open the `index.html` file in your browser OR run `npm run serve` then visit `http://localhost:3000` in your browser to be able to test the service worker for PWA development.

## How to Reconfigure Service Worker
Only do this if you know what you are doing by modifying the service worker configuration. Since the service worker is functional by default, there is no need to modify it unless you have modified the app, you notice it has stopped working, and you want to use the service worker in the first place (like for creating a PWA).
1. Modify `workbox-config.js` to your liking.
2. Run `workbox wizard`, then follow the prompts.
3. Run `workbox generateSW workbox-config.js` to apply the settings from the wizard and generate the service worker files.

## Made by
Joshua Holmes<br/>
[holmes-software.com](https://www.holmes-software.com)<br/>
[linkedin.com/in/joshua-phillip-holmes](https://www.linkedin.com/in/joshua-phillip-holmes/)<br/>
[github.com/joshua-holmes](https://github.com/joshua-holmes)<br/>
[joshua.phillip.holmes@gmail.com](mailto:joshua.phillip.holmes@gmail.com)