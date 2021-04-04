import styled from 'styled-components';

export const ResultsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const ResultsCountdownStyles = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 1rem;
`;

export const UserResultsColumnStyles = styled.div`
  box-shadow: var(--boxShadow);

  div {
    gap: 1rem;
    padding: 0.2rem 1rem;
  }

  .header {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const TriviaQAColumnStyles = styled.div`
  padding: 0.2rem 1rem;
  box-shadow: var(--boxShadow);
`;

export const TriviaQAStyles = styled.div`
  div:nth-child(2) {
    margin-bottom: 1rem;
  }

  div.question {
    font-weight: bold;
  }

  div.answer {
    margin-top: 0.2rem;
  }
`;
