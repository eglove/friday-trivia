import styled from 'styled-components';
import { ContentVisibility } from './GlobalStyles.css';

export const QuizContainerStyles = styled(ContentVisibility)`
  display: grid;
  padding: 1rem;
  margin: 1rem;
  box-shadow: var(--boxShadow);

  .subject {
    font-weight: bold;
    text-transform: capitalize;
  }

  .question {
    padding-top: 1rem;
  }
`;

export const VoteButton = styled.button`
  background: none;
  border: 1px solid black;
  padding: 0.2rem 1rem;
  width: 10rem;
  margin: 0.2rem 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const SuggestQuizButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  width: min-content;
  margin: 1rem auto 0 auto;

  button {
    background: none;
    border: 1px solid black;
    padding: 0.2rem 1rem;
    margin: auto;
  }

  button + button {
    margin-left: 1rem;
  }
`;

export const SuggestQuizForm = styled.form`
  display: grid;
  margin: 1rem auto 0 auto;
  text-align: center;

  button {
    background: none;
    border: 1px solid black;
    width: max-content;
    padding: 0.2rem 1rem;
    margin: auto;
  }
`;
