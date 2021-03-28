import styled from 'styled-components';

export const AuthFormStyles = styled.form`
  display: grid;
  place-items: center;
  margin-top: 1rem;

  label {
    display: grid;
    grid-template-columns: 1fr;

    input {
      margin-bottom: 1rem;
    }
  }

  button {
    background: none;
    border: 1px solid black;
    cursor: pointer;
  }

  button + button {
    margin-left: 0.2rem;
  }
`;
