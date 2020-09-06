import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-top: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  input {
    border: 2px solid #fff;
    border-radius: 0.3rem;
    color: #3a3a3a;
    height: 2.8rem;
    padding: 0 1rem;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background-color: #1db954;
    border: 0;
    border-radius: 0.3rem;
    color: #fff;
    font-weight: bold;
    height: 2.8rem;
    margin-top: 0.5rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#1db954')};
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;
    max-width: 700px;

    input {
      border-radius: 0.3rem 0 0 0.3rem;
      height: 3.5rem;
      width: 100%;
    }

    button {
      border-radius: 0 0.3rem 0.3rem 0;
      height: 3.5rem;
      margin-top: 0;
      width: 15rem;
    }
  }
`;

export const LogInButton = styled.button`
  background-color: #1db954;
  border-radius: 1.5rem;
  color: #fff;
  font-weight: bold;
  height: 3rem;
  margin-top: 3rem;
  width: 12rem;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#1db954')};
  }
`;

export const PlaylistItems = styled.div`
  margin: 3rem 0;

  a {
    display: flex;
    align-items: center;

    background-color: #303030;
    border-radius: 0.7rem;
    color: #fff;
    padding: 1rem;
    text-decoration: none;

    & + a {
      margin-top: 1rem;
    }

    img {
      border-radius: 0.7rem;
      height: 7rem;
      width: 7rem;
    }

    div {
      flex: 1;
      margin-left: 1rem;

      strong {
        display: block;
        font-size: 1.2rem;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: #c2c2c2;
        line-height: 1.3rem;
      }
    }
  }
`;
