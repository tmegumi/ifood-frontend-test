import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Form, LogInButton, PlaylistItems, Title } from './styles';
import getTokenFromHashLocation from '../../utils/getTokenFromHashLocation';

export const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'YOUR_CLIENT_ID_HERE';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-read-email'];

const Playlists: React.FC = () => {
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const { accessToken } = getTokenFromHashLocation(location.hash);

    setToken(accessToken);
  }, [location]);

  return (
    <>
      <Title>Explore your featured playlists</Title>

      <Form>
        <input placeholder="Search" />
        <button type="submit">Search</button>
      </Form>

      {!token && (
        <LogInButton>
          <a
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              '%20',
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        </LogInButton>
      )}

      {token && (
        <PlaylistItems>
          <a href="http://open.spotify.com/user/spotify/playlist/6ftJBzU2LLQcaKefMi7ee7">
            <img
              src="https://lite-images-i.scdn.co/image/ab67706f00000002b993db2853bd63806df2464f"
              alt="Monday Morning Mood"
            />

            <div>
              <strong>Monday Morning Mood</strong>
              <p>
                Relaxed deep house to slowly help you get back on your feet and
                ready yourself for a productive week
              </p>
            </div>
          </a>
          <a href="http://open.spotify.com/user/spotify/playlist/6ftJBzU2LLQcaKefMi7ee7">
            <img
              src="https://lite-images-i.scdn.co/image/ab67706f000000027e368901f39aae9d510c8fda"
              alt="Monday Morning Mood"
            />

            <div>
              <strong>Monday Morning Mood</strong>
              <p>
                Relaxed deep house to slowly help you get back on your feet and
                ready yourself for a productive week
              </p>
            </div>
          </a>
          <a href="http://open.spotify.com/user/spotify/playlist/6ftJBzU2LLQcaKefMi7ee7">
            <img
              src="https://lite-images-i.scdn.co/image/ab67706f00000002b993db2853bd63806df2464f"
              alt="Monday Morning Mood"
            />

            <div>
              <strong>Monday Morning Mood</strong>
              <p>
                Relaxed deep house to slowly help you get back on your feet and
                ready yourself for a productive week
              </p>
            </div>
          </a>
        </PlaylistItems>
      )}
    </>
  );
};

export default Playlists;
