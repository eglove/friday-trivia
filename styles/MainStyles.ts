import styled from 'styled-components';

export const MainPageStyles = styled.div`
  h1,
  h2,
  h3,
  .timer {
    text-align: center;
  }
`;

export const TimerStyles = styled.div`
  text-align: center;
`;

export const FlexStyles = styled.div`
  display: flex;
`;

export const ColumnGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props): number => props.columns}, 1fr);
`;

export const Display = styled.div<{ display: string }>`
  display: ${(props): string => props.display};
`;
