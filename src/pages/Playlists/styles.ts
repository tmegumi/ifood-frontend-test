import styled from 'styled-components';
import { shade } from 'polished';

export const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem 0;

  svg {
    margin-right: 0.5rem;
  }

  strong {
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media (min-width: 500px) {
    justify-content: start;
  }
`;

export const Title = styled.h1`
  margin: 2rem 0 3rem 0;
`;

export const Subtitle = styled.h2`
  color: #c2c2c2;
  font-weight: bold;
  line-height: 1.5;
  max-width: 30rem;
`;

export const LogInButton = styled.button`
  align-items: center;
  background-color: #1db954;
  border: none;
  border-radius: 1.5rem;
  display: flex;
  color: #fff;
  font-weight: bold;
  height: 3rem;
  margin-top: 1rem;
  padding: 0 1rem;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#1db954')};
  }

  svg {
    margin-right: 1rem;
  }
`;

export const SearchNameForm = styled.div`
  align-items: center;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 0.3rem;
  display: flex;
  padding: 0 1rem;
  margin-bottom: 2.5rem;

  svg {
    color: #a8a8b3;
  }

  input {
    border: none;
    color: #3a3a3a;
    flex: 1;
    height: 2.8rem;
    padding: 0 1rem;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;
