# Spotifood

Spotifood is an Web application to explore the preferred playlists from iFood's customers.

![Spotifood](https://github.com/tmegumi/ifood-frontend-test/tree/master/assets/spotifood.png)

## ReactJS Web App
This project was build in ReactJS with typescript template and it is structured like following:

```bash
└── src
    ├── __tests__
    ├── assets
    ├── components
    │   └── ComponentName
    │       ├── index.tsx
    │       └── styles.ts
    ├── constants
    ├── hooks
    ├── pages
    │   └── PageName
    │       ├── components
    │       │   └── ComponentName
    │       │       ├── index.tsx
    │       │       └── styles.ts
    │       ├── index.tsx
    │       └── styles.ts
    ├── services
    ├── styles
    └── utils
```
Also it uses some code patterns to mantain code organization:
* [EditorConfig](https://editorconfig.org/)
* [ESLint](https://eslint.org/) (*AirBNB style guide*)
* [Prettier](https://prettier.io/)

The tests are written using [Jest](https://jestjs.io/) and [Enzyme](https://github.com/enzymejs/enzyme) to test Components.

## Installation
Clone the repository and install its dependencies running:
```bash
yarn
```
### Configuring Spotify credentials
You will need to register your app and get your own credentials from the [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/login).

To do so, go to your Spotify for Developers Dashboard, create your application and registered this Redirect URI:
* http://localhost:3000 (needed for the implicit grant flow)

Once you have created your app, replace the client_id, in apiConfig.ts file with the one you get from My Applications.

## Running
To run the application:
```bash
yarn start
```
Then, it will be opened http://localhost:3000 in the browser.
## Testing
To run the tests:

```bash
yarn test
```
