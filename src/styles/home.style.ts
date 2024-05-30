import styled from '@emotion/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
  box-sizing: border-box;
  gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TextContainer = styled.div`
  font-size: 6vw;
  font-weight: 600;
  line-height: 8vw;
  white-space: pre-wrap;
  min-height: calc(100vh - 16rem);
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media (max-width: 1024px) {
    font-size: 10vw;
    line-height: 12vw;
  }
`;
