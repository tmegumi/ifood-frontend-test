// Replace with your app's client ID, redirect URI and desired scopes
const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '6aa26c35f55d4a109610e64c709057c5';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-email'];

const logIn = (): void => {
  const logInUri = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20',
  )}&response_type=token&show_dialog=true`;

  window.location.href = logInUri;
};

export default logIn;
