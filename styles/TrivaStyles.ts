import styled from 'styled-components';

export const TriviaStyles = styled.div`
  display: grid;

  h1 {
    text-transform: capitalize;
    text-align: center;
  }
`;

export const TriviaQuestionStyles = styled.div`
  display: grid;
  box-shadow: var(--boxShadow);
  padding: 1rem;

  p {
    margin-bottom: 0.5rem;
  }

  input {
    margin: 0.5rem 0;
  }

  input[type='radio'] {
    margin-right: 1rem;
  }

  button {
    margin-top: 0.5rem;
    max-width: 10rem;
  }
`;
