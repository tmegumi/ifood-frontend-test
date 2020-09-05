import React from 'react';

import { Form, PlaylistItems, Title } from './styles';

const Playlists: React.FC = () => {
  return (
    <>
      <Title>Explore your featured playlists</Title>

      <Form>
        <input placeholder="Search" />
        <button type="submit">Search</button>
      </Form>

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
    </>
  );
};

export default Playlists;
