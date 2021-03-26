import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const NavStyles = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  margin: 1rem;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

  a,
  a:visited {
    color: black;
    text-decoration: none;
    padding: 1rem;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
