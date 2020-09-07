import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    background-color: #1db954;
    border: none;
    border-radius: 0.3rem;
    color: #fff;
    font-weight: bold;
    height: 2.1rem;
    margin-top: 1rem;
    width: 100%;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#1db954')};
    }
  }

  @media (min-width: 500px) {
    flex-direction: row;

    button {
      margin-top: 0;
      margin-left: 1rem;
      width: calc(100% / 6);
    }
  }
`;

export const FilterItem = styled.div`
  width: 100%;

  & + div {
    margin-top: 1rem;
  }

  .react-select__control {
    border-radius: 0.3rem;
    height: 2.2rem;
    min-height: 2.2rem;
    width: 100%;

    .react-select__value-container {
      height: 2.2rem;

      .react-select__placeholder {
        color: #a8a8b3;
        font-size: 0.9rem;
      }

      input {
        color: #3a3a3a;
        font-size: 0.9rem;
        height: 2.2rem;
      }
    }
  }

  .react-select__menu {
    .react-select__option {
      color: #3a3a3a;
    }
  }

  input {
    border: 2px solid transparent;
    border-radius: 0.3rem;
    font-size: 0.9rem;
    height: 2.1rem;
    padding: 0 0.5rem;
    width: 100%;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  @media (min-width: 500px) {
    width: calc(100% / 6);

    & + div {
      margin-top: 0;
      margin-left: 1rem;
    }
  }
`;
