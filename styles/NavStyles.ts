import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NavStyles = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  box-shadow: var(--boxShadow);
  margin-bottom: 1rem;

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
