# Connect 4 ReactJS App

## Overview

This ReactJS App was created as the final project for ISTE-442. It's responsible for displaying the UI and handling user interactions.

## Pre-requisites

- NodeJS `16.x.x`.
- NPM `8.x.x` or later.
- OS environment variables NODE_ENV accessible (old OS versions of Windows and Ubuntu might create problems).

# How to configure and run the app

- The app is hosted on `www.connectfour.link`.

1. Clone the project locally `git clone git@github.com:Andrea-Pallotta/Connect4Frontend.git`.
2. `cd Connect4Frontend/connect4`.
3. Run `npm install`.
4. To run the application locally in development mode, run `npm start`. This will start the reactJS with NODE_ENV=development.
5. To run the application locally in production mode (using the EC2 server), run `npm run serve`.
   - `npm run serve` is the combination of `npm run build` and `npx serve -s build`.
   - You can also install `serve` separately and run the build with `serve -s build`.
6. If you want the development app to connect to a different server than `localhost` [(i.e. you changed the IP address of the backend)](https://github.com/Andrea-Pallotta/Connect4Backend/blob/main/configs/configs.js#L6), you need to change the `LOCALHOST` endpoint in the [Connect4Backend/configs/configs.js](https://github.com/Andrea-Pallotta/Connect4Frontend/blob/main/connect4/src/components/API/endpoints.js#L5)
7. If you want the production build to connect to your own server, you need to change the `EC2` endpoint in the [Connect4Backend/configs/configs.js](https://github.com/Andrea-Pallotta/Connect4Frontend/blob/main/connect4/src/components/API/endpoints.js#L5).

## How CI/CD works

- All CI/CD is done through AWS Amplify.
- The AWS `Hosting API` is implemented and only a certified IAM user (in this case my `dev` IAM user) can push and publish changed.

## Features

- Global Chat to interact and send text-only messages to online users.
- List of online users and possibility to "challenge" them to a game.
- When a user is challenged, a pop up appears on their screen. They have 10 seconds to accept the challenge or the system will automatically decline it.
- Queue System: a user can enter the queue system and start a game when another users queues.
- The board game is a SVG grid, with masked circles.
- In game, the user can:
  - Make a move (if it's their turn).
  - Send a message in the private chat.
  - Forfeit the game (losing extra points).
- The board screen contains cards that show the two opponents scores, records, and the current turn.
- The app provides a leaderboard of all players, using infinite scrolling.
- The app provides a profile page where the user can find their score and record.

## Architecture and Code Structure

- Every `React.Component` (with the exception of Chat components) are lazy loaded using the `loadable` library.
  - This improves the efficiency of the code (more later).
- Service Workers are implemented for PWA (Progressive Web Apps) and take care of caching and offline loading.
- `React.Component`s are devided into `components` and `domain`.
  - Root pages and components that cannot be identified as basic elements (TextFields, Buttons, Labels, etc..) are placed in the domain folder, with the exception of `App.js`.
  - The other components are placed in the `components` folder.
- React takes care of all the encoding/decoding, removing the need to manually sanitize and validate everything to avoid XSS and CSRF attacks.

## What I think was well done

- `Babel` implementation for dynamic imports and use of environment variables.
- Extensive use of `Webpacks 5` to define plugins useful for development:
  - Environment Plugins: use `Babel` to allow developers to used modified environment variables and `CROSS_ENV` variables.
- Lazy loading/importing `React.Component`s.
- Production environment only supports technology that is alive (i.e. draggable ReactDOM is dead and not used anywhere).
- Partially scalable: looks acceptable on tablets (i.e. MacOS), but not on mobile devices (i.e. iOS).
- Use of `MaterialUI` and custom styled components.
- Use of AWS `Amplify` features with security measures.
- This detailed `README.md` file!
- High `Lighthouse` rating (low accessibility is due to the fact that I did not add `aria-*` labels to buttons and other components).

![lighthouse rating](https://github.com/Andrea-Pallotta/Connect4Frontend/blob/main/performance.PNG)

## Contact Info

For issues, suggestions, or bugs, please open a a new [GitHub issue](https://github.com/Andrea-Pallotta/Connect4Frontend/issues) or contact me at [ap4534@rit.edu](mailto:ap4534@rit.edu).
Thank you and I hope you enjoyed this Connect 4 Web App!
