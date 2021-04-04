import styled from 'styled-components';

export const ResultsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const UserResultsColumnStyles = styled.div`
  div {
    gap: 1rem;
    padding: 0.2rem 1rem;
  }

  .header {
    font-weight: bold;
    text-decoration: underline;
  }
`;
