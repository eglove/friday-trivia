import styled from 'styled-components';
import { ContentVisibility } from './GlobalStyles.css';

export const QuizContainerStyles = styled(ContentVisibility)`
  display: grid;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: var(--boxShadow);

  .subject {
    font-weight: bold;
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
