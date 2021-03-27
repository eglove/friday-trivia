import styled from 'styled-components';
import { ContentVisibility } from './GlobalStyles.css';

export const QuizContainerStyles = styled(ContentVisibility)`
  display: grid;
  padding: 1rem;
  box-shadow: var(--boxShadow);

  .subject {
    font-weight: bold;
  }
`;
