import styled, { css } from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/background.jpg';

interface ContentHeaderProps {
  hasToken: boolean;
}

export const Container = styled.div`
  background-image: linear-gradient(
      360deg,
      rgba(43, 43, 43, 1) 10%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${backgroundImg});
  background-size: cover;
  backgroun-position: start;
  height: 100vh;
  position: relative;
  text-align: center;

  @media (min-width: 500px) {
    justify-content: start;
    text-align: left;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 1rem 0.5rem 0;

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

export const ContentHeader = styled.div<ContentHeaderProps>`
  ${props =>
    props.hasToken &&
    css`
      height: 50%;
      transform: translateY(50%);
      top: -50%;
    `}

  ${props =>
    !props.hasToken &&
    css`
      margin-bottom: 5rem;
    `}
`;

export const Title = styled.h1`
  margin: 3rem 0 2rem;

  @media (min-width: 500px) {
    font-size: 2.7rem;
  }
`;

export const Subtitle = styled.h2`
  color: #c2c2c2;
  display: block;
  font-weight: 600;
  line-height: 1.5;
  max-width: 30rem;
  margin-bottom: 2rem;
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
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#1db954')};
  }

  svg {
    margin-right: 1rem;
  }

  @media (min-width: 500px) {
    margin: 0;
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
