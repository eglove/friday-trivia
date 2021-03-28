import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NavStyles = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  box-shadow: var(--boxShadow);
  margin: 0 1rem 1rem 1rem;

  a,
  a:visited {
    color: var(--fontColor);
    text-decoration: none;
    padding: 1rem;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

export const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem 0;

  a,
  .paginationSection {
    border: 1px solid lightgray;
    padding: 0.2rem 1rem;
    margin: 0;
    color: var(--fontColor);
    text-decoration: none;
  }

  a[aria-disabled='true'] {
    pointer-events: none;
    opacity: 40%;
  }
`;
