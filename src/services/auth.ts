import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPES,
} from '../constants/apiConfig';

const logIn = (): void => {
  const logInUri = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
    '%20',
  )}&response_type=token`;

  window.location.href = logInUri;
};

export default logIn;
